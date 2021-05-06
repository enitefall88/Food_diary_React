import React from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"

let initialMealEntries = [
  {mealName: "Breakfast", timestamp: true},
  {mealName: "Lunch", timestamp: true},
  {mealName: "Dinner", timestamp: false},
]

function App() {
  return <div>
<FoodForm/>
<FoodList/>
    </div>

}

export default App;
