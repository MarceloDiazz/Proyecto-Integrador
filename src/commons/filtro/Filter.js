
import { React } from 'react'
import { Link } from "react-router-dom";

const Filter= () =>{
  

  return (
    <div className="text-center ">
    <h6 className="text-center font-bold text-2xl">Filtro</h6>
    <br/>
    <div className="text-center border p-2">
    <h6 className="p-2 bg-green-200">Ubicacion</h6>
      <ul>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
       <Link to="/San Javier">San Javier</Link> 
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Las Rosas</Link> 
       
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Las Rabonas</Link> 
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Nono</Link>
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Mina Clavero</Link> 
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">  Villa Cura Brochero</Link> 
        
      
      </div>
      </ul>
    </div>
    
    <div className="text-center border p-2">
    <h6 className="p-2 bg-green-200">Categoria</h6>
      <ul>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
       <Link to="/San Javier">Hotel</Link> 
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Camping</Link> 
       
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Hostel</Link> 
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Cabaña</Link>
      </div>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      <Link to="/San Javier">Mina Clavero</Link> 
      </div>
      </ul>
    </div>
    </div>
  )
}
export default Filter