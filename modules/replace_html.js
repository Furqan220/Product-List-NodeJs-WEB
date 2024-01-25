module.exports = function replaceHtml (html , item){
    let out = html.replace("{{%PRODUCTIMAGE}}", item.productImage)
    out = out.replace("{{%PRODUCTIMAGE}}", item.productImage)
    out = out.replace("{{%PRODUCTNAME}}", item.name)
    out = out.replace("{{%PRODUCTCOLOR}}", item.color)
    out = out.replace("{{%PRODUCTROM}}", item.ROM)
    out = out.replace("{{%PRODUCTPRICE}}", item.price)
    out = out.replace("{{%PRODUCTDESC}}", item.Description)
    out = out.replace("{{%PRODUCTSIZE}}", item.size)
    out = out.replace("{{%PRODUCTCAMERA}}", item.camera)
    out = out.replace("{{%PRODUCTID}}", item.id)
    return out;
};
