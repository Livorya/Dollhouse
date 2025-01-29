import { useEffect, useState } from "react";
import products from "../../public/products.js";

export default function Package({ title, collection }) {

  function calcPackagePrice() {
    let sum = 0;
    for (let product of products) {
      if (product.collection == collection || product.collection == "all") {
        sum += Number(product.price);
      }
    }
    return sum;
  }

  const [packageFurnitures, setPackageFurnitures] = useState([]);

  useEffect(() => {
    setPackageFurnitures(products.filter(product =>
      product.collection == collection && product.type != "wall"));
  }, []);

  const [packageHouseAndWalls, setPackageHouseAndWalls] = useState([]);

  useEffect(() => {
    setPackageHouseAndWalls(products.filter(product => product.collection == collection && product.type == "wall" || product.type == "house"));
  }, [] );

  return <div className="package">
    <div className={"product " + collection}>
      <p className="title">{title}</p>
      <div className="item">
        {
          packageHouseAndWalls.map((product, index) => <img 
          key={collection + product.name + index}
          src={product.image}
          />
          )
        }
      </div>
      <p className="pack-disc">[No Discount]</p>
      <p>{calcPackagePrice()}kr</p>
      <div className="buy-nav">
        <button className="undo">Undo</button>
        <p className="amount nr">0</p>
        <button className="buy">Buy</button>
      </div>
    </div> 
    {
      packageFurnitures.map((product, index) => <img
        key={collection + product.name + index}
        className={"show-" + product.type}
        src={product.image} 
      />
      )
    }
  </div>
}
