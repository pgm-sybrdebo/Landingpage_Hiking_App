const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy({
    'src/main.css': 'assets/main.css',
    'src/images': 'assets/img',
    'src/js/animations.js': 'assets/animations.js',
    'src/js/horizontalScrollWatcher.js': 'assets/horizontalScrollWatcher.js',
    'src/js/footerNavigation.js': 'assets/footerNavigation.js'
  });

  eleventyConfig.addFilter('highlighted', function(blogs) {
    return blogs.filter(blog => blog.data.highlighted === true);
  });

  eleventyConfig.addFilter('others', function(blogs) {
    return blogs.filter(blog => blog.data.highlighted !== true);
  });
  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  };
}
