import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import { TechnologyData } from '../../Data/TechnologyData'
import { BodyText, Heading3, Heading4, NavText } from '../../styles/Headings'
import { ImageDiv, SliderDiv, TechnologySection, TextSection } from './styles'

const Technology = () => {
  const [techNum, setTechNum] = useState(1);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
      window.removeEventListener('resize', setDimension);
     
  })
  }, [screenSize])

const SetTech1 = () => setTechNum(1);
const SetTech2 = () => setTechNum(2);
const SetTech3 = () => setTechNum(3);


  return (
    <>
    <PageTitle id={"03"} title={"SPACE LAUNCH 101"}/>
    {TechnologyData.filter(tech => tech.id === techNum ).map(tech => (
      <TechnologySection key={tech.id}>
      <div className="batata">
      <SliderDiv>
          <button onClick={SetTech1} className={techNum === 1 ? 'active' : 'deactive'}>1</button>
          <button onClick={SetTech2} className={techNum === 2 ? 'active' : 'deactive'}>2</button>
          <button onClick={SetTech3} className={techNum === 3 ? 'active' : 'deactive'}>3</button>
        </SliderDiv>
      <TextSection>
        <Heading4>THE TERMINOLOGY</Heading4>
        <Heading3>{tech.Title}</Heading3>
        <BodyText>{tech.about}</BodyText>
      </TextSection>
      </div>

      <ImageDiv>
<img src={screenSize.dynamicWidth <= 768 ? tech.Landscape : tech.Portrait} />
</ImageDiv>

    </TechnologySection>
    ))}


</>
  )
}

export default Technology