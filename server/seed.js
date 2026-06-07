const mongoose = require("mongoose");
require("dotenv").config();

const Project = require("./models/Project");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {

    await Project.deleteMany({});

    await Project.insertMany([
      {
        title: "Portfolio Website",
        description: "Personal portfolio built using React and Node.js",
        technologies: ["React", "Express"],
        github: "https://github.com/yourusername/portfolio"
      },
      {
        title: "AI Polite Rewriter",
        description: "AI application that rewrites messages politely",
        technologies: ["Python", "Transformers"],
        github: "https://github.com/yourusername/polite-rewriter"
      },
      {
        title: "Inverted Index Search Engine",
        description: "Fast document search engine using inverted indexing",
        technologies: ["Python", "Streamlit"],
        github: "https://github.com/yourusername/search-engine"
      }
    ]);

    console.log("Projects Added Successfully");
    process.exit();

  })
  .catch(err => console.log(err));