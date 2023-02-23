import styled from 'styled-components'
import { isPropertySignature } from 'typescript'

export const NavDiv = styled.div`
height: 100px;

@media (min-width: 768px) {
    display: flex;
    height: 150px;
}

`

export const LogoDiv = styled.div`
margin: 0 5rem 0 5rem;

@media (max-width: 600px) {
    margin: 2rem 5rem 0 2rem;;
}
`

export const Nav = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
    position: relative;
    width: 100%;
    margin: 0;
}

.MenuDiv {

    height: 6rem;
    width: 53.125rem;
    background-color: rgba(250,250,250,0.1); 
    backdrop-filter: blur(100px);
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
    display: none;
}

p {
        @media (max-width: 768px) {
                display: none;
        }
}

.rectangle {
    display: none;
    z-index: 9999;
    position: fixed;
  height: 2px;
  opacity: 40%;
  width: 38%;
  left: 15rem;
  background-color: #979797;

  @media (max-width: 768px) {
    display: none;
  }
}

ul {
    margin-left: 5rem;
    list-style: none;

    li {
        height: 96px;
        width: min-content;
        display: inline-block;
        align-items: center;
        justify-content: center;
        margin-right: 2.5rem;
        
        @media (max-width: 900px) {
            height: max-content;
        }

        :hover {
            border-bottom: 2px solid #fff;
        }

   

        a {
            display: flex;
            @media (min-width: 900px) {
                margin-top: 2.5rem; 
            }
    
            p {
                font-weight: bold;
                color: #ffffff;
                margin-right: 0.625rem;
            }
        }

}
}
}
`


//SIDEBAR

export const SidebarNav = styled.nav`
z-index: 999;
display: flex;
position: absolute;
height: 100%;
width: 15.875rem;
background-color: rgba(250,250,250,0.01); 
    backdrop-filter: blur(100px);
    right: 0;

    justify-content: center;
    
    
`

export const SidebarMenu = styled.div`
display: absolute;
margin-top: 5rem;

li {
    list-style: none;
    display: flex;
    margin: 2rem 0;
    transition: ease-in-out 0.2s;

    :hover {
        border-bottom: 1px solid white;
}

    
    p {
        font-family: "barlow condensed", sans-serif;
        font-weight: bold;
        
        letter-spacing: 2.7px;
                color: #ffffff;
                margin-right: 0.625rem;
}}
`

export const CloseIcon = styled.div`
position: absolute;
right: 2rem;
top: 2.5rem;
z-index: 99999999;

@media (min-width: 600px) {
    display: none;
}
`