function Home() {
  return (
    <div className='flex justify-center items-center h-96'>
      <div className='p-4 rounded-md border border-white w-full md:w-1/2 lg:w-1/3'>
        <h1 className='text-white text-center text-2xl'>
          Bienvenido a Epayco Payments  
        </h1>
        <p className='text-white mt-4'>
          En este proyecto contamos con los siguientes modulos desarrollados:
        </p>
        <ul className="p-4 flex flex-col gap-4">
          <li className="list-decimal text-white"><span className="font-bold">Register:</span> Area que permitira el Registro de un Cliente</li>
          <li className="list-decimal text-white"><span className="font-bold">Wallet:</span> Area en donde podras consultar balance y recargar billeteras</li>
          <li className="list-decimal text-white"><span className="font-bold">Buy:</span> Area en donde podras realizar la compra de un producto</li>
        </ul>
      </div>
    </div>
  )
}

export default Home