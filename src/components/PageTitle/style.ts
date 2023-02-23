import styled from "styled-components";

export const PageTitleSection = styled.section`
display: flex;
height: 5rem;
width: 25rem;
align-items: center;
margin-left: 15%;

@media (max-width: 768px){
    height: 5rem;
}

@media (max-width: 600px){
    height: 5rem;
    justify-content: center;
    margin: 0;
}

span {
    color: #979797;
    margin-right: 1rem;
}
`