const Service = require("../models/serviceModel");

// Fetch all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new service
const createService = async (req, res) => {
  const { title, image, alt, description } = req.body;

  const newService = new Service({
    title,
    image,
    alt,
    description,
  });

  try {
    const createdService = await newService.save();
    res.status(201).json(createdService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getServices, createService };
