import React, { useState } from 'react';
import './Header.css';
import { Bluetooth } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull, faBars, faWifi, faSignal} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = useState(time);
    
    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }

    setInterval(UpdateTime, 1000);


  return (
      <>
    <div className='header'>
        <span className='icons'>
            <FontAwesomeIcon icon={faSignal} style={{fontSize:"22px"}} />
            <FontAwesomeIcon icon={faWifi} style={{fontSize:"22px"}} />
        </span>
        <span className='icons'>
            <span style={{fontSize:"20px", fontWeight:"bold"}}>{ctime}</span>
        </span>
        <span className='icons'>
            <Bluetooth  />
            <span style={{fontSize:"17px",fontWeight:"bold"}}>100%</span>
            <span><FontAwesomeIcon icon={faBatteryFull } style={{fontSize:"22px"}} /></span>
        </span>

    </div>

        <div className='User'>
            <h2>Hello, User</h2>
        <span>
            <FontAwesomeIcon icon={faBars} style={{fontSize:"2rem"}} />
        </span>
        </div>
      </>
  );
}

export default Header;
