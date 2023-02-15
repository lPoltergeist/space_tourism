import React from 'react'
import { BodyText, Heading1, Heading3, Heading4, NavText, Subheading1 } from '../../styles/Headings';
import { Home, TitleBox, ExploreButtonDiv } from './style'
import Ansari from '../../assets/crew/image-anousheh-ansari.png'

const Crew = () => {
  return (
    <Home>

     <TitleBox>
     <div className="batata">
        <Subheading1><p>02</p> MEET YOUR CREW</Subheading1>
        </div>

      <Heading4>Flight Engineer</Heading4>
      <Heading3>Anousheh Ansari</Heading3>
      <BodyText>Let’s face it; if you want to go to space, you might as well 
        genuinely go to outer space and not hover kind of on the 
        edge of it. Well sit back, and relax because we’ll give you a 
        truly out of this world experience!</BodyText>
     </TitleBox>

    <ExploreButtonDiv>
      <img src={Ansari} />
    </ExploreButtonDiv>

    </Home>
  )
}

export default Crew;