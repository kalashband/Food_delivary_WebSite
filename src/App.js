import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
// import About from './Component/About';
import Contact from './Component/ContactUS';
import Error from './Component/Error';
import RestoMenu from './Component/RestoMenu';
import Footer from "./Component/Footer";
import Login from './Component/Login';


// Rest of your code...

const About = lazy(() => import("./Component/About"))

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path={'/'} element={<Body />} errorElement={<Error />} ></Route>
          <Route path={'/about'} element={<Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>}></Route>
          <Route path={'/contact'} element={<Contact />}></Route>
          <Route path={'/restaurant/:resId'} element={<RestoMenu />}></Route>
        </Routes>
        <Footer />
      </div >
    </>

  );
}


export default App;

// RouterProvider : provide this routing configurer 