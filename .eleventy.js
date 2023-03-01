"use strict"; // Enable strict mode

const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
  // Copy static assets to output directory
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Format post date for display
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  
  // Specify input and output directories
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

