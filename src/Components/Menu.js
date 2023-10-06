import { Link } from 'react-router-dom';
import {useToggleSideBar} from './Hooks/useToggleSideBar'
import 'font-awesome/css/font-awesome.min.css';

export default function Menu() {
  const {
    toggleMenu,
    sideBarDisplay
  } = useToggleSideBar();

  const linkStyle = {
    display: 'flex',
    alignItems: 'baseline'
  };

  return (
    <div className= {`sideBar ${sideBarDisplay ? '' : 'sideBar-hidden'}`}>
      <div className='menuBtn'>
        <i
          id="barsIcon"
          className="fa fa-bars fa-lg"
          onClick={toggleMenu}
        ></i>
      </div>
      <div className="menu-container">
        <div className="menu-heading">
          <h2>Menu</h2>
        </div>
        <div className="menu-options">
          <h5 className="menu-list">Tasks</h5>
          <Link to="/" className="menu-list" style={linkStyle}>
            <i
              className="fa fa-list-ul fa-sm"
              style={{ margin: '5px' }}
            ></i>
            <h3>Today</h3>
          </Link>
          <Link to="upComming" className="menu-list" style={linkStyle}>
            <i
              className="fa fa-angle-double-right fa-lg"
              style={{ margin: '5px' }}
            ></i>
            <h3>Upcoming</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}