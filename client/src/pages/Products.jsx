import products from "../../public/products.js";
import ProductList from "../components/ProductList";

export default function App() {
  return <>
    <h1>Products</h1>
    <p>All products!</p>

    <ProductList listOfProducts={products} />
  </>
}
