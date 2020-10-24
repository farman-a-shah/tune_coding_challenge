
# Solution - TUNE Coding Challenge

## Farman Shah

demo.PNG provides a glimplse of how the app looks.

Here's what I have done.


## Frontend
I have used ReactJs for the frontend. Which runs on port 3000 of my local machine.

React Packages Used:
* axios - for over the network calls
* semantic-ui-react - for beautiful UI
* Avatar - for avatars with name initials
* react-chartjs-2 - for charts

The main entry point is App.js.
This module is UserDashboard module. Which is used in App.js. 
UserDashboard fetches data and calls CardComponent to build cards. Which in turn uses Charts component and the 3rd party Avatar package.
Semantic UI package is used for rendering Cards inside CardComponent.

To get this running on your machine, node_modules would be needed. Please run npm install inside solution-farman/app/ directory.


## Backend:
I created a custom Model-Controller framework for this. Runs on port 80 of my local machine.

index.php is the entry point. Which:
* Grabs the request
* Sorts out the requested route
* Invokes the relevant Controller->Action
* Responds to the request

Router.php helps with finding out the route. It plays on a pre-specified url structure. Returns the names of respective Controller and Action to be called upon.

UserController.php is the specific controller to handle user dashboard related requests. Gets the models, gets the data and returns.

Config.php is for app configuration. Can be moved to db later. Right now it just helps switch between models.

Model Design:
* base - ModelAbstract.php
* document - DocumentModel.php extends ModelAbstract.php
* rdbms - RDBMSModel.php extends ModelAbstract.php
* Model.php - Provides the model to be used according to current app configuration

The base functionality goes into ModelAbstract.php. As of now it just provides a prototype.
Document DB related functionality, which is our current case, is provided by DocumentModel.php
Relational DB related functionality, to be provided by RDBMSModel.php

## Next Steps
If I were to spend more time on this I would do the following as the next steps:

* Search Functionality
* Sorting and Filters
* Further optimize data retrieval part of the code
* Pagination
* Workable Menu
* Further improve the UI


## Remarks
It was an interesting exercise. I enjoyed it.

Thanks!




