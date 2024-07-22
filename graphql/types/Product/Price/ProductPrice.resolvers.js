module.exports = {
  Product: {
    price: (product) => {
      const price = parseFloat(product.price);
      const specialPrice = product.specialPrice ? parseFloat(product.specialPrice) : price;
      return {
        regular: price,
        special: specialPrice
      };
    }
  }
};
