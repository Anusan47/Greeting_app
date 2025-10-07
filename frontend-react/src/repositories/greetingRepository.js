import * as api from "../api/greetingApi";

export const getGreeting = (name, category) => api.fetchGreetingByCategory(name, category);
export const getRandomGreeting = (name) => api.fetchRandomGreeting(name);
