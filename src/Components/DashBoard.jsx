import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import EndBoard from "./EndBoard";
import MidBoard from "./MidBoard";
import { Sidebar } from "./Sidebar";

const DashBoard = () => {
  return (

    <>
    
 <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "auto",
        // border:"10px solid red"
      }}
    >
    <Sidebar/>

    
      <div style={{ width: "100%", height: "auto",  background:  "#100F10"}} >
      
       
        <MidBoard />
      </div>
      <Divider width={"2px"} />
      <div
        style={{
          width: "50%",
          background: "linear-gradient(to right, #100F10 50%,#441A1C)",
          height: "auto",
          position: "relative",
        }}
      >
        <div style={{ width: "100%", height: "auto", backgroundColor: "#16171A" }}></div>
        <EndBoard />
      </div>
    </div>
    </>
   
  );
};

export default DashBoard;
