// Importing the Greeting model which interacts with the database table 'greetings'
const Greeting = require("../models/greeting"); 

// GreetingRepository class handles all CRUD operations related to greetings
class GreetingRepository {

  // Fetch all greetings from the database
  // Sorted in descending order of creation time (latest first)
  async getAllGreetings() {
    return await Greeting.findAll({ order: [["createdAt", "DESC"]] });
  }

  // Create a new greeting with the provided message
  // Returns the newly created greeting object
  async createGreeting(message) {
    return await Greeting.create({ message });
  }

  // Update an existing greeting identified by its id
  // If greeting is not found, throws an error
  // Updates the message and saves it back to the database
  async updateGreeting(id, message) {
    const greeting = await Greeting.findByPk(id); // Find greeting by primary key (id)
    if (!greeting) throw new Error("Greeting not found"); // Throw error if not found
    greeting.message = message; // Update the message
    await greeting.save(); // Save the updated greeting
    return greeting; // Return the updated greeting object
  }

  // Delete a greeting identified by its id
  // If greeting is not found, throws an error
  async deleteGreeting(id) {
    const greeting = await Greeting.findByPk(id); // Find greeting by primary key (id)
    if (!greeting) throw new Error("Greeting not found"); // Throw error if not found
    await greeting.destroy(); // Delete the greeting from the database
  }
}

// Export a singleton instance of GreetingRepository
// This allows other modules to directly use its methods
module.exports = new GreetingRepository();
