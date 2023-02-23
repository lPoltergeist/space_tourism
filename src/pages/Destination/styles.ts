import styled from "styled-components";

export const DestinationSection = styled.section`

display: flex;

bottom: 6rem;
justify-content: space-around;
width: 100%;


@media (max-width: 900px) {
   
margin: auto;
justify-content: center;
align-items: center;

flex-direction: column;
}
`

export const YourDestination = styled.div`

@media (max-width: 500px) {
margin-top: 3rem;
}

h1 {

    float:left;
    margin-bottom: 5rem;

    @media (max-width: 900px) {
margin-bottom: -1rem;
position: absolute;
left: 5rem;
top: -3.5rem ;
}

@media (max-width: 500px) {
position: absolute;
left: 5rem;
top: -0.5rem;
}


}

p {
    color: #535353;
    font-weight: bold;
    margin-right: 1rem;
}
`

export const Planet = styled.div`
margin-top: 5rem;

img {
  width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  margin: 0 2rem;
}
`

export const DestinationInformation = styled.section`
display: block;
margin-top: 6rem;
margin-left: -10rem;

.rectangle {
    height: 2px;
  width: 455px;
  background-color: #383B4B;

  @media (max-width: 1100px) {
   width: 100%;
  }
}

@media (max-width: 1300px) {
    
  margin: 0;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }
}

@media (max-width: 600px) {
  text-align: center;
}

`

export const DestinationListDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-around;

margin-bottom: 3rem;

@media (max-width: 900px) {
width: 100%;    
}

@media (max-width: 500px) {
margin-bottom: 1rem;
}

`

export const DestinationList = styled.ul`
display: flex;
justify-content: space-around;

li {
    list-style: none;
    margin: 0 1rem;

  cursor: pointer;

  :hover {
    border-bottom: 1px solid #ffffff;
  }
}

`

export const DestinationText = styled.section`
margin: 1rem 0;

max-width: 445px;
text-align: start;

@media (max-width: 1300px) {
  max-width: 573px;

}

@media (max-width: 768px) {
margin: 0rem;
}

@media (max-width: 500px) {
margin: 0rem 2rem;
}
`

export const BottomInformation = styled.section`
display: flex;
float: left;
margin-top: 1rem;


@media (max-width: 768px) {
margin-bottom: 3rem;
}

@media (max-width: 900px) {
width: 100%;
align-items: center;
justify-content: center;
}

@media (max-width: 500px) {
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;

 margin: 0;
}
div {
   
    :first-child {
    margin-right: 2.5rem;

    @media (max-width: 500px) {
margin: 1rem 0;
}
}

h2 {
    color: #D0D6F9;
}

h1 {
    text-align: center;
    margin-top: 0.5rem;
    font-family: "bellefair", sans-serif;
    font-weight: 400;
    color: #ffffff;
}
}


`