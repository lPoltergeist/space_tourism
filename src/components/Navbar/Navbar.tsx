import React from 'react'
import { NavText } from '../../styles/Headings'
import { Nav} from './styles'
import Logo from '../../assets/shared/logo.svg';


const Navbar = () => {
  return (
    <Nav>
    <img src={Logo} alt="logo" />

    <div className="rectangle"></div>

    <div>
    <ul>
        <li>
          <NavText><p>00</p> HOME</NavText>
        </li>

        <li>
          <NavText><p>01</p> DESTINATION</NavText>
        </li>

        <li>
          <NavText><p>02</p> CREW</NavText>
        </li>

        <li>
          <NavText><p>03</p> TECHNOLOGY</NavText>
        </li>
      </ul>
    </div>

    </Nav>
  )
}

export default Navbar