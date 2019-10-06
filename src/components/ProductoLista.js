import React from 'react';
import { Link } from 'react-router-dom';

function ProductoLista({producto}) {

    const eliminarProducto = id => {
        console.log('Eliminando', id );
        //TODO: Eliminar los registros
        
    }


    return (
        <div>
            <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
                <p>
                    {producto.nombrePlatillo} {' '}
                    <span className="font-weight-bold">${producto.precioPlatillo}</span>
                </p>
                <div>
                    <Link
                        to={`/producto/editar/${producto.id}`}
                        className="btn btn-success mr-2"
                    >Editar</Link>

                    <button type="button" className="btn btn-danger" 
                    onClick={()=> eliminarProducto(producto.id)}>Eliminar</button>
                </div>
            </li>
        </div>
    );
}

export default ProductoLista;