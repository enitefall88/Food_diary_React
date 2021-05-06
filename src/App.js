import React, {useState} from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"

let initialMealEntries = [
  {mealName: "Breakfast", timestamp: "01.02.2020 10:00:00", energyValue: 0},
  {mealName: "Lunch", timestamp: "01.02.2020 10:00:00", energyValue: 0},
  {mealName: "Dinner", timestamp: "01.02.2020 10:00:00", energyValue: 0},
]

function App() {
let [items, setItems] = useState(initialMealEntries)

function createItem({mealName}) {
  let item = {mealName, timestamp: "01.02.2020 10:00:00", energyValue: 0 }
  setItems(
      [...items, item]
      )
  console.log("!!")
}

  return <div>
<FoodForm createItem={createItem}/>
<FoodList items={items}/>
    </div>

}

export default App;
