# Movie Tracker

  This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api - note you'll need to go create an account to get an API key). The idea of the project is to be able to sign in as a user and save favorite movies. Pretty simple right? HA HA not!

  Bc this is still in beta here is what you'll need to know.
  * Using PostgreSQL
  * Setting up steps:
    * `npm install`
    * If you don't have postgresSQl, scroll down to `Setup Postgresql` and follow those steps.
    * Then run `npm run build`
    * Lastly run `npm start` - visit `/api/users` - should see a json response.
  * 2 APIs - MovieDB and your very own api
  * Fetch upcoming movies from MovieDB

## Setup Postgresql

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Install Homebrew. Homebrew is a package manager for MacOS.
	*  */usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)*
	
* Install Postgresql  
	*  *brew install postgresql*	
	
#### Running Postgres
* Start Postgres  
  * `psql -f ./database/users.sql` will drop and recreate your database. 
	* *postgres -D /usr/local/var/postgres* (You could create an alias for this)
	
#### Press CMD-T to create a new tab in your terminal
* Type *psql*. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)

## API
  Hopefully you will be using fetch to make all your api calls. If you are making a post request note that you will need to pass in headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any any required fields into the body.

###### Users

 * ##### Sign In `/api/users`

  To sign in you will need to pass in *email* and *password* to the *body*.
  Emails should be sent in all lowercase. - ex: `{..., body: {email: 'tim@aol.com', password: 'password'} }`
  The database starts off with a single user inside. -> { email: tman2272@aol.com password: password }. Keep in mind the response will send the entire user back.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must send all three into the body. Passwords are case sensitive.
  Keep in mind the response only gives the new user ID.

* ##### Add Favorite - `/users/favorites/new`
  To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  Keep in mind the response only gives the new favorite id

* ##### Receive All Favorites - `/users/:id/favorites`
  To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

* ##### Delete a Favorite - `/users/:id/favorites/:favID`
  To delete a users favorite you must send in the users id and id of the movie.

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * The user has the ability to sign out. 
  
##### Iteration 2: Favorites
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
  * If the user visits `/favorites` they should see a list of all their favorite movies.
  * The user should be able to delete favorites from `/favorites` or `/`.
  * Favorite movies should have a visual indication on `/`.

##### Extensions:
  * A user stays signed in after refreshing the page. *Hint:* You will probably use localStorage. 
  * Should only take real email addresses *Hint:* Look into regular expressions
  * A user can click and view any individual movie.
  
  
## Rubric 

### Specification Adherence

- 4 - The application completes all 2 iterations above and implements one or more of the extensions.
- 3 - The application completes all 2 iterations.
- 2 - The application is in a usable state, but is missing some of the features outlined in the specification above.
- 1 - The application is missing multiple features essential to having a complete application.

### Code Quality

- 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
- 3 - Developer appears comfortable in React. There are minor opportunities to refactor.
- 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
- 1 - Developer did not make any effort to use React effectively or refactor code.

### CSS/Design

- 4 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has minimal recommendations for design changes. Follows [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 3 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has multiple recommendations for design changes. Follows majority of the [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 2 - Developer has made intentional design decisions to create a user friendly application but Louisa would be mad. Attempts to follow [10 Essential Usability Guidelines.](https://speckyboy.com/10-essential-web-application-usability-guidelines/)
- 1 - Developer did minimal to no CSS for this project besides what was indicated in the comp.

### Testing

- 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
- 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
- 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
- 1 - There was little to no attempt to test this application.

### PropType Implementation

- Pass - Proptype validation is implemented for any component receiving props.
- Fail - There are components missing proptype validation.

### 5. Code Sanitation

The output from ESLint shows…

* 4 - Zero complaints
* 3 - Five or fewer complaints
* 2 - Six to ten complaints
* 1 - More than ten complaints

### Redux Architecture

* 4: Appropriate components are wrapped in connected Redux container components. The Redux store contains all necessary application data and nothing more. All state changes are handled through Redux actions and reducers.
* 3: At least one component is not connected with Redux appropriately. Application state is mutated by more than just Redux. The Redux store is missing application data that it should be handling.
* 2: Application state is mostly outside the control of Redux. Application did not make use of Redux actions and reducers to mutate state. Components do not demonstrate a clear understanding of stateful vs. statelessness.
* 1: Application does not make use of Redux to manage state. There are little or no connected components.

### Routing

* 4: Application is a single page and uses the React Router to display appropriate components based on URL.
* 3: Application is a single page and uses the React Router but does not display the appropriate components upon navigating.
* 2: Application does not render/cannot find additional routes.
* 1: Application did not use a Router

### Workflow

- 4 - Developer(s) make many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer(s) effectively use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.

- 3 - Developer(s) make many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer(s) use git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer(s) have committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.

- 2 - Developer(s) make large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer(s) rarely use git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.

- 1 - Developer(s) make very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

