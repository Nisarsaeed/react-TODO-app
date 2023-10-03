import { useState } from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Menu(){
    const [menuDisplay, setMenuDisplay] = useState('true');

   const linkStyle = {
        display: 'flex',
        alignItems: 'baseline'
   };

   function toggleMenu(){
        setMenuDisplay(!menuDisplay);
   }

   return (
    <div className={`menu-container ${menuDisplay ? '' : 'menu-hidden'}`}>
      <div className="menu-heading">
        <h2>Menu</h2>
        <i
          id="barsIcon"
          className="fa fa-bars fa-lg"
          onClick={toggleMenu}
        ></i>
      </div>
      <div className="menu-options">
        <h5 className="menu-list">Tasks</h5>
        <Link to="/" className="menu-list" style={linkStyle}>
          <i
            id="barsIcon"
            className="fa fa-list-ul fa-sm"
            style={{ margin: '5px' }}
          ></i>
          <h3>Today</h3>
        </Link>
        <Link to="upComming" className="menu-list" style={linkStyle}>
          <i
            id="barsIcon"
            className="fa fa-angle-double-right fa-lg"
            style={{ margin: '5px' }}
          ></i>
          <h3>Upcoming</h3>
        </Link>
      </div>
    </div>
  )
   }