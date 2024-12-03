// Importing React and the render method from react-dom
import React from 'react';
import { render } from 'react-dom';
import Playground from './components/Playground';
/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

// Defining the App component
function App(props) {
  return (
    <div className='container'>
      {/**
       * The following commented-out code is an example of how to create
       * a DOM element using vanilla JavaScript, but it's not needed in React.
       * React handles DOM updates for us.
       * 
       * const elem = document.createElement("div");
       * elem.classList.add("container");
       * document.body.appendChild(elem);
       */}
      
      {/* Rendering a welcome message that includes the track prop */}
      <h1>Welcome to React, {props.track} rockstars!!</h1>
      <h2>Instructors Name: {props.name}, age {props.age}</h2>
      <h3>Are you Happy ? {props.happy}</h3>
      < Playground />

    </div>
  );
}
// Rendering the App component into the DOM
render(
  <App 
    track='Web'        // Passing the 'track' prop with value 'Web'
    name='Kevin'      // Passing the 'name' prop with value 'Kevin'
    happy='NO'        // Passing the 'happy' prop with value 'NO'
    age={72}          // Passing the 'age' prop with value 72 (using curly braces for a number)
  />, 
  document.querySelector('#root') // Targeting the root div in index.html




);
// // Rendering the App component into the DOM
// render(
//   <App track='Web' name='Kevin' happy="NO" age=(72) />, // Passing the 'track' prop with value 'Web'
//   document.querySelector('#root') // Targeting the root div in index.html
// );

// render(
//   <App track='Web' />,
//   document.querySelector('#root')
// )
