import React from 'react';
import {Switch} from 'antd';
import Button from '@material-ui/core/Button';
const FormData = () =>{
    return(
        <>
        <div className="heading">
       <h4>Account Setting</h4>
       <Button>Save Changes</Button>
       </div>
       <form>
         <div class="form-group">
           <label>Username</label>
           <input type="text" placeholder="Please enter your name" class="form-control"/>
         </div>
         <div class="form-group">
           <label>Email</label>
           <input type="email" placeholder="Please enter your email" class="form-control"/>
         </div>
         <div class="switch">
         <label>
            Sound Effect</label>
             <Switch />
         </div>
         <div class="switch">
         <label>
            Animation</label>
             <Switch />
         </div>
        
         <div class="switch">
         <label>
           Motvitational Message</label>
             <Switch />
         </div>
         <div class="switch">
         <label>
          Speaking Excersice</label>
             <Switch />
         </div>
         <div class="switch">
         <label>
         Listening Excersice</label>
             <Switch />
         </div>
        
       </form>
     
        </>
    )
}
export default FormData;