# Thread Display

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