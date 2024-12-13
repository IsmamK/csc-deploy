import React from 'react'
import Contact1 from '../components/contact_components/Contact1'
import Contact2 from '../components/contact_components/Contact2'

const Contact = () => {
  return (
    <div>
    <Contact1 bgColor = "white" textColor="black"/>
    <div id ="contact">
    <Contact2 bgColor = "white" textColor="black"/>
    </div>
    
</div>
  )
}

export default Contact
