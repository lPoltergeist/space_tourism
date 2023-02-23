import React, { useEffect, useState } from 'react'
import { NavText } from '../../styles/Headings'
import { CloseIcon, LogoDiv, Nav, NavDiv} from './styles'
import Logo from '../../assets/shared/logo.svg';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const Navbar = () => {
  


  return (
    <NavDiv>
   <Sidebar/>
      <Nav>
    <LogoDiv className="logo">
    <img src={Logo} alt="logo" />
    </LogoDiv>
  
    <div className="rectangle"></div>

    <div className="MenuDiv">
    <ul>
        <li>
          <NavText to='/'><p>00</p> HOME</NavText>
        </li>

        <li>
          <NavText to='/destination'><p>01</p> DESTINATION</NavText>
        </li>

        <li>
          <NavText to="crew"><p>02</p> CREW</NavText>
        </li>

        <li>
          <NavText to="technology"><p>03</p> TECHNOLOGY</NavText>
        </li>
      </ul>

    </div>
    
    </Nav>
    
    </NavDiv>
  )
}

export default Navbar