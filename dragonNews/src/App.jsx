import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from "./component/partials/TopBar.jsx";

function App() {


    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

  return (
    <>
        <TopBar></TopBar>
    </>
  )
}

export default App
