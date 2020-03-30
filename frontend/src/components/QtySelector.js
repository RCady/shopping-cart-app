import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

const QtySelector = ({initialValue, onQtyUpdate}) => {
  const [qty, setQty] = useState(parseInt(initialValue) ?? 1)
  const updateQty = (newQty) => {
    if (typeof onQtyUpdate !== "undefined") {
      onQtyUpdate(newQty, qty)
    }
    setQty(newQty)
  }

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <Button variant="outline-secondary" onClick={() => updateQty(qty > 1 ? qty - 1 : 1)}>-</Button>
      </InputGroup.Prepend>
      <FormControl type="number" className="text-center" value={ qty } onChange={(e) => updateQty(e.target.value)}></FormControl>
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => updateQty(qty + 1)}>+</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default QtySelector
