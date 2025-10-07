import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate(); 
  const greeting = "Welcome to Greetings !";
  const subGreeting = "We are glad to have you here. Have a great day!";

  const handleGetStarted = () => {
    navigate("/greeting"); // redirect to Greeting page
  };

  return (
    <div className="home-container">
      <div className="greeting-card">
        <h1 className="greeting-title">🌟 {greeting}</h1>
        <p className="greeting-subtitle">{subGreeting}</p>
        <button 
          className="greeting-button"
          onClick={handleGetStarted}
        >
          Get Started 
        </button>
      </div>
    </div>
  );
}

export default Home;
