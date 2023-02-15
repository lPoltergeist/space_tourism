import styled from 'styled-components';

export const Heading1 = styled.h1`
font-family: "Bellefair", sans-serif;
font-size: 150px;
color: #FFFFFFFF;
font-weight: 400;
`

export const Heading2 = styled.h2`
font-family: "Bellefair", sans-serif;
font-size: 100px;
font-weight: 400;
color: #FFFFFFFF;

@media (max-width: 1000px) {
    font-size: 90px;
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 80px;
}

`

export const Heading3 = styled.h3`
font-family: "Bellefair", sans-serif;
font-size: 56px;
color: #FFFFFFFF;
font-weight: 400;
`

export const Heading4 = styled.h4`
font-family: "bellefair", sans-serif;
font-size: 32px;
color: #FFFFFFFF;
font-weight: 400;
`

export const Heading5 = styled.h5`
font-family: "Barlow Condensed", sans-serif;
font-size: 28px;
color: #FFFFFFFF;
font-weight: 400;
`

export const Subheading1 = styled.h1`
font-family: "Barlow Condensed", sans-serif;
font-size: 28px;
letter-spacing: 4.72px;
color: #D0D6F9;
display: flex;

@media (max-width: 1000px) {
    font-size: 24px;
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px
}

`

export const Subheading2 = styled.h2`
font-family: "bellefair", sans-serif;
font-size: 14px;
font-weight: 400;
letter-spacing: 2.35px;
color: #D0D6F9;
`

export const NavText = styled.a`
font-family: "barlow condensed", sans-serif;
font-size: 16px;
letter-spacing: 2.7px;
color: #D0D6F9;
`

export const BodyText = styled.span`
font-family: "barlow condensed", sans-serif;
font-size: 18px;
letter-spacing: 2.7px;
line-height: 32px;
color: #D0D6F9;

@media (max-width: 1000px) {
    font-size: 18px;
    letter-spacing: 3.38px
}

@media (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 0;
}
`

