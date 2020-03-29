import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

const QtySelector = ({initialValue}) => {
  const [qty, setQty] = useState(parseInt(initialValue) ?? 1)

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <Button variant="outline-secondary" onClick={() => setQty(qty > 0 ? qty - 1 : 0)}>-</Button>
      </InputGroup.Prepend>
      <FormControl type="number" className="text-center" value={ qty } onChange={(e) => setQty(e.target.value)}></FormControl>
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => setQty(qty + 1)}>+</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default QtySelector
