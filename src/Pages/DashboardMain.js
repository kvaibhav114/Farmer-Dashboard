import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/maindashboard.css"
import FarmerDashboard from './FarmerDashboard';
import GoogleMapComponent from './GoogleMapComponent';
import health from '../Assets/health.jpg'
import NurturewiseButtons from './NurturewiseButtons';

function DashboardMain() {
  return (
    <div className='navContainer'>
        <div className='navbarTop'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Marketplace</Link></li>
                    <li><Link to="/about">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        <div className="top-part">
        <FarmerDashboard />
        <img src={health} id='soilHealth' alt="" />
        <NurturewiseButtons />
        </div>
            <iframe
        style={{
            background: '#FFFFFF',
            width: '520px',
            height: '355px',
        }}
        src="https://charts.mongodb.com/charts-farmer-qzfuhau/embed/charts?id=2e82011b-9783-4aa3-baf1-893e7ad63afa&maxDataAge=3600&theme=light&autoRefresh=true"
        title="MongoDB Chart"
        className='Pichart'
        allowFullScreen
    ></iframe>
    <GoogleMapComponent />
        </div>
  )
}

export default DashboardMain
