import React from 'react'
const CardProducts = ({card}) => {

    return (
      <div key={card.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={card.image}
          alt={card}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`product/${card.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {card.name}
            </a>
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
