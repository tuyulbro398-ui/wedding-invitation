"use client"

import {useState} from "react"

export default function Admin(){

const [url,setUrl] = useState("")

async function upload(){

await fetch("/api/gallery",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({image:url})
})

alert("Image uploaded")

}

return(

<div className="p-10">

<h1>Admin Gallery</h1>

<input
placeholder="Image URL"
onChange={e=>setUrl(e.target.value)}
/>

<button
onClick={upload}
className="bg-black text-white p-2"
>

Upload

</button>

</div>

)

}
