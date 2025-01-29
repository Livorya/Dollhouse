
export default function Product({ product }) {
  const { name, image, type, collection, price } = product;

  const isWall = type.includes("wall");
  
  return <div className="product">
    <p className="title">{name}</p>
    <div className="item">
      {
        isWall ?
          <img className="behind-wall" src="./public/images/basic dollhouse.png" />
          :
          <></>
      }  
      <img src={image} />
    </div>
    <p>à {price}kr</p>
    <div className="buy-nav">
      <button className="undo">Undo</button>
      <p className="prod-count nr">0</p>
      <button className="buy">Buy</button>
    </div>
  </div>
}
