import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle';
import { BodyText, Heading1, Heading4, NavText, Subheading1 } from '../../styles/Headings';
import { Button } from './Button';
import { Home, TitleBox, ExploreButtonDiv } from './styles'

const HomePage = () => {
  return (
    <>
   
    <Home>
     
     <TitleBox>
      <Subheading1>SO, YOU WANT TO TRAVEL TO</Subheading1>
      <Heading1>SPACE</Heading1>
      <BodyText>Let’s face it; if you want to go to space, you might as well 
        genuinely go to outer space and not hover kind of on the 
        edge of it. Well sit back, and relax because we’ll give you a 
        truly out of this world experience!</BodyText>
     </TitleBox>

    <ExploreButtonDiv>
      <Button/>
    </ExploreButtonDiv>

    </Home>
    </>
  )
}

export default HomePage;