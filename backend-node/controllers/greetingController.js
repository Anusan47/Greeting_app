const greetingRepository = require("../repositories/greetingRepository");
const axios = require("axios");

exports.getGreetings = async (req, res) => {
  try {
    const greetings = await greetingRepository.getAllGreetings();
    res.json(greetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createGreetingFromFastAPI = async (req, res) => {
  try {
    // Get greeting from FastAPI
    const response = await axios.get("http://127.0.0.1:8000/greeting");
    const newGreeting = response.data.message;

    // Save to DB
    const greeting = await greetingRepository.createGreeting(newGreeting);

    res.status(201).json(greeting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateGreeting = async (req, res) => {
  try {
    const id = req.params.id;
    const { message } = req.body;
    const updated = await greetingRepository.updateGreeting(id, message);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteGreeting = async (req, res) => {
  try {
    const id = req.params.id;
    await greetingRepository.deleteGreeting(id);
    res.json({ message: "Greeting deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


