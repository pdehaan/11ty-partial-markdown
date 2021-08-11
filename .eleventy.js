module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "www",
    },
    markdownTemplateEngine: "njk",
  };
};
