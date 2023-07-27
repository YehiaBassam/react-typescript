import React from 'react';
import './App.css';
import Persons from './components/props/Persons';
import Status from './components/props/Status';
import HaveChildrens from './components/children/HaveChildrens';
import HOC from './components/children/HOC';
import ButtonEvent from './components/eventss/ButtonEvent';
import InputEvent from './components/eventss/InputEvent';
import StyleComp from './components/styled/StyleComp';
import SharedType from './components/typess/SharedType';
import { User } from './components/hookss/User';
import { Counter } from './components/hookss/Counter';
// import { User as UserContext } from './components/hookss/context/advanced_example/User';
import { DomRef } from './components/hookss/refs/DomRef';
import { Private } from './components/compAsProps/Private';
import { Profile } from './components/compAsProps/Profile';
import Lists from './components/typess/Lists';
import GenaricLists from './components/typess/genericType/GenaricLists';


const person = {
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

const allPersons = [
  {
    first: 'ali',
    last: 'nader',
  },
  {
    first: 'wael',
    last: 'yehia',
  },
  {
    first: 'ahmed',
    last: 'samer',
  },
]

const list_1 = ['person_1', 'person_2', 'person_3', 'person_4'];
const list_2 = [10, 20, 30, 40];

function App() {
  return (
    <div className="App">
      <div>
        {/* choose props type : primitive value or object or array */}
        <Persons admin="yehia bassam" name={person} persons={persons}/>
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
        
        {/* pass style as props */}
        <StyleComp />

        {/* pass style as props */}
        <SharedType person={person} allPersons={allPersons}/>

        {/* useState */}
        <User />
        {/* useReducer */}
        <Counter />
        {/* useContext */}
        {/* <UserContext /> */}
        {/* useRef */}
        <DomRef />
        
        {/* Pass Component as props */}
        <Private isLoggedIn={false} Component={Profile}/>
        
        {/* normal rendring array of objects */}
        <Lists />
        {/* Generic Type */}
        <GenaricLists items={list_1} onClick={(item) => console.log(item)}/>
        <GenaricLists items={list_2} onClick={(item) => console.log(item)}/>
        <GenaricLists items={allPersons} onClick={(item) => console.log(item)}/>

      </div>
    </div>
  );
}

export default App;
