"use client"

import { motion } from "framer-motion"

export default function Hero({open}:{open:()=>void}){

return(

<section className="h-screen flex items-center justify-center text-center bg-[#0f0f0f] text-white">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<p className="text-[#d4af37] text-lg">
Bismillahirrahmanirrahim
</p>

<h1 className="text-5xl font-serif mt-4">
THE WEDDING OF
</h1>

<h2 className="text-3xl text-[#d4af37] mt-2">
Salman Faris & Resti Yulianti
</h2>

<button
onClick={open}
className="mt-8 px-6 py-3 bg-[#d4af37] text-black rounded-full"
>
Buka Undangan
</button>

</motion.div>

</section>

)

}
