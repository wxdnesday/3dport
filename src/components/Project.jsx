import React from 'react'
import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Jump Labs",
    url: "https://will-dev.itch.io/jump-labs",
    image: "projects/jumplabs.jpg",
    description: "GameJam 3D Model Designer",
  },
  {
    title: "ParkingWatch",
    url: "https://www.notion.so/cogs123/ParkingWatch-21c609fc9c3242eea81766d0ff1fbaea?pvs=4",
    image: "projects/baking.jpg",
    description: "Prototyping Crowdsourcing Parking App at UCSD",
  },
  {
    title: "Elysium Everlasting ",
    url: "https://drive.google.com/file/d/1UUIlUtn6H-MxQMUtOs638KmYdLt65fz6/view?usp=sharing",
    image: "projects/elyever.jpg",
    description: "Creating Lasercut 3D Model with Inkscape and Graphic Poster",
  },
  {
    title: "S Spot Scavenging",
    url: "https://github.com/drsimpkins-teaching/cogs108_ss1_23_group_24",
    image: "projects/kanagame.jpg",
    description: "Data Analysis on Parking Availability at UCSD",
  },
  {
    title: "Menopositive",
    url: "https://youtu.be/dQw4w9WgXcQ?si=M1v8rzrXoh-stQJY",
    image: "projects/loader.jpg",
    description: "Designer of a Menopause Health Dashboard",
  },
];

const Project = (props) => { <div>Project</div>
//   const { project, highlighted } = props;

//   const background = useRef();
//   const bgOpacity = useMotionValue(0.4);

//   useEffect(() => {
//     animate(bgOpacity, highlighted ? 0.7 : 0.4);
//   }, [highlighted]);

//   useFrame(() => {
//     background.current.material.opacity = bgOpacity.get();
//   });

//   return (
//     <group {...props}>
//       <mesh
//         position-z={-0.001}
//         onClick={() => window.open(project.url, "_blank")}
//         ref={background}
//       >
//         <planeGeometry args={[2.2, 2]} />
//         <meshBasicMaterial color="black" transparent opacity={0.4} />
//       </mesh>
//       <Image
//         scale={[2, 1.2, 1]}
//         url={project.image}
//         toneMapped={false}
//         position-y={0.3}
//       />
//       <Text
//         maxWidth={2}
//         anchorX={"left"}
//         anchorY={"top"}
//         fontSize={0.2}
//         position={[-1, -0.4, 0]}
//       >
//         {project.title.toUpperCase()}
//       </Text>
//       <Text
//         maxWidth={2}
//         anchorX="left"
//         anchorY="top"
//         fontSize={0.1}
//         position={[-1, -0.6, 0]}
//       >
//         {project.description}
//       </Text>
//     </group>
//   );
// };

// export const currentProjectAtom = atom(Math.floor(projects.length / 2));

// export const Projects = () => {
//   const { viewport } = useThree();
//   const [currentProject] = useAtom(currentProjectAtom);

//   return (
//     <group position-y={-viewport.height * 2 + 1}>
//       {projects.map((project, index) => (
//         <motion.group
//           key={"project_" + index}
//           position={[index * 2.5, 0, -3]}
//           animate={{
//             x: 0 + (index - currentProject) * 2.5,
//             y: currentProject === index ? 0 : -0.1,
//             z: currentProject === index ? -2 : -3,
//             rotateX: currentProject === index ? 0 : -Math.PI / 3,
//             rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
//           }}
//         >
//           <Project project={project} highlighted={index === currentProject} />
//         </motion.group>
//       ))}
//     </group>
//   );
};

export default Project;