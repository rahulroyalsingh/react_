import './App.css';
import React from 'react'
function App() {
    const students = ['Rahul','Garun','Devesh','Raja'];
    //map looping
    students.map((item) => {
        console.warn("My name is:", item)
    });
    return (
        <div className="App">
            <h1>Handling array using List</h1>
        </div>
    );
}
export default App;