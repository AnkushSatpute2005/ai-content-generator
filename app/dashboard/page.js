"use client"
import React from 'react'
import { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {

  const [userSearchInput, setUserSearchInput] = useState()
   
  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value)=>{setUserSearchInput(value)}}/>
      {/* Template list ssection */}
      <TemplateSection userSearchInput ={userSearchInput}/>

    </div>
  )
}

export default Dashboard