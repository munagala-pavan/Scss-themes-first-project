import React from 'react';
import Header from './components/Header/Header';
import  Footer from './components/Footer/Footer';
import './App.css';
import PageSideBar from './components/sideBar/pageSideBar';



function App() {
  return (
    <div className="App">
      <Header />
      <PageSideBar/>
      <Footer />
   </div>
 
  );
};

export default App;