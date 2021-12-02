import React from 'react'

const myAcount = () => {
    return (
        <div>
            <h6 className="font-bold mb-4">Opciones usuario:</h6>
          <ul>
            <a href="#favorites" className="ml-8 inline-flex items-center justify-center px-4 py-2  text-base font-medium text-yellow-500"> Favoritos</a>
            <a href="#favorites" className="ml-8 inline-flex items-center justify-center px-4 py-2  text-base font-medium text-green-800">Carrito</a>
            <a href="#logout" class="ml-8 inline-flex items-center justify-center px-4 py-2  text-base font-medium text-red-800">
          Cerrar cesion
        </a>
          </ul>
        </div>
    )
}

export default myAcount
