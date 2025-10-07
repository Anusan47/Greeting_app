import React, { useState } from "react";
import GreetingButtons from "../components/GreetingButtons";
import { handleGreetingClick } from "../controllers/greetingController";

export default function GreetingPage() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleClick = (category) => handleGreetingClick(name, category, setGreeting);

  return ( 
    <div style={{
        // height: "100vh",
        paddingLeft: "70px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",   
        justifyContent: "center", 
        alignItems: "center",     
      }}>
    <div
      style={{
        height: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",   
        justifyContent: "center", 
        alignItems: "center",     
      }}
    >
      <h1>Get Your Greeting!</h1>

      <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              margin: "20px 0",
              borderRadius: "10px",
              border: "2px solid #4CAF50", // green border
              outline: "none",
              transition: "0.3s",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            onFocus={(e) => (e.target.style.border = "2px solid #2196F3")} // blue on focus
            onBlur={(e) => (e.target.style.border = "2px solid #4CAF50")}
      />


      <GreetingButtons onClick={handleClick} />

      <h2>{greeting}</h2>
    </div>
    </div>
  );
}
