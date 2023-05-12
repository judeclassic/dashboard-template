import React ,{useState,useEffect}from 'react'
import { Hero } from '@/components/UI/Hero'
import { Service } from '@/components/UI/Service'
import { About } from '@/components/UI/About'
import { Misson } from '@/components/UI/Misson'
import { RoadMap } from '@/components/UI/RoadMap'
import { Social } from '@/components/UI/Social'

const  index = () => {
  return (
    <>
    <Hero/>
    <Service/>
    <About/>
    <Misson/>
    <RoadMap/>
    <Social/>
  </>
   )
 }
 
 export default index