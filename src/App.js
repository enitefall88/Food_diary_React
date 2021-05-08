import React, {useState} from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"
import {nanoid} from 'nanoid'

let initialMealEntries = [
  {mealName: "Breakfast", timeStamp: "01.02.2020 11:00:00", energyValue: 0, id: nanoid()},
  {mealName: "Lunch", timeStamp: "01.02.2020 12:00:00", energyValue: 0, id: nanoid()},
  {mealName: "Dinner", timeStamp: "01.02.2020 13:00:00", energyValue: 0, id: nanoid()}
]

function App() {
  let [items, setItems] = useState(initialMealEntries)

  function createItem({mealName, timeStamp, energyValue, id}) {
    let item = {mealName, timeStamp, energyValue, id}
    setItems(
        [...items, item]
    )
  }

  function deleteItem(id) {
    setItems(
        items.filter(item => {
          return item.id != id
        })
    )
    console.log("!!")
  }


  return <div className="p-3">
    <h1 className="h3">Food Diary</h1>
    <FoodForm createItem={createItem}/>
    <div className="mt-4">
      <FoodList items={items} deleteItem={deleteItem}/>
    </div>
  </div>

}

export default App;
