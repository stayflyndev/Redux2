import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from  './components/ProductList.component'

function App() {
  return (
    <div className="App">
     
     <ProductList />

    </div>
  );
}

export default App;

// {
//   ProductData.map(({title, id,}) => (
//       <SingleProduct title={title} key={id} />
//   ))
// }