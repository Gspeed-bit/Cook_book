import React, { useEffect, useState} from "react"
import { Categories } from "./components/Categories";
import list from "./components/data";
import { Dishes } from "./components/Dishes";

function App() {
  
  const [dishes, setDishes] = useState(list)
  const [categorize, setCategorize ] = useState("")
    return (
     <main>
       <section className="menu section">
          <div className="wrapper">
            <h1 className="title"> our menu</h1>
            <Categories />
            <Dishes list={dishes}/> 
          </div>
       </section>
     </main>
    )
  }

export default App;
