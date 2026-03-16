"use client"

import {Canvas} from "@react-three/fiber"
import {Points,PointMaterial} from "@react-three/drei"

export default function Particles(){

return(

<Canvas>

<Points>

<PointMaterial
color="#d4af37"
size={0.02}
/>

</Points>

</Canvas>

)

}floating gold particles
