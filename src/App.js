import React, {useState} from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"

let initialMealEntries = [
  {mealName: "Breakfast", timeStamp: "01.02.2020 10:00:00", energyValue: 0},
  {mealName: "Lunch", timeStamp: "01.02.2020 10:00:00", energyValue: 0},
  {mealName: "Dinner", timeStamp: "01.02.2020 10:00:00", energyValue: 0},
]

function App() {
let [items, setItems] = useState(initialMealEntries)

function createItem({mealName, timeStamp, energyValue}) {
  let item = {mealName, timeStamp, energyValue}
  setItems(
      [...items, item]
      )
}

  return <div>
<FoodForm createItem={createItem}/>
<FoodList items={items}/>
    </div>

}

export default App;
