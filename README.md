# (project title)

Tutorial URL: https://www.youtube.com/watch?v=_DACuv_xYCs&t=3177s
Tutorial description: Learn how to create comments in Angular. Comments system is a popular feature for any Angular project but it's not easy. In this video we will build comments section from scratch with replying, editing and removing comments functionality. We will use plain Angular and build comments list, single comments and comment form components to implement it correctly.

___________

### Software versions
	NPM version: 8.19.2
	Node version: 16.17.0 

## How to run 
1. clone / download
2. run npm install 
3. run ng serve


## Problems in the project:
1. Hovering over reply. Does AngularJS style this by itself because It wouldn't work on my side but I added a similar style and I could change the cursor on hover too. Found it!, it was a style.css file that is already integrated and doesn't require a link and & href.
2.

## How to use
- Write some text into the input box.
- Click the "write" button.
- Create comments and create replies to comments.
- Delete comments and delete replies to comments.


# Features to add
- If a user clicks on the "Edit button" of a comment or reply that has
	the exact same text it opens up for the one you clicked on and the one with same exact text.
- Make the design more nicer.

### Photos of project:
![](/images/angular_comments.gif)
![](/images/comment_angular_image.png)
![](/images/comments_angulargif_.gif)
![](/images/render_comments_photo.png)

## Apps used:
	- Sublime Text Build 4126
    - Google Chrome & Google Chrome Developer Tools
    - Terminal
## Coding styles I used:

## What I learned
- How to separate the functions & calculations from the views of the app.
- Create a component (.html) and another file for controlling the views which is a typescript (.ts) file.
- How to create a service part of the app which holds the URL to the API in one central location while you can simply recall that service in any component you want and manipulate the data from the service and then show that data in a view however you want it.
- Practically how to standardize things and customize the standardized things. One can use the standardized thing over again like in AngularJS you can create your own html element and create specific parameters so using the component over and over again with different parameters every time.