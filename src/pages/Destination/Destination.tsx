import React, { useState } from 'react'
import {DestinationSection, DestinationInformation, DestinationListDiv, DestinationList, Planet, YourDestination, DestinationText, BottomInformation} from './styles';
import Europa from '../../assets/destination/image-europa.png';
import { BodyText, Heading2, NavText, Subheading1, Subheading2 } from '../../styles/Headings';
import PageTitle from '../../components/PageTitle/PageTitle';
import { DestinationData } from '../../Data/DestinationData';

const Destination = () => {
    const [Moon, SetMoon] = useState("MOON");

    const asMoon = () => SetMoon("MOON");
    const asMars = () => SetMoon("MARS");
    const asEuropa = () => SetMoon("EUROPA");
    const asTitan = () => SetMoon("TITAN");

    console.log(window.innerHeight)

  return (
        <>
        <PageTitle id={"02"} title={"PICK YOUR DESTINATION"}/>
        {DestinationData.filter(destination => destination.MoonName === Moon).map(moon => (
            <DestinationSection>
            <YourDestination>
        
            <Planet>
                <img src={moon.Picture} />
            </Planet>
            </YourDestination>
    
            <DestinationInformation>
                <DestinationListDiv>
                    
                   <DestinationList>
                        <li >
                        <BodyText onClick={asMoon}>MOON</BodyText>
                        </li>
                        <li>
                        <BodyText onClick={asMars}>MARS</BodyText>
                        </li>
                        <li>
                            <BodyText onClick={asEuropa}>EUROPA</BodyText>
                        </li>
                        <li>
                            <BodyText onClick={asTitan}>TITAN</BodyText>
                        </li>
                    </DestinationList>            
                
                </DestinationListDiv>
    
                <Heading2>{moon.MoonName}</Heading2>
    
                <DestinationText>
                    <BodyText>
                    {moon.about}
                    </BodyText>
                </DestinationText>
    
                <div className="rectangle"> </div>
    
                <BottomInformation>
                    <div>
                        <Subheading2>AVG. DISTANCE</Subheading2>
                        <Subheading1>{moon.AVGDistance}</Subheading1>
                    </div>
    
                    <div>
                        <Subheading2>EST. TRAVEL TIME</Subheading2>
                        <Subheading1>{moon.TravelTime}</Subheading1>
                    </div>
                
                </BottomInformation>
            </DestinationInformation>
            </DestinationSection>
        ))}
        </>
  )
}

export default Destination