import React from "react"
import ReduxWrapper from "./src/state/ReduxWrapper"

export const wrapRootElement = ({ element }) => {
  return (
    <ReduxWrapper element={ element } requestCart={ true }>{ element }</ReduxWrapper>
  )
}
