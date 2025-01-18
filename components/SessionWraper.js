"use client"
import { SessionProvider } from "next-auth/react"
// import { Children } from "react"

export default function SessionWraper({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}