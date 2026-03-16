"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"

export default function Home() {

  const weddingDate = new Date("2026-04-20T08:00:00")

  const [time, setTime] = useState("")

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()

      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)

      setTime(`${d} Hari ${h} Jam ${m} Menit ${s} Detik`)

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  function openInvite(){
    alert("Undangan Dibuka")
  }

  return (

    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center gap-10">

      <Hero open={openInvite} />

      <div className="text-2xl text-[#d4af37]">
        {time}
      </div>

    </main>

  )
}










