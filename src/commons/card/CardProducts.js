import React from 'react'
import { Link } from 'react-router-dom'
const CardProducts = ({card}) => {

    return (
    
      <div key={card.id} className="group relative">
      <div className="w-full min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none">
        <img
          src={card.image}
          alt={card}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${card.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {card.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {card.location}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${card.price}
        </p>
      </div>
    </div>
      )
}

export default CardProducts
