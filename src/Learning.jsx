import React from 'react';
import CameraRoundedIcon from '@material-ui/icons/CameraRounded';
const Learning = () =>{
    return(
        <>
        <div className="second">
        <div class="card">
          <h4>Choose your path !</h4>
          <p>Beginners start at basic |. Advance learner take a short test</p>
          <div className="badge">
           <ul>
             <li> <CameraRoundedIcon /> </li>
             <li>Basic 1</li>
           </ul>
           <p>or</p>
           <ul>
             <li><CameraRoundedIcon /> </li>
             <li> Placement test</li>
           </ul>
          </div>
        </div>
      </div>
      </>
    )
      
}
export default Learning;