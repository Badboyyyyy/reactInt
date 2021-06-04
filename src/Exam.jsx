import React from 'react';
import download from './download.jpg';
import Button from '@material-ui/core/Button';
const Exam = () =>{
    return(
        <>
        <div className="heading">
       <h4>Account Setting</h4>
       <Button>Save Changes</Button>
       </div>
       <p>Coach here ! Selecting a daily goal will help you stay motivated while learning a language you can change your goal at any time</p>
        <div className= "mainContent">
          <div className="imgbox">
            <img src ={download} alt="img" />
          </div>
          <div className="tab">
            <table>
              <tr>
                <td>Basic</td>
                <td>1 XP  per day</td>
              </tr>
              <tr>
                <td>Casual</td>
                <td>1 XP per day</td>
              </tr>
                <tr>
                  <td>Serious</td>
                  <td>30 XP per day</td>
                </tr>
                <tr>
                  <td>Intense</td>
                  <td>50 XP per day</td>
                </tr>
            </table>
          </div>
        </div>
        </>
    )
}
export default Exam;