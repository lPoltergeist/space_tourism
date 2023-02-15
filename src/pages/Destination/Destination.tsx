import React from 'react'
import {DestinationSection, DestinationInformation, DestinationListDiv, DestinationList, Planet, YourDestination, DestinationText, BottomInformation} from './styles';
import Europa from '../../assets/destination/image-europa.png';
import { BodyText, Heading2, NavText, Subheading1, Subheading2 } from '../../styles/Headings';

const Destination = () => {
  return (
        <DestinationSection>
        <YourDestination>
        <Subheading1><p>01</p>PICK YOUR DESTINATION</Subheading1>

        <Planet>
            <img src={Europa} />
        </Planet>
        </YourDestination>

        <DestinationInformation>
            <DestinationListDiv>
                
               <DestinationList>
                    <li>
                        <NavText>MOON</NavText>
                    </li>
                    <li>
                        <NavText>MARS</NavText>
                    </li>
                    <li>
                        <NavText>EUROPA</NavText>
                    </li>
                    <li>
                        <NavText>TITAN</NavText>
                    </li>
                </DestinationList>            
            
            </DestinationListDiv>

            <Heading2>EUROPA</Heading2>

            <DestinationText>
                <BodyText>
                See our planet as you’ve never seen it before. A perfect
                 relaxing trip away to help regain perspective and come
                back refreshed. While you’re there, take in some history
                 by visiting the Luna 2 and Apollo 11 landing sites.
                </BodyText>
            </DestinationText>

            <div className="rectangle"> </div>

            <BottomInformation>
                <div>
                    <Subheading2>AVG. DISTANCE</Subheading2>
                    <Subheading1>628 MIL. KM</Subheading1>
                </div>

                <div>
                    <Subheading2>EST. TRAVEL TIME</Subheading2>
                    <Subheading1>3 YEARS</Subheading1>
                </div>
            
            </BottomInformation>
        </DestinationInformation>
        </DestinationSection>
  )
}

export default Destination