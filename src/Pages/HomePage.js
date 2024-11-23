import React from 'react'
import "../Styles/homepage.css"
import leaf from "../Assets/leaf-icon.png"
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="contain">
    <div className='Home'>
        <div className="agrotitle">
            <img className='leaf' src={leaf} alt=""/>
            <h1 id='wise'>NURTUREWISE</h1>
            <p id='agr'>A G R O</p>
            <p id='motto'>Enhancing Crop Productivity and Profitability Through AI-Driven Solution</p>
        </div>
        <div className='log'>
        <button className = 'LoginButton' onClick={handleLoginClick}>LOGIN</button>
        </div>
    </div>
    </div>
  )
}

export default HomePage
