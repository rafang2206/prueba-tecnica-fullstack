
function Product({ name, image, price, description, handleSelectedProduct }) {

  return (
    <div className="w-full md:w-1/3 lg:w-1/5 border border-gray-200  rounded-md p-2">
      <div className="w-full">
        <img src={image} className="w-full h-auto"  />
      </div>
      <div className="mt-4 p-1 flex flex-col gap-2">
        <p className="text-white flex justify-between">Precio <span className="text-xl">${price}</span></p>
        <p className="text-white text-lg">{name}</p>
        <p className="text-white text-sm">{description}</p>
      </div>
      <div className="w-full mt-4">
        <button onClick={handleSelectedProduct} className="w-full bg-yellow-400 p-1 font-semibold rounded-full">Comprar</button>
      </div>
    </div>
  )
}

export default Product