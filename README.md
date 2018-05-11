# OH, THE PLACES WE'VE BEEN

This application was completed with React using reducers and sagas, SQL, Express, and Node.js. 

This application allows the user to enter in a new reflection and view all reflections. Users are able to delete reflections that may no longer be relevant and bookmark favorite reflections. Reflections can be about professional experiences - the successes and learning opportunities from working on a group project - or personal experiences - the ups and downs of learning how to cook.

### ADD A REFLECTION

Click on the "Add a reflection link". You can enter in a new reflection topic and description. The date is automatically entered when the user submits a reflection. In addition, there will be icons to delete and bookmark the reflection. Reflection are not bookmarked on submission.

![add new reflection](public/images/add-reflection.png)

### VIEW ALL REFLECTIONS

The "View all reflections" will show all reflections; they are ordered from newest to oldest. You are able to delete a reflection by clicking the trashcan icon; a dialog box will promp you to confirm you would like to delete the reflection. You can bookmark a reflection but clicking on the bookmark icon. Bookmarked reflections will display as solid bookmarks, while un-bookmarked reflections display with the bookmark boarder.

![view all reflections](public/images/view-reflections.png)

## Technologies Used

This application was created with the following:
* React
* React-Redux
* Node.js
* Express
* SQL
* Material UI
* Moment.js

## Setup Instructions

* Run `npm install`
* Run `npm run server`
* Run `npm run client`
* You should be automatically directed to `localhost:3000`. If this does not happen, navigate to `localhost:3000`.

## To Create the Database and Tables with PostgreSQL

Create a new database called `reflection_board` and a table called `reflection`.

Database and table information is prodivide in the `data.sql` file. Start the server.

```SQL
CREATE TABLE "reflection" (
  "id" serial primary key,
  "topic" varchar(120),
  "description" varchar(480),
  "bookmarked" boolean default false,
  "date" date not null default CURRENT_DATE
);
```
Sample data is available in data.sql.

## FUTURE FEATURES
 
 Future features I would like to add to the project include
- Deploy this project to Heroku.
- Allow users to to update an existing reflection.
- Ability to filter reflections based on topic.
