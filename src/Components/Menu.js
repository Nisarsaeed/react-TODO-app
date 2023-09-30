import {Link} from 'react-router-dom';

export default function Menu(){

    return(
        <div className="menu-container">
            <div className="menu-heading">
               <h2>Menu</h2>
            </div>
            <div className="menu-options">
            <h5 className='menu-list'>Tasks</h5>
            <Link to='/' className='menu-list'><h3>Today</h3></Link>
            <Link to='upComming'className='menu-list'><h3>UpComming</h3></Link>
            </div>
        </div>
    );
};