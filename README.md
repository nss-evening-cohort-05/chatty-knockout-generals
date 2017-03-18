
##### This is a group chat forum where multiple users can have a conversation. 
##### This was a group project with 5 developers where each person did a section of code. 
##### Contriubers: Ben Greaves, Ellis Thomas, Bryan Miller, Anessa Ortner, and Matt Hensley.


![Screen Shot](chatty-knockout-generals/screenshot.jpg "Screen Shot")

![Screen Shot](chatty-knockout-generals/inverse.jpg "Inverse")

![Screen SHot](chatty-knockout-generals/Largetext.jpg "Large Text")

![Planning Board](chatty-knockout-generals/planningboard.JPG "Planning Board")

![Logo](chatty-knockout-generals/ClipChat-logo.png "Logo")




### Navigation bar

1. Create an element to serve as the navigation bar for your application.
1. Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
1. Create a input field for a user to enter in a message.
1. Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
1. When return key is detected, you'll create a new message (*see details below*).
1. Create a button to clear all messages.
1. When the user clicks the clear messages button, all current chat messages should be removed from the application.
1. If there are no messages, then the clear messages button should be disabled (*see example above*).
1. The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.


### Modular Code

Create multiple IIFEs, following the Single Responsibility Principle, that perform the following functions. The name of your global variable that gets augmented by the IIFEs should be `Chatty`.

1. One IIFE should load the JSON file and returns the array of objects.
1. One IIFE should contain a function that accepts an element `id`, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should also expose a function to read all messages, and delete a single message.
1. One IIFE should accept a message element `id` and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

### Custom themes

1. Add a button/link to the UI labeled "Change Theme".
1. Remove the existing elements for changing the theme.
1. When user click on Change Theme element, show a Bootstrap modal dialog box.
1. Inside the modal, show two color picker fields - one for background color and one for font color.
1. Add a *Save* and *Cancel* button to modal.
1. When user clicks *Save* apply the chosen colors.

### Multiple users

1. Create an object in your JavaScript that holds an array of names (*see example below*).
1. Next to the message input box, there should be a radio button group for each name in the list.
1. When a user enters a message, it should be prepended with the chosen user's name, in bold text.
1. Keep in mind that this will likely change the structure of your JSON file since the pre-loaded messages have to have this information on them.

### Multiple JSON files

Instead of having one JSON file with five messages in it, break each message into its own JSON file. How do you handle loading them in succession?

### Text to Voice

The users can click on an icon and hear the other user messages audibly. 


