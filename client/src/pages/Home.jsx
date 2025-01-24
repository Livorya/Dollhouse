import products from "../../public/products.js";
import ProductList from "../components/ProductList";

export default function App() {
  return <>
    <h1>Dollhouse!</h1>
    <p>Trying my best!</p>

    <ProductList listOfProducts={products} />
  </>
}
