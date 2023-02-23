import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Heading1 = styled.h1`
font-family: "Bellefair", sans-serif;
font-size: 150px;
color: #FFFFFFFF;
font-weight: 400;
text-transform: uppercase;

@media (max-width: 600px) {
    font-size: 100px;
}
`

export const Heading2 = styled.a`
font-family: "Bellefair", sans-serif;
font-size: 9.375rem;
font-weight: 400;
color: #FFFFFFFF;
text-transform: uppercase;

@media (max-width: 1000px) {
    font-size: 5.625rem;
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 5rem;
}

`

export const Heading3 = styled.h3`
font-family: "Bellefair", sans-serif;
font-size: 3.5rem;
color: #FFFFFFFF;
font-weight: 400;
text-transform: uppercase;

@media (max-width: 600) {
    font-size: 1rem;
}
`

export const Heading4 = styled.h4`
font-family: "bellefair", sans-serif;
font-size: 2rem;
color: #FFFFFFFF;
font-weight: 400;
text-transform: uppercase;
`

export const Heading5 = styled.h5`
font-family: "Barlow Condensed", sans-serif;
font-size: 1.75rem;
color: #FFFFFFFF;
font-weight: 400;
text-transform: uppercase;
`

export const Subheading1 = styled.h1`
font-family: "Barlow Condensed", sans-serif;
font-size: 1.75rem;
letter-spacing: 4.72px;
color: #D0D6F9;
display: flex;

@media (max-width: 1000px) {
    font-size: 1.5rem;
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 1.25rem;
    letter-spacing: 3.38px
}

`

export const Subheading2 = styled.h2`
font-family: "bellefair", sans-serif;
font-size: 0.875rem;
font-weight: 400;
letter-spacing: 2.35px;
color: #D0D6F9;
`

export const NavText = styled(Link)`
font-family: "barlow condensed", sans-serif;
text-decoration: none;
font-size: 1rem;
letter-spacing: 2.7px;
color: #D0D6F9;
`

export const BodyText = styled.span`
font-family: "barlow condensed", sans-serif;
font-size: 1.125rem;
letter-spacing: 2.7px;
line-height: 32px;
color: #D0D6F9;

@media (max-width: 1000px) {
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0;
}
`

