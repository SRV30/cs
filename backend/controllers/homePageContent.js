const HomePageContent = require("../models/HomePageContent");

// GET - Fetch homepage content
exports.getHomePageContent = async (req, res) => {
  try {
    const content = await HomePageContent.findOne();
    if (!content) {
      return res.status(404).json({ message: "Homepage content not found" });
    }
    res.json(content);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// POST - Update homepage content
exports.updateHomePageContent = async (req, res) => {
  const { logoUrl, heading, subheading } = req.body;
  try {
    let content = await HomePageContent.findOne();
    if (!content) {
      content = new HomePageContent({ logoUrl, heading, subheading });
    } else {
      content.logoUrl = logoUrl;
      content.heading = heading;
      content.subheading = subheading;
    }
    await content.save();
    res.json({ message: "Homepage content updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
