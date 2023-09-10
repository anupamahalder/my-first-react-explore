import { useState } from 'react'
import './App.css'
import Todo from './Todo.jsx'
import Actor from './Actor.jsx'
import Singer from './Singer'
import BookStore from './BookStore'
import Counter from './Counter'
import Team from './Team'
import Users from './Users.jsx'
import Friends from './Friends'

function App() {
  const actors = ['Shakib','Shoriful Raj','Jasim','Rubel'];
  const singers = [
    {id:1, name: 'Mita',age:68},
    {id:2, name:'Priya',age:21},
    {id:3, name:'Sohom',age:34}
  ];
  const books = [
    {id:1, name:'Physics',price:230},
    {id:2, name:'Maths',price:430},
    {id:3, name:'Science',price:300},
    {id:4, name:'Biology',price:150}
  ];
  function handleClick(){
    alert('Button Clicked!');
  };
  const handleClick2=()=>{
    alert("purchase now");
  };
  const addFive=(num)=>{
    alert(num + 5);
  };
  return (
    <>
      <h2>Vite + React</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Buy Now</button>
      <button onClick={handleClick2}>Purchase Now</button>
      <button onClick={()=>{alert("Hi, I am third button!")}}>Third Btn</button>
      <button onClick={()=>addFive(3)}>Four btn</button>
      <BookStore books={books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer.name} age={singer.age}></Singer>)
      }
      <Actor name="Rupsha"></Actor>{
        // Get all the array elements and call Actor components for each element
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <h2>Anupama Halder</h2>
      <Todo 
        task="Learn React" 
        isDone={true}>
      </Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      {/* Reusibility of component  */}
      <Device name="Laptop" price="55k"></Device>
      <Device name="Phone" price="15k"></Device>
      <Device name="Chromebook"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Developer></Developer>
    </>
  )
}
// Component
function Device(props){
  // console.log(props);
  //parameter is in object form
  return <h4>This device: {props.name} price: {props?.price || "Unavailable"}</h4>
} 
function Person(){
  const year = 2023;
  const person = {name:'Anu',age:22};
  return <h3>I am a person named {person.name} with age {person.age} in {year}</h3>
}
//destructuring our props object and set default value
function Student({grade=1,score=0}){
  return (
    // getting the style by class name 
    <div className = 'student'>
      <h3>Hello All</h3>
      <h4>Grade: {grade}</h4>
      <h4>Score: {score}</h4>
    </div>
  );
}
function Developer(){
  // We cab create object for styling where property will be css property
  const developerStyle = {
    margin: '20px',
    padding: '15px',
    border: '2px solid red',
    borderRadius: '24px',
  }
  return (
    <div style={developerStyle}>
      <h5>I am a developer</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur molestias modi, quod corporis sunt nemo corrupti repudiandae vel placeat.</p>
    </div>
  );
}

export default App
