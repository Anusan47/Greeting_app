import * as service from "../services/greetingService";

export const handleGreetingClick = async (name, category, setGreeting) => {
  try {
    const data = await service.fetchGreeting(name, category);
    setGreeting(data.message);
  } catch (err) {
    setGreeting(err.message || "Failed to fetch greeting");
  }
};
