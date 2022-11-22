
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/slices/filterSlices';
import React, {Suspense} from 'react';
import {Routes, Route,}from 'react-router-dom';


import Home from './pages/Home';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import LoginPagas from './pages/LoginPages';
// import Register from './pages/Register';
// import FullArmor from './pages/FullArmor';

// import weapons from './assets/weapon.json';
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/'./pages/Cart')); // можно через loadable (альтернатива React.lazy)
const FullArmor = React.lazy(() => import(/* webpackChunkName: "FullArmor"*/'./pages/FullArmor'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/'./pages/NotFound'));
const LoginPagas = React.lazy(() => import(/* webpackChunkName: "LoginPagas"*/'./pages/LoginPages'));
const Register = React.lazy(() => import(/* webpackChunkName: "Register"*/'./pages/Register'));



function App() {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch() 
  
  return (
        <Routes>
          <Route path="/" element ={<MainLayout/>}>
    <Route path = "/Home" element={<Home />}/> 
    <Route 
    path = "/cart" 
    element={
    <Suspense fallback={<div>Завантаження корзини...</div>}> 
      <Cart/>
    </Suspense>
  }/> 

    <Route 
    path = "/armor/:id" 
    element={
    <Suspense 
    fallback={
    <div>Завантаження сторінки...</div>
    }>
      <FullArmor/>
    </Suspense>
  }/>

    <Route 
    path = "/not-found" 
    element={
    <Suspense 
    fallback=
    {<div>Завантаження сторінки...</div>}>
      <NotFound/>
    </Suspense>
    }/>

    <Route
     path = "/LoginPages"
     element={
     <Suspense 
     fallback=
     {<div>Завантаження сторінки авторизації...</div>}>
      <LoginPagas/>
    </Suspense>
    }/>

    <Route 
    path = "/Register" 
    element={ 
    <Suspense 
     fallback=
     {<div>Завантаження сторінки регістрації...</div>}>
      <Register/>
    </Suspense>
  }/>
    </Route>
        </Routes>
        
    
    
 
  );
}

export default App;
