module.exports = function(eleventyConfig) {

    //any changes happen to /scss, eleventy trigger a compile
    eleventyConfig.addWatchTarget('./src/scss/');

    //once css compiles, take contents of /css and pass through to /public
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js');


    return {
        dir: {
            input: "src", 
            output: "public"
        }
    }
}