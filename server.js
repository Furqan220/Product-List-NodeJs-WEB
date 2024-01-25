const http = require("http");
const url = require("url");
const fs = require('fs');
const replaceHtml = require('./modules/replace_html');


let html = fs.readFileSync('index.html', 'utf-8', (e, d) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File content:', data);
});
let productsHtml = fs.readFileSync('product.html', 'utf-8', (e, d) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File content:', d);
});

let productsJson = JSON.parse(
    fs.readFileSync('product.json', 'utf-8', (e, d) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File content:', d);
    })
);


/*
Basic Architecture

let server = http.createServer((req, res) => {
    // res.writeHead()
    // console.log("A New Request Recieved" + req.url);
    // let url = uri.parse(req.url);
    // console.log("A New Request Recieved url" + url.pathname);
    // console.log("A New Request Recieved" + url.query);
    
    // let path = url.pathname.toLocaleLowerCase();
    let { query , pathname : path} = url.parse(req.url,true);

    // console.log("A New Request Recieved" + pathName);
    // console.log(query);
    // let path = pathName;
    // let x = url.parse(req.url ,true);
    // console.log(x)
    console.log(query)
    console.log(path)


    // let path = req.url;

    console.log(path)
    if (path == "/" || path == "/home") {
        res.writeHead(200)

        res.end(html.replace("{{%CONTENT}}", "This is Home Page").replace("{{%PRODUCTS}}", ''));
    } else
        if (path == "/about") {
            res.writeHead(200)

            res.end(html.replace("{{%CONTENT}}", "This is About Page").replace("{{%PRODUCTS}}", ''));
        } else
            if (path == "/contact") {
                res.writeHead(200)

                res.end(html.replace("{{%CONTENT}}", "This is Contact Page").replace("{{%PRODUCTS}}", ''));
            } else
                if (path == "/products") {
                    
                    if (!query.id) {
                        let productsArrayHtml = productsJson.map((prod)=>{
                            return replaceHtml(productsHtml,prod);
                        });
                        let productListHTML = html.replace("{{%PRODUCTS}}",productsArrayHtml.join(','));
                        res.writeHead(200)
                        res.end(productListHTML.replace("{{%CONTENT}}", "This is Products Page"));
                    } else {
                        console.log(query.id);
                        let prod = productsJson[query.id];
                        let product = replaceHtml(productsHtml,prod);
                        let productHTML = html.replace("{{%PRODUCTS}}",product);
                        res.writeHead(200)
                        res.end(productHTML.replace("{{%CONTENT}}", "This is Single Product Page"));
             
                    }
                }

                else {
                    res.writeHead(404)
                    res.end(html.replace("{{%CONTENT}}", "404 not Found").replace("{{%PRODUCTS}}", ''));
                }





});


server.listen(8000, "127.0.0.1", () => {
    console.log("Server Started");
});

*/
//Event Driven Architecture

const server = http.createServer();

server.on('request', (req, res) => {
    let { query, pathname: path } = url.parse(req.url, true);
    if (path == "/" || path == "/home") {
        res.writeHead(200)

        res.end(html.replace("{{%CONTENT}}", "This is Home Page").replace("{{%PRODUCTS}}", ''));
    } else
        if (path == "/about") {
            res.writeHead(200)

            res.end(html.replace("{{%CONTENT}}", "This is About Page").replace("{{%PRODUCTS}}", ''));
        } else
            if (path == "/contact") {
                res.writeHead(200)

                res.end(html.replace("{{%CONTENT}}", "This is Contact Page").replace("{{%PRODUCTS}}", ''));
            } else
                if (path == "/products") {

                    if (!query.id) {
                        let productsArrayHtml = productsJson.map((prod) => {
                            return replaceHtml(productsHtml, prod);
                        });
                        let productListHTML = html.replace("{{%PRODUCTS}}", productsArrayHtml.join(','));
                        res.writeHead(200)
                        res.end(productListHTML.replace("{{%CONTENT}}", "This is Products Page"));
                    } else {
                        console.log(query.id);
                        let prod = productsJson[query.id];
                        let product = replaceHtml(productsHtml, prod);
                        let productHTML = html.replace("{{%PRODUCTS}}", product);
                        res.writeHead(200)
                        res.end(productHTML.replace("{{%CONTENT}}", "This is Single Product Page"));

                    }
                }

                else {
                    res.writeHead(404)
                    res.end(html.replace("{{%CONTENT}}", "404 not Found").replace("{{%PRODUCTS}}", ''));
                }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("Server Started");
});