# Development Notes

## Featured Section:

The hero is the main article on the left side and is updated via the index.njk file. Add the "featured" tag to the project front matter to get it to show up in the list on the right.

## Projects/Experiments/Portfolios/Videos Sections:

Each entry has its own markdown file within its respective folder (project, experiment, or portfolio).

Markdown files contain front matter (between the two ---) that gets added to the article.njk include file. The article file is the template for each project, experiment, and portfolio breakout page and uses the base.njk file. The article is injected into the base file where it says 'content'. Every page uses the base.njk include, which contains the HTML boilerplate, header and footer.  

Each item will show up according to the 'date' specified in the front matter. The lastest date will be shown first. 

The videos do not have their own breakout pages or an 'all-videos' page.

## Design Section:

Design section is not currently being used.

## Images:

    - breakout page images are 640:427 ratio (1280x854)
    - thumbnail images are 131:108 ratio (750x618) - labeled as "-tablet"
    - hero images are 3:4 ratio (900x1200)
    - video images are 300:169 ratio (600x338)
