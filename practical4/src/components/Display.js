import React from 'react'
import {MyContext} from '../context/MyContext'
function Display() {
    const { counter} = React.useContext(MyContext);
  return (
    <div>
      <h2>COUNTER VALUE : {counter}</h2>
    </div>
  )
}
export default Display