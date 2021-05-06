import React, {useState} from "react"

export default function FoodForm({createItem}) {
  let [mealName, setMealName] = useState("")
  let [timeStamp, setTimeStamp] = useState(new Date())
  let [energyValue, setEnergyValue] = useState(0)


  return <div className="form-inline">
   <select autoComplete="off"
              className="form-control"
              onChange={e=> setMealName(e.target.value)}
              name="text"
              placeholder=""
              value={mealName}>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <input type="date" value={formatDate(timeStamp)}
             className="form-control ml-2"
             onChange={e => (setTimeStamp(new Date(e.target.value)))}/>
      <input type="number" min={100} max={2000} step={100} value={energyValue}
           onChange={e => setEnergyValue(parseInt(e.target.value))}
           className="form-control ml-2"/>
      <button type="button"
            disabled={false}
            onClick={_ => createItem({mealName, timeStamp, energyValue})}
            className="btn btn-primary ml-2">
      Add
    </button>
  </div>
}

function formatDate(date) {
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
}




