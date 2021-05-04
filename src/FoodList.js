import React from "react"

export default function FoodList() {
  return <div style={{maxWidth: "20rem"}}>
        <div>
      {[true,true,true].map(item =>
        <FoodItem/>
      )}
    </div>
  </div>
}

function FoodItem() {
  return  <div className="d-flex justify-content-between mt-3">
    <div>
      <small className="text-muted">Date</small><br/>
     Breakfast     kcal
    </div>
    <div>
      <button type="button"
              className="btn btn-secondary ml-2"
              style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
        &times;
      </button>
    </div>
  </div>
}
