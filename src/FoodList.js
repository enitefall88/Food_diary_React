import React from "react"

export default function FoodList({items}) {
  return <div style={{maxWidth: "20rem"}}>
        <div>
      {items.map(item =>
        <FoodItem item={item}/>
      )}
    </div>
  </div>
}

function FoodItem({item}) {
  let d = new Date(item.timeStamp)
  return  <div className="d-flex justify-content-between mt-3">
    <div>
      <small className="text-muted">{d.toLocaleDateString('de-DE')} {d.toLocaleTimeString('de-DE')}</small><br/>
      {item.mealName} {item.energyValue} kcal
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
