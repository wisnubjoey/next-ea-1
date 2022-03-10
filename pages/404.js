import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
  
  const router = useRouter();

  useEffect(() => {
    console.log('You will redirecting to Home Page')
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div>
      <h1 className="custom-404-text">Halaman Ini Tidak ada</h1>
      <p className="custom-404-subtext">Kamu akan kembali ke halaman Home Dalam 5 Detik</p>
    </div>
  )
}
