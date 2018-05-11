# OH, THE PLACES WE'VE BEEN

This application allows the user to enter in a new reflection and view all reflections. Users are able to delete reflections that may no longer be relevant and bookmark favorite reflections. Reflections can be about professional experiences - the successes and learning opportunities from working on a group project - or personal experiences - the ups and downs of learning how to cook.

This project was created using React.js, Express, SQL, Node.js, and Material-UI.


### SETUP

Database and table information is prodivide in the `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### TO ADD A NEW REFLECTION

Click on the "Add a reflection link". You can enter in a new reflection topic and description. Upon submission of the new reflection, the date is automatically entered. In addition, there will be icons to delete and bookmark the reflection. All new reflections are not bookmarked on submission.

![add new reflection](wireframes/screen-one.png)

### TO VIEW ALL REFLECTIONS

The "View all reflections" will show all reflections; they are ordered from newest to oldest. You are able to delete a reflection by clicking the trashcan icon; a dialog box will promp you to confirm you would like to delete the reflection. You can bookmark a reflection but clicking on the bookmark icon. Bookmarked reflections will display as solid bookmarks, while un-bookmarked reflections display with the bookmark boarder.

![display reflections](wireframes/screen-two.png)

## FUTURE FEATURES
 
 Future features I would like to add to the project include
- Deploy this project to Heroku.
- Add a navigation bar.
- Allow users to to update an existing reflection.
- Ability to filter reflections based on topic.
