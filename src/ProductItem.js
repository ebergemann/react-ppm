


class ProductItem {
    constructor(productName, price, imageUrl){
        this.productName = productName;
        this.price = price;
        this.imageUrl = imageUrl;
        this.id = genId(productName)
    }
}


const genId = (title) => {
    let rand = Math.random().toString(36).substr(2, 9);
    return title.replace(/ /g, '') + rand;
  }

export default ProductItem;