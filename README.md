# Innovation.NJ.gov

Team website built using [NJWDS](https://github.com/newjersey/njwds) and [Jekyll](https://jekyllrb.com/), hosted in [Github Pages](https://pages.github.com/).


## Editing content

Content is stored in the [`/content/`](https://github.com/newjersey/innovation.nj.gov/tree/main/content) directory. Files are written in [Markdown](https://www.markdownguide.org/basic-syntax/) format. Files in directories beginning with a `_` are collections, which generate pages or items in list depending on the collection's configuration.

Changes saved to these files in the `main` branch will be published automatically by a [Github Action](https://github.com/newjersey/innovation.nj.gov/actions).


## Previewing changes

Make changes in a branch and submit the branch as a pull request. Doing so will generate a preview link to your changes that you can review or share while working on updates. To find the preview link on a pull request, open the pull request, click “show all checks” > “details” > “View more details on AWS Amplify (us-east-1)”. It make take ~2 minutes for the preview to build after you make changes to your branch.


## Hosting branch

The site is hosted on Github pages on the [`gh-pages`](https://github.com/newjersey/innovation.nj.gov/tree/gh-pages) branch. Do not make changes directly to this branch. It is automatically generated when you make changes to the `main` branch. 

## Archived site

The code for the previous version of the website is in the [`archived-site`](https://github.com/newjersey/innovation.nj.gov/tree/archived-site) branch and available to [preview here](https://archived-site.d2a0uvcw9o4991.amplifyapp.com/).
