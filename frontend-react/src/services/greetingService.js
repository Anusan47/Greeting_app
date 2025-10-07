import * as repository from "../repositories/greetingRepository";

export const fetchGreeting = async (name, category) => {
  if (!name) throw new Error("Please enter your name!");
  return category === "random" 
    ? repository.getRandomGreeting(name) 
    : repository.getGreeting(name, category);
};
