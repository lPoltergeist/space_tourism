import {v4 as uuidv4} from 'uuid'
import Hurley from '../assets/crew/image-douglas-hurley.png'
import Mark from '../assets/crew/image-mark-shuttleworth.png'
import Victor from '../assets/crew/image-victor-glover.png'
import Ansari from '../assets/crew/image-anousheh-ansari.png'

export const CrewData = [
    {
        id: uuidv4(),
        role: "COMMANDER",
        name: "DOUGLAS HURLEY",
        about: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        picture: Hurley
    },
    {
        id: uuidv4(),
        role: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        about: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        picture: Mark
    },
    {
        id: uuidv4(),
        role: "PILOT",
        name: "VICTOR GLOVER",
        about: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        picture: Victor
    },
    {
        id: uuidv4(),
        role: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        about: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        picture: Ansari
    },
]