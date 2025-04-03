import React from 'react'
import CommonPage from '../common'
import { motion } from 'framer-motion'
import ContactSection from './ContactSection'
function Contact() {
  return (
    <CommonPage  Heading={"Get In Touch"} SubHeading={"Contact Me"}>
      <ContactSection/>
    </CommonPage>
  )
}

export default Contact
