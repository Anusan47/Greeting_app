const express = require("express");
const router = express.Router();
const greetingController = require("../controllers/greetingController");

router.get("/", greetingController.getGreetings);
router.post("/fastapi", greetingController.createGreetingFromFastAPI);
router.put("/:id", greetingController.updateGreeting);
router.delete("/:id", greetingController.deleteGreeting);

module.exports = router;

