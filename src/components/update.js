import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, text, number }) => (
<div className={'item'}

style={{
  borderRadius:8,
  
  display: completed ? 'none' : 'block'
}}>
<div
  onClick={onClick}
  >

 
       
      <h5 class="card-title col-md-7"> <input  type="radio"  /> {text}  </h5>

  </div>
  
  </div>)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item