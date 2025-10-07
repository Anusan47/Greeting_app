import React from "react";

const buttons = [
  { label: "🎂 Birthday", category: "birthday", color: "#90A4AE" },      // soft grey-blue
  { label: "💖 Anniversary", category: "anniversary", color: "#B39DDB" }, // muted purple
  { label: "🎉 Festival", category: "festival", color: "#FFCC80" },      // soft orange
  { label: "🛣 Journey", category: "journey", color: "#80CBC4" },        // soft teal
  { label: "🌞 Nice Day", category: "nice_day", color: "#FFF59D" },      // light yellow
  { label: "🤝 Nice to Meet", category: "nice_to_meet", color: "#A5D6A7" }, // soft green
  { label: "👋 Welcome", category: "welcome", color: "#FFAB91" },        // soft coral
  { label: "🎲 Random", category: "random", color: "#CE93D8" },          // soft lavender
];

export default function GreetingButtons({ onClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => onClick(btn.category)}
          style={{
            padding: "10px 16px",
            fontSize: "16px",
            backgroundColor: btn.color,
            color: "#333",       // dark text for minimal look
            border: "1px solid #ccc",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
