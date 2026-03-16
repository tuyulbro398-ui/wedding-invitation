"use client";

import { useState, useEffect } from "react";

export default function Home() {

  const [open,setOpen] = useState(false)
  const [time,setTime] = useState("")

  useEffect(()=>{
    const weddingDate = new Date("2026-08-10T09:00:00")
    const interval = setInterval(()=>{
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()

      const d = Math.floor(diff/(1000*60*60*24))
      const h = Math.floor((diff/(1000*60*60))%24)
      const m = Math.floor((diff/(1000*60))%60)
      const s = Math.floor((diff/1000)%60)

      setTime(`${d} Hari ${h} Jam ${m} Menit ${s} Detik`)
    },1000)

    return ()=>clearInterval(interval)
  },[])

  if(!open){
    return(
      <main style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"linear-gradient(180deg,#020617,#0f172a)",
        color:"white",
        textAlign:"center"
      }}>

      <h1 style={{fontSize:"42px",letterSpacing:"2px"}}>
        Undangan Pernikahan
      </h1>

      <h2 style={{marginTop:"10px",fontSize:"26px"}}>
        Ahmad & Siti
      </h2>

      <button
      onClick={()=>setOpen(true)}
      style={{
        marginTop:"30px",
        padding:"14px 40px",
        borderRadius:"30px",
        border:"none",
        fontSize:"18px",
        background:"#c6a45c",
        color:"black",
        cursor:"pointer"
      }}
      >
      Buka Undangan
      </button>

      </main>
    )
  }

  return (

  <main style={{
    background:"#020617",
    color:"white",
    fontFamily:"sans-serif",
    textAlign:"center"
  }}>

  <audio autoPlay loop>
  <source src="/music.mp3" type="audio/mpeg"/>
  </audio>

  <section style={{
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"40px"
  }}>

  <h1 style={{fontSize:"50px"}}>
  Ahmad & Siti
  </h1>

  <p style={{marginTop:"20px",maxWidth:"600px"}}>
  Dengan memohon rahmat dan ridho Allah SWT kami bermaksud menyelenggarakan pernikahan kami
  </p>

  <h2 style={{marginTop:"30px"}}>
  10 Agustus 2026
  </h2>

  <p>{time}</p>

  </section>

  <section style={{padding:"60px"}}>

  <h2>Galeri</h2>

  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
    gap:"20px",
    marginTop:"30px"
  }}>

  <img src="/foto1.jpg" style={{width:"100%",borderRadius:"10px"}}/>
  <img src="/foto2.jpg" style={{width:"100%",borderRadius:"10px"}}/>
  <img src="/foto3.jpg" style={{width:"100%",borderRadius:"10px"}}/>

  </div>

  </section>

  <section style={{padding:"60px"}}>

  <h2>Lokasi Acara</h2>

  <iframe
  src="https://maps.google.com/maps?q=bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="300"
  style={{border:"0",marginTop:"20px"}}
  />

  </section>

  <section style={{padding:"60px"}}>

  <h2>RSVP</h2>

  <form style={{
    maxWidth:"400px",
    margin:"auto",
    display:"flex",
    flexDirection:"column",
    gap:"10px"
  }}>

  <input placeholder="Nama" style={{padding:"12px"}}/>
  <input placeholder="Jumlah Tamu" style={{padding:"12px"}}/>
  <textarea placeholder="Ucapan" style={{padding:"12px"}}/>

  <button style={{
    padding:"14px",
    background:"#c6a45c",
    border:"none"
  }}>
  Kirim
  </button>

  </form>

  </section>

  </main>

  )
}
export default function Page({searchParams}:{searchParams:{to?:string}}){

const name = searchParams.to

return(

<div>

{ name && (

<p>
Kepada Yth.<br/>
Bapak/Ibu/Saudara/i {semuanya}
</p>

)}

</div>

)

}
















