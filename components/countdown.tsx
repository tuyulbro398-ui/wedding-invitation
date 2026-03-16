"use client"

import {useEffect,useState} from "react"

export default function Countdown(){

const target = new Date("2026-04-20T08:00:00")

const [time,setTime] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setTime(target.getTime()-Date.now())
},1000)

return()=>clearInterval(interval)

},[])

const days = Math.floor(time/1000/60/60/24)
const hours = Math.floor(time/1000/60/60)%24
const minutes = Math.floor(time/1000/60)%60
const seconds = Math.floor(time/1000)%60

return(

<div className="flex gap-6 text-white text-xl">

<div>{days} Hari</div>
<div>{hours} Jam</div>
<div>{minutes} Menit</div>
<div>{seconds} Detik</div>

</div>

)

}
20 April 2026
08:00 WIB
