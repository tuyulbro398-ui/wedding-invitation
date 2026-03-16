"use client"

import {useState} from "react"

export default function RSVP(){

const [name,setName] = useState("")
const [attendance,setAttendance] = useState("Hadir")
const [message,setMessage] = useState("")

async function submit(){

await fetch("/api/rsvp",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
name,
attendance,
message
})
})

alert("Terima kasih atas doa Anda")

}

return(

<div className="p-6 bg-white/10 backdrop-blur rounded-xl">

<input
placeholder="Nama"
className="block w-full mb-2 p-2"
onChange={e=>setName(e.target.value)}
/>

<select
className="block w-full mb-2 p-2"
onChange={e=>setAttendance(e.target.value)}
>

<option>Hadir</option>
<option>Tidak Hadir</option>

</select>

<textarea
placeholder="Doa / Pesan"
className="block w-full mb-2 p-2"
onChange={e=>setMessage(e.target.value)}
/>

<button
onClick={submit}
className="bg-[#d4af37] text-black px-4 py-2 rounded"
>

Kirim

</button>

</div>

)

}/api/rsvp
