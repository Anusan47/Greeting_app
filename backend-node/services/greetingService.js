const greetingRepository = require("../repositories/greetingRepository");
const axios = require("axios");

class GreetingService {
  async getAndSaveGreeting() {
    // Call FastAPI for a new greeting
    const response = await axios.get("http://localhost:8000/greeting");
    const newGreeting = response.data.message;

    // Save to MySQL
    await greetingRepository.createGreeting(newGreeting);

    // Fetch all greetings from DB
    const allGreetings = await greetingRepository.getAllGreetings();

    return allGreetings;
  }
}

module.exports = new GreetingService();

