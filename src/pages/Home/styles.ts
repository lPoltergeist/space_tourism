import styled from "styled-components";

export const Home = styled.div`
width: 100vw;
display: flex;
justify-content: space-around;

position: fixed;
bottom: 0;

@media (max-width: 768px) {
       display: block;

}

`

export const TitleBox = styled.section`
width: 480px;
margin: 0 0 7rem 0;


    h1{
    margin: 0 0 1rem 0;
   }
   
   @media (max-width: 768px) {
        margin: auto;
        padding-top: 5rem;

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

font-size: 32px;
font-family: "bellefair", sans-serif;

height: 270px;
width: 270px;

border-radius: 50%;
background-color: #ffffff;
border: none;
transition: ease-in-out 0.2s;

:hover{
    outline: 20px solid #979797; ;
}


@media (max-width: 1400px) {
  
}

`