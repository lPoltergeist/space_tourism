import styled from "styled-components"; 

export const TechnologySection = styled.section`
display: flex;
justify-content: space-between;

height: 100%;
width: 100%;

@media (max-width: 768px){
    
    flex-direction: column-reverse;
}


.batata {
    display: flex;
    margin: 0 0 0 10%;

    @media (max-width: 768px){
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
}
    
}
`

export const SliderDiv = styled.div`
margin: auto 0;
margin-right: 4rem;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    flex-direction: row;
    margin: 1rem 0;
    justify-content: center;

    button {
        :nth-child(2 ){
            margin: 0 1rem;
        }
    }
   

}


.deactive {
    background-color: #0b0d17;
    border: none;
    outline: 1px solid #979797;
    color: #ffffff;

}

.active {
    :hover {
        background-color: #ffffff;
        color: #0B0D17;
    }
}

button {

  @media (min-width: 769px) {
    :nth-child(n + 2) {
        margin-top: 1.5rem;
    }
  }

    height: 80px;
    width: 80px;
    border-radius: 50%;

    font-family: 'bellefair', sans-serif;
    font-size: 32px;

    :hover {
        background-color: #0B0D17;
        outline: 1px solid #ffffff;
        color: #ffffff;
    }
}

`

export const TextSection = styled.section`
max-width: 29.75rem;
margin: auto 0;
margin-right: 1.5rem;

h3 {
    margin: 1.5rem 0 2rem 0;
}

`

export const ImageDiv = styled.div`
margin: auto 0;
right: -2rem;

img {
    width: 100%;
    height: auto;
    min-height: 527px;

    @media (max-width: 768px) {
       height: 310px;
       width: 100%;
       min-height: auto;
    }

}
`



