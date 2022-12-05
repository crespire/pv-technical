# Thread Display Assessment

A simple thread display application.  

A live deployment of this project can be found at [https://pv-technical.vercel.app/](https://pv-technical.vercel.app/)
The repository for this application is located on Github: [https://github.com/crespire/pv-technical](https://github.com/crespire/pv-technical)

## Installation
1. Clone or download the repository and unzip to a folder if required
1. Navigate to the repository
1. Run `npm install` to install dependencies. This will install the following packages:
  * React Router, React Router DOM and the corresponding type declarations - these packages enable client side routing
  * TailwindCSS, PostCSS and Autoprefixer - these packages enable use of the TailwindCSS utility class library. This library is an abstraction for CSS which makes component based styling straightforward.
  * DOMPurify and the corresponding types to load a post's `com` property safely as HTML.
1. Run `npm start` to run the local development server.

# Assessment Instructions

1. Author all HTML5 and CSS to create a list of Threads from the sample data.
1. Consume the following service and populate the page with the products and pricing returned. https://a.4cdn.org/po/2.json  
1. Consume the response on front end.

## User Experience
Page should be responsive with at least one mobile and/or tablet experience.

## User Interactions
* When a user's mouse hovers over one of the tiles, show the number of POSTS in the thread
* Give option to switch between grid or list view
* Use “semantic_url” property on first post as the title of the Thread.
* Use “com” property on first post as the description of the Thread.

## Notes
Please complete the task using React and/or Node.js. Our evaluators will be looking for React best practices and specialized React knowledge in addition to Javascript & CSS.  
Feel free to use any library (own or otherwise) to accomplish the tasks. If possible specify why you chose something specific.  
The attached screenshot is for reference purpose only. Feel free to use your own design/aesthetics.  
Please document and send installation steps we need to take while running your application.

## MVP
* Hit server for data (json file)
* Threads have posts.
  * Each post objects has properties, some are optional.
* App styling must be mobile first.
* App display should support grid or list view
* Each thread preview should use the first post data as a preview:
  * `semantic_url` is the Title
  * `com` is the body/description
    * this property can contain HTML.

