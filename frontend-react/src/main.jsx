import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css"; 

export const ThemeContext = createContext();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <App />
      </ThemeContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
