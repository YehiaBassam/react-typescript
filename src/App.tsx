import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Status from './components/Status';
import HaveChildrens from './components/HaveChildrens';
import HOC from './components/HOC';
import ButtonEvent from './components/ButtonEvent';
import InputEvent from './components/InputEvent';

const objTest = {
  first: 'ali',
  last: 'nader',
}


const persons = [
  {
    title: 'person_1',
    age: 20,
  },
  {
    title: 'person_2',
    age: 40,
  },
]

function App() {
  return (
    <div className="App">
      <div>
        {/* choose props type : primitive value or object or array */}
        <Greetings name="yehia bassam" objTest={objTest} persons={persons}/>
        {/* pass props options using "|" , and pass optional props  */}
        <Status type="success" count={20}/>
        {/* pass children data */}
        <HaveChildrens> 
          childrens data
        </HaveChildrens>
        {/* import child component */}
        <HOC>
          <Status type="loading"/>
        </HOC>

        {/* pass event and parameters with events like onclick */}
        <ButtonEvent />
        
        {/* pass onchange event */}
        <InputEvent />

      </div>
    </div>
  );
}

export default App;
