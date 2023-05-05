# Persistent Data Example 

1. Download by following Developer Documentation
2. cd into PersistentDataExample (cd PersistentDataExample)
3. Run this command: 
      npx expo start --tunnel
4. Open the app on the Expo App. 
5. Open the Awards page on an IDE (./screens/Awards.jsx)
6. On the Expo App, click on the "CLICK HERE" and look at the point value. (May have to click "CLICK HERE" and back and then "CLICK HERE" again)
7. On the IDE, uncomment "awardsDB.updatePoints(1, 250);" line and add whatever value you'd like. 
8. On the Expo App, click back and then click "CLICK HERE" again. Look at the new value for the first item. 
9. On the IDE, comment "awardsDB.updatePoints(1, 250);" line again. 
10. On the IDE, restart the expo app. (Control + C in the terminal window to shut off and then npx expo start --tunnel to start)
11. Open the app on the Expo App and press "CLICK HERE". 
12. The point value should be the new value that you submitted. 


This proofs that persistent data is possible. However, we did not get time to implement this and would recommand to get a global database to connect 
all the users with the same data, this example is only a local database.
