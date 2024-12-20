import {useState} from 'react';
import './App.css';
import CourseList from './component/courseList';
import Header from './component/Header';
import Image from './assets/goals.jpg';
import NewGoal from './component/NewGoal';

export type CourseGoal = {
  id:number;
  title:string;
  description:string
}
function App() {

  const [goals,setGoals] = useState<CourseGoal[]>([])

  function handleAddGoals(goal:string, summary:string){
      setGoals((prevGoals) => {
        const newGoal: CourseGoal = {
          id: Math.random()*1000,
          title:goal,
          description:summary
        }
        return [...prevGoals,newGoal]
      })
  }

  function handleDeleteGoal(id:number){
    setGoals(prevGoals => prevGoals.filter((goal) =>  goal.id !== id))
  }

  return (
    <main>
      <Header image={{src:Image, alt:'List of Goals'}}>
        <h1>Your Code Choice</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoals}/>
      <CourseList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

export default App



// import {useState} from 'react';
// import './App.css';
// import Course from './component/cousre';
// import Header from './component/Header';
// import Image from './assets/goals.jpg';

// type CourseGoal = {
//   id:number;
//   title:string;
//   description:string
// }
// function App() {

//   const [goals,setGoals] = useState<CourseGoal[]>([])

//   function handleAddGoals(){
//       setGoals((prevGoals) => {
//         const newGoal: CourseGoal = {
//           id: Math.random()*1000,
//           title:"Learn React With Typescript",
//           description:"This is React Course"
//         }
//         return [...prevGoals,newGoal]
//       })
//   }

//   return (
//     <main>
//       <Header image={{src:Image, alt:'List of Goals'}}>
//         <h1>Your Code Choice</h1>
//       </Header>
//       <button onClick={handleAddGoals}>Add Goals</button>
//       <ul>
//       {goals.map((goal) =>(
//           <li key={goal.id}>
//           <Course
//             title={goal.title}>
//             <p>{goal.description}</p>
//           </Course> 
//           </li>
//       ))}
//       </ul>
      
      

//     </main>
//   )
// }

// export default App