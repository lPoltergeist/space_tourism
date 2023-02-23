import styled from "styled-components";

export const Home = styled.div`
display: flex;
justify-content: space-around;
margin: auto;


@media (max-width: 768px) {
    flex-direction: column;
}

@media (max-width: 768px) {
    flex-direction: column-reverse;
}

`

export const TitleBox = styled.section`
max-width: 80ch;
margin: auto;

@media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
}


` 

export const Textinfo = styled.div`


@media (max-width: 768px) {
  display: block;
  justify-content: center;
  width: 100vw;
  padding: 0 5%;

  div {
    width: 90vw;
    display: flex;
    text-align: center;
  }

    text-align: center;
    font-size: 70%;

    h1 { 
    text-align: center;
    margin: auto;
}

h3 {
    font-size: 2.5rem;
}
}

`

export const SliderButton = styled.div`

@media (max-width: 768px) {
    display: flex;
   justify-content: center;
   align-items: center;
}

button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: none;


    margin-top: 10rem;
    :nth-child(n+2) {
        margin-left: 1rem;
    }

    @media (max-width: 600px) {
   margin: 2rem 1rem;
   height: 15px;
   width: 15px;

}
}

.deactive {
    background-color: rgba(151,151,151, 0.4);
}
`

export const CrewPicture = styled.div`
margin-right: 10%;
height: 100%;

padding-top: 4rem;

@media (max-width: 768px) {
    margin: auto;
}

@media (max-width: 600px) {
    margin: 0 1rem;
    padding: 0 3rem;
    border-bottom: 1px solid rgba(151,151,151, 0.2);
}


img {
    height: auto;
max-width: 100%;
margin-bottom: -5px;
}
`

