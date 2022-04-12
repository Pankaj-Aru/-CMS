
import Passport from "../../Assets/Images/pro-1.jpg"
export default function LoggerInfo(){


    return(

        <>
<div className="logger-info">
    
      <div className="info">
          <table>
          <tbody>
              <tr>
                  <td> Name :</td>
                  <td>Rajuu Rajeskar</td>
              </tr>
              <tr>
                  <td> Roll :</td>
                  <td>45</td>
              </tr>
              <tr>
                  <td> Addresss :</td>
                  <td>Pune</td>
              </tr>
              <tr>
                  <td> Mobibe number :</td>
                  <td>7894468855</td>
              </tr>
              <tr>
                  <td> Mail-Id</td>
                  <td>ahsdasbb@gmail.com</td>
              </tr>
              <tr>
                  <td> Semester/Year</td>
                  <td>7th/4th year</td>
              </tr>
              </tbody>
          </table>
      </div>
      <div className="passport"><img src={Passport}/></div>
    </div>

        </>
    )
}