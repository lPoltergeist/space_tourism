import { ReactNode, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import ImageHome from "../assets/home/background-home-desktop.jpg"
import ImageDestination from '../assets/destination/background-destination-desktop.jpg';
import { useLocation } from "react-router-dom";


const route = window.location.href;
const href = route.substring(21);



export const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

   

}

body {
    height: 100%;
    background-image: url(${ImageDestination});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
`


