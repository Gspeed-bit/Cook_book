import React, {useState} from "react"
import { Categories } from "./components/Categories";
import list from "./components/data";
import { Dishes } from "./components/Dishes";

function App() {
const allCategories = ["all", ...new Set(list.map((item)=>item.category))]
  
  const [dishes, setDishes] = useState(list)
  const [categorize, setCategorize ] = useState(allCategories)
  

const filterItems =(category)=>{

  if (category === "all"){
  return setDishes(list)
  }
  //this returns a new array after serching though the categories
  const newItems = list.filter((item)=> item.category === category);
  setDishes(newItems)
 
}

    return (
     <main>
       <section className="menu section">
          <div className="title">
            <h2> our menu</h2>
            <div className="underline"></div>
          </div>
            <Categories categorize= {categorize} filterItems={filterItems} />
            <Dishes list={dishes}/> 
       </section>
     </main>
    )
  }

export default App;
