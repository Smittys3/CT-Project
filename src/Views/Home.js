import React from 'react';
import { Link } from "react-router-dom";
import "./css/Home.css"

export default function Home() {
  return (
    <div className='home-picture'>
        <img src='https://www.pexels.com/photo/1640777/download/' alt='' width="100%"  />
        <Link to="/signup" style={{color: "red"}}>Great recipes for your body</Link>
    </div>
  )
}



