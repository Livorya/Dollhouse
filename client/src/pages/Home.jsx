import products from "../../public/products.js";
import Package from "../components/Package.jsx";
import ProductList from "../components/ProductList";

export default function App() {
  return <>
    <h1>Dollhouse!</h1>
    <p>Trying my best!</p>
    <section id="packages">
      <Package
        title='Natural Package'
        collection='natural'
      />
      <Package
        title='Colorful Package'
        collection='colorful'
      />
      <Package
        title='Pink Package'
        collection='pink'
      />
    </section>
    
    <ProductList listOfProducts={products} />
  </>
}
