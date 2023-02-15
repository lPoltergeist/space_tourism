import styled from 'styled-components'

export const Nav = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

position: fixed;
margin: 3rem 0;

@media (max-width: 768px) {
    position: relative;
    width: 100%;
    margin: 0;
    
}

img {
margin: 0 5rem;
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



div {
    height: 96px;
    width: 850px;
    background-color: rgba(250,250,250,0.1); 
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;

}

ul {
    margin-left: 5rem;
    list-style: none;

    li {
        width: min-content;
        display: inline-block;

        a {
            display: flex;
            margin-right: 40px;
            :hover {
            border-bottom: 2px solid white;
        }


            p {
                font-weight: bold;
                color: #ffffff;
                margin-right: 10px;
            }
        }
}
}
`

