import React, {useState} from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"
import SearchForm from "./SearchForm";

let initialMealEntries = [
  {mealName: "Breakfast", timeStamp: "01.02.2020 11:00:00", energyValue: 0},
  {mealName: "Lunch", timeStamp: "01.02.2020 12:00:00", energyValue: 0},
  {mealName: "Dinner", timeStamp: "01.02.2020 13:00:00", energyValue: 0},
]

function App() {
let [items, setItems] = useState(initialMealEntries)

function createItem({mealName, timeStamp, energyValue}) {
  let item = {mealName, timeStamp, energyValue}
  setItems(
      [...items, item]
      )
}

function deleteItem(timeStamp) {
  setItems(
      items.filter(item => item.timeStamp != timeStamp)
  )
}


  return <div>
<FoodForm createItem={createItem}/>
<FoodList items={items} deleteItem={deleteItem}/>
    </div>

}

export default App;
