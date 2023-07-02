import React from 'react';
import {Blog, Features, Footer, Header,
  Possibility, WhatGPT3} from './containers';
import {Navbar, Brand, CTA} from './components';
import './App.css';

const App = () => {
  return (
    <>
      <section className='App'>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </section>
    </>
  );
};

export default App;


