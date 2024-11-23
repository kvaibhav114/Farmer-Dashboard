import React from 'react'
import '../Styles/nurturewisebuttons.css'
function NurturewiseButtons() {
  return (
    <div className='buttonContainer'>
      <h1>NurtureWise Agro.</h1>
      <ul className="functionButtons" style={{paddingLeft: '0px', listStyle: 'none'}}>
        <li><button>View Soil Health <br />Get insights into Soil Health and Type</button></li>
        <li><button>Marketplace <br />Connect with Suppliers for best deals</button></li>
        <li><button>Crop Recommendations <br />Discover Crops for Maximum yield</button></li>
        <li><button>Buy Recommended Fertilizers <br />Purchase fertilizers for efficient farming</button></li>
      </ul>
    </div>
  )
}

export default NurturewiseButtons
