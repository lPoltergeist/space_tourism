import React, { useState } from 'react'
import { BodyText, Heading1, Heading3, Heading4, Heading5, NavText, Subheading1 } from '../../styles/Headings';
import { Home, TitleBox, SliderButton, Textinfo, CrewPicture } from './style'
import { CrewData } from '../../Data/CrewDataData';
import PageTitle from '../../components/PageTitle/PageTitle';

import Pic from '../../assets/crew/image-douglas-hurley.png';

const Crew = () => {
  const [role, setRole] = useState("COMMANDER");

  const Commander = () => setRole("COMMANDER");
  const Specialist = () => setRole("MISSION SPECIALIST");
  const Pilot = () => setRole("PILOT");
  const Flight = () => setRole("FLIGHT ENGINEER");

  return (
    <>
    <PageTitle id={"02"} title={"MEET YOUR CREW"}/>
   
      
    {CrewData.filter(crew => crew.role === role).map(Crew => (
      <>
       <Home>
      <TitleBox>
      <Textinfo>
      <div>
      <Subheading1>{Crew.role}</Subheading1>
      </div>
      <Heading3>{Crew.name}</Heading3>
      <BodyText>{Crew.about}</BodyText>
      </Textinfo>

      <SliderButton>
        <button className={role === "COMMANDER" ? '' : 'deactive'}onClick={Commander}></button>
        <button className={role === "MISSION SPECIALIST" ? '' : 'deactive'} onClick={Specialist}></button>
        <button className={role === "PILOT" ? '' : 'deactive'} onClick={Pilot}></button>
        <button className={role === "FLIGHT ENGINEER" ? '' : 'deactive'} onClick={Flight}></button>
      </SliderButton>
    </TitleBox>

    <CrewPicture>
      <img src={Crew.picture} />
    </CrewPicture>
    </Home>
    </>
   
     ))}
      

    
    </>
  )
}

export default Crew;