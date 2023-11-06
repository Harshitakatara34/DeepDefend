import React from 'react'
import capture from "../Image/Capture.PNG"
import { Heading } from '@chakra-ui/react'
const MidBoard = () => {
  return (
    <div >
    <div style={{width:"70%",height:"10%",color:"white",display:"flex",justifyContent:"space-around"}}> <h1 style={{wordSpacing: "5px",paddingLeft:"0px",fontSize:"15px"}} color={"white"}>View Company Observer Security</h1>
    <h1 style={{paddingLeft:"0px",fontSize:"15px",wordSpacing: "10px"}} color={"white"}>Severity All</h1>
   </div>
    <img style={{marginTop:"160px",}} src={capture}/>
<img style={{marginTop:"80px",width:"100%",height:"250px"}} src="https://cdn.dribbble.com/users/7162/screenshots/1888419/open-uri20150119-12-2b4861"/>

    </div>
  )
}

export default MidBoard