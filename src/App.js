import React,{useState} from 'react';
import './App.css';

import Person from './components/Person';

import antonellaImg from './assets/images/Antonella.png';
import jackImg from './assets/images/Jackson.png';
import lilyImg from './assets/images/Lily.png';
import sebastianImg from './assets/images/Sebastian.png';


function App() {

  const BIRTHDAYS=[
    {image:antonellaImg,name:"Antonella Rossi", years:22},
    {image:jackImg,name:"Jack Querales", years:25 },
    {image:lilyImg,name:"Lily Rivas", years:28},
    {image:sebastianImg,name:"Sebastian Marchiori", years:26}
  ]
  
  const [list,setList] = useState(BIRTHDAYS);
  
  const deleteList = () =>{
    setList([]);
  }

  return (
    <div className='page'>

    <section className='birthdayList-container'>

    <h1 className='birthdayList-title'>{list.length} birthdays today</h1>
    
    <ol className='birthdayList-list'>

      {list.map((item)=>{

      return  <li key={item.name}> <Person image={item.image} name={item.name} years={item.years} /> </li>

      })}

    </ol>

    {list.length ===0 && <p>Empty list.There are not birthdays.</p>}

    <div className='birthdayList-button'>
    <button onClick={deleteList} >Clean All</button>
    </div>


    </section>

    </div>
  );
}

export default App;
