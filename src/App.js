import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import React from 'react'
import Header from './components/Header'
import ImagesList from './components/ImagesList'
function App() {


  return (
    <>
      <Header />
      <Form />
      <ImagesList />
    </>
  );
}

export default App;
