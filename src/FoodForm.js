import React from "react"

export default function FoodForm() {
  return <div className="form-inline">
   <select autoComplete="off"
              className="form-control"
              name="text"
              placeholder=""
              value="">
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <input type="date"
             className="form-control ml-2"/>
    <input type="number" min={100} max={2000} step={100} value={1}
           className="form-control ml-2"/>
    <button type="button"
            disabled={true}
            className="btn btn-primary ml-2">
      Add
    </button>
  </div>
}



