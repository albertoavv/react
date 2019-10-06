import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/Producto';



function App() {

  const [productos, guardarProducto] = useState([]);
  const [recargarProdutos, guardarRecargarProductos] = useState(true);

  useEffect(()=> {
    if (recargarProdutos) {
      const consultarApi = async () => {
        // consultar api de json-server
        const resultado = await axios.get('http://localhost:4000/restaurant');
        //console.log(resultado.data);
  
        guardarProducto(resultado.data);
        
      }
      consultarApi();

      //cambiar a false la recarga de los productos
      guardarRecargarProductos(false);
    }
  }, [recargarProdutos]);


  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/productos" render={() => (
            <Productos 
              productos={productos}
            />
          )} />
          <Route exact path="/nuevo-producto" render={()=> (
            <AgregarProducto 
            guardarRecargarProductos={guardarRecargarProductos}
            />
          )} />
          <Route exact path="/producto/editar/:id" component={Producto} />
          <Route exact path="/productos/editar/:id" component={EditarProducto} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
