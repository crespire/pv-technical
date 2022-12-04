# Thread Display

A simple thread display application.  

A live deployment of this project can be found at [https://pv-technical.vercel.app/](https://pv-technical.vercel.app/)

## Installation
1. Clone or download the repository
1. run `npm install` to install dependencies. This will install the following dependencies:
  * React Router and React Router DOM and their corresponding types - these packages enable client side routing
  * TailwindCSS, PostCSS and Autoprefixer - these packages enable use of the TailwindCSS utility class library parsing and compiling.
  * DOMPurify and its types allows us to load a post's `com` property without worrying about XSS attacks.
1. run `npm start` to run the local development server.

MVP:
* Hit server for data (json file)
* Threads have posts.
  * Threads is an array of objects.
    * Each object has an object with property `posts` which contains an array of post objects

User interactions:
* App threads display must be mobile first.
* App threads display should support grid or list view
* Each thread preview should use the first post data as a preview:
  * `semantic_url` is the Title
  * `com` is the body/description
    * this property can contain HTML.

