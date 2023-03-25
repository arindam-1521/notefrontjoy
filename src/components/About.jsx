// import  from 'react'
import { React, useContext, useEffect } from 'react'
import NoteContext from '../context/Notes/NoteContext'

export const About = () => {
  const a = useContext(NoteContext)
  return (
    <div>This is About Page Bro.  and he is in class </div>
  )
}
