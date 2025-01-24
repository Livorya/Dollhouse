import Product from "./Product.jsx";

export default function ProductList({ listOfProducts }) {
  return <section id="products">
    {
      listOfProducts.map(
        (product, index) => <Product 
          key={product.name + "-" + index}
          product={product}
        />
      )
    }
  </section>
}
