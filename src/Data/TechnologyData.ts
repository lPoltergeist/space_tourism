import {v4 as uuidv4} from 'uuid'
import VehiclePortrait from '../assets/technology/vehicle-portrait.jpg'
import VehicleLandscape from '../assets/technology/vehicle-landscape.jpg'

import SpaceportPortrait from '../assets/technology/spaceport-portrait.jpg'
import SpaceportLandscape from '../assets/technology/spaceport-landscape.jpg'

import CapsulePortrait from '../assets/technology/capsule-portrait.jpg'
import CapsuleLandscape from '../assets/technology/capsule-landscape.jpg'

export const TechnologyData = [
    {
        id: 1,
        Title: "Launch Vehicle",
        about: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        Portrait: VehiclePortrait,
        Landscape: VehicleLandscape,
    },
    {
        id: 2,
        Title: "Spaceport",
        about: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        Portrait: SpaceportPortrait,
        Landscape: SpaceportLandscape,
    },
    {
        id: 3,
        Title: "Space Capsule",
        about: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        Portrait: CapsulePortrait,
        Landscape: CapsuleLandscape,
    }
]