import styled from "styled-components";

export const Home = styled.div`
width: 100vw;

display: flex;
justify-content: space-around;
position: fixed;
bottom: 5rem;  

@media (max-width: 768px) {
display: block;
margin: auto;
justify-content: center;
align-items: center;
height: 100vh;
position: relative;
}
`

export const TitleBox = styled.section`
width: 45vw;
margin: 0 0 7rem 0;


h1 {
    margin: 2.5rem 0;
   
}

   @media (max-width: 768px) {
        margin: auto;
        padding: 5rem 1rem 0 1rem;
}

@media (max-width: 600px) {
    width: auto;
    text-align: center;
    margin: 0; 
}

@media (max-width: 1400px) {
   
}
    text-align: justify;
    justify-content: center;
    align-items: center, no-repeat;
` 

export const ExploreButtonDiv = styled.div`


@media (max-width: 768px) {
  display: flex;
  width: 100vw;
  justify-content: center;
  margin-bottom: 2rem;

}

`

export const MainButton = styled.button`

margin-top: 5rem;

font-size: 2vw;
font-family: "bellefair", sans-serif;

height: 20vw;
width: 20vw;

border-radius: 50%;
background-color: #ffffff;
border: none;
transition: ease-in-out 0.2s;

:hover{
    background-color: rgba(255, 255,253,0.8);
    outline: 20px solid #979797;
    backdrop-filter: blur(10px);
}


@media (max-width: 600px) {
    height: 150px;
width: 150px;
font-size: 18px
}

`