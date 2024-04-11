import React from 'react'
import './form.css'

function Form(props) {
  return (
      <div className='wrapper'>
          <div className='form-data'>
              <h1>Login</h1>
               
             <label>Name :</label><input type='text' value={props.object.name} /> <br />
            
              <label>Email :</label><input type='email' value={props.object.email} /><br/>
              <input id='button' type='button' value="Login" />
          </div>
         
    </div>
  )
}

export default Form