import React from 'react'
import Profileimage from './components/Profileimage'

export const App = () => {
  return (
    <Profileimage 
      image = {"/assets/me.png"}
      name = {"Maria Sparre"}
      textColor = 'textColor'
    />
    
  )
}
