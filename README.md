## React Basic Counter Project

### Objective

The objective of this project was to create a basic React counter website using the `useState` hook.
It demonstrates state management, user interactions, and conditional rendering in React.
The counter allows users to increase, decrease, and reset a count value within a range of 0 to 20.


### Features

1. It allows the user to interact with `increase`, `decrease`, and `reset` buttons.
2. The counter value can increase up to 20 and then reset backs to 0.
3. The counter value doesnot go less than 0.
4. User can reset the value by clicking `reset` button.



### Technologies Used
- React
- State Hooks
- HTML
- CSS (For Basic Stylings)


### Project Structure

The project structure is as follows:

1. `src/App.jsx` contains the function to return the `App` jsx to the `src/main.jsx`.
2. `src/main.jsx` then uses react render to render the file into the browser.
3. `src/main.css` contains the styling for the website. 




### How It Works

1. The `App` component uses the `useState` hook to manage the counter state.
2. Button click events trigger state updates using the setter function from `useState`.
3. Conditional rendering is used to display different messages based on the counter value.
4. The counter value is constrained between 0 and 20 using conditional logic in the event handlers.

### Learning Outcomes

1. State Management: Understanding how to use the `useState` hook to manage component state.
2. Event Handling: Implementing click event handlers for user interactions.
3. Conditional Rendering: Displaying different content based on the current state.
4. Component Structure: Creating a functional component with multiple elements and logic.
5. React Basics: Gaining hands-on experience with fundamental React concepts and syntax.


