import { useState } from 'react'
import './App.css'
import Stats from './components/Stats'
import Counter from './components/counter'


const initialState = [
  {
    id: '01',
    count: 0,
  },
  {
    id:'02',
    count:0,
  }
]

function App() {
        const [state, setState] = useState(initialState);

        const totalCount = ()=>{
          return state.reduce((total, currentCounterElement) => total + currentCounterElement.count, 0)
        }

        const increment = (id)=>{
          const updatedCounter = state.map( c => {
            if(c.id === id){
              return {
                ...c,
                count: c.count + 1
              }

            };
            return {...c}
          });
          setState(updatedCounter)
            
           }

      const decrement = (id) =>{
        const updatedCounter = state.map( c => {
          if(c.id === id){
            return {
              ...c,
              count: c.count - 1
            }

          };
          return {...c}
        });
        setState(updatedCounter)
           
         }

 

  return (
    <>
       <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
    
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
              {
                state.map( counterObj =>
                  <Counter 
                  key={counterObj.id}  
                  id={counterObj.id}  
                  count={counterObj.count}
                  incrementHandler = {()=> increment(counterObj.id)}
                  decrementHandler = {()=> decrement(counterObj.id)}
                  /> )
              }
             <Stats count ={totalCount()}/>
            </div>
        </div>
    </>
  )
}

export default App
