import { createGlobalStyle } from "styled-components";
import Image from "../assets/destination/background-destination-desktop.jpg"
import ImageMobile from '../assets/home/background-home-mobile.jpg'

export const GlobalStyle = createGlobalStyle`

:root{
    --heading1: 300px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility

}

body {
    height: 100%;
    background-color: #0B0D17;
    background-size: cover;
    background-repeat: no-repeat;

 
    

    p {
        @media (max-width: 768px) {
                display: none;
        }
    }
}
`


