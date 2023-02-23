import React, { useEffect, useState } from 'react'
import { NavText } from '../../styles/Headings'
import { SidebarNav, SidebarMenu, CloseIcon } from './styles'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Sidebar = () => {
    const [MenuIsOpen, SetMenuIsOpen] = useState(false)

    const MenuToggler = () => SetMenuIsOpen(!MenuIsOpen);
    const Clicked = () => SetMenuIsOpen(false);

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        if (screenSize.dynamicWidth > 600) {
            SetMenuIsOpen(false);
         }    
    return(() => {
      window.removeEventListener('resize', setDimension);
    
  })
      }, [screenSize, SetMenuIsOpen])

  return (
    <>
    <CloseIcon onClick={MenuToggler}>
    {MenuIsOpen ? <AiOutlineClose size={'2rem'} color={'white'}/> : <AiOutlineMenu size={'2rem'} color={'white'}/>}
    </CloseIcon>
   {MenuIsOpen && 
   <SidebarNav>
   <SidebarMenu>
    <ul>
       <li>
       <p>00</p> <NavText onClick={Clicked} to="/"> HOME</NavText>
       </li>

       <li>
       <p>01</p> <NavText onClick={Clicked} to="/destination"> DESTINATION</NavText>
       </li>

       <li>
       <p>02</p> <NavText onClick={Clicked} to="/crew"> CREW</NavText>
       </li>

       <li>
       <p>03</p> <NavText onClick={Clicked} to="/technology"> TECHNOLOGY</NavText>
       </li>
       </ul>
    </SidebarMenu>
   </SidebarNav>}
    </>
  )
}

export default Sidebar