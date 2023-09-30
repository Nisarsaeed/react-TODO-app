import './Menu.css';

export default function Menu(){

    return(
        <div className="menu-container">
            <div className="menu-heading">
               <h2>Menu</h2>
            </div>
            <div className="menu-options">
            <h5>Tasks</h5>
            <h3>Today</h3>
            <h3>UpComming</h3>
            </div>
        </div>
    );
};