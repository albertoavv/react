import React, { Fragment } from 'react';
import ProductoLista from './ProductoLista';

function Productos({productos}) {
    return (
        <div>
            <h1 className="text-center">Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ProductoLista
                    key={producto.id}
                      producto={producto}
                    />

                ))}

            </ul>

        </div>
    );
}

export default Productos;