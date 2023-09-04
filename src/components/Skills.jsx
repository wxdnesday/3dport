import React from 'react'
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion-3d";
import { skills } from '../constants';
import styled from "styled-components";

// const ServiceCard = ({index, title, icon}) => {
//   return(
//     <p>{title}</p>
//   )
// }

// export const projects = [
//   {
//     title: "Jump Labs",
//     url: "https://will-dev.itch.io/jump-labs",
//     image: "projects/jumplabs.jpg",
//     description: "GameJam 3D Model Designer",
//   },
//   {
//     title: "ParkingWatch",
//     url: "https://www.notion.so/cogs123/ParkingWatch-21c609fc9c3242eea81766d0ff1fbaea?pvs=4",
//     image: "projects/baking.jpg",
//     description: "Prototyping Crowdsourcing Parking App at UCSD",
//   },
//   {
//     title: "Elysium Everlasting ",
//     url: "https://drive.google.com/file/d/1UUIlUtn6H-MxQMUtOs638KmYdLt65fz6/view?usp=sharing",
//     image: "projects/elyever.jpg",
//     description: "Creating Lasercut 3D Model with Inkscape and Graphic Poster",
//   },
//   {
//     title: "S Spot Scavenging",
//     url: "https://github.com/drsimpkins-teaching/cogs108_ss1_23_group_24",
//     image: "projects/kanagame.jpg",
//     description: "Data Analysis on Parking Availability at UCSD",
//   },
//   {
//     title: "Menopositive",
//     url: "https://youtu.be/dQw4w9WgXcQ?si=M1v8rzrXoh-stQJY",
//     image: "projects/loader.jpg",
//     description: "Designer of a Menopause Health Dashboard",
//   },
// ];



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;


const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;

`

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  border: 0.1px solid #854CE6;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <>
      <Container id="skills">
        <Wrapper>
            <Title>Skills</Title>
            <SkillsContainer>
              {skills.map((skill) => (
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item) => (
                        <SkillItem whileHover={{scale: 1.2}}>
                          <SkillImage src={item.image}/>
                            {item.name}
                        </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              ))}

            </SkillsContainer>
        </Wrapper>
      </Container>
    </>

  )
}

export default Skills