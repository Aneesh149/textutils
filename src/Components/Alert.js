import React from 'react'

function Alert(props) {
  return (<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    )
  }
  
  export default Alert
  // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //     <strong>{props.alert.type}</strong>: {props.alert.msg}
  // </div>