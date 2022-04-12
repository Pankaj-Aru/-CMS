import {useState} from "react"
import { addStudentDetails } from "../../Api";

export default function AddStudent(){
const [studentInfo, setStudentInfo] = useState({sname:'',prn:'',semail:'',sdept:'',syear:'',saddress:'',smob:'',spic:''});

function onChangeHandler(e){

const name=e.target.name;
const value=e.target.value;
console.log(studentInfo)
setStudentInfo({...studentInfo,[name]:value})
}

  const setStudentInfofun = async  ()=>{
console.log(studentInfo)

 
const studentinfo=await addStudentDetails(studentInfo);
console.log("responc from ser")

console.log(studentinfo.data)
console.log("responc from ser===> subjects")

console.log(studentinfo.data);




// setStudentInfo({sname:'',prn:'',semail:'',sdept:'',syear:'',saddress:'',smob:'',spic:''})
  }




return(

    <>


<div className="student-form">
      <h2>Student Form</h2>
    
      <div className="add-student">
        <table>
        <tbody>
          <tr>
            <td>
              <span>PRN No. :</span>
            </td>
            <td>
              <input type="text" name="prn" onChange={onChangeHandler} value={studentInfo.prn} required/>
            </td>
          </tr>
          <tr>
            <td>
              <span>Student Name :</span>
            </td>
            <td>
              <input type="text" name="sname"  onChange={onChangeHandler} value={studentInfo.sname} required/>
            </td>
          </tr>
          <tr>
            <td>
              <span>Email Id :</span>
            </td>
            <td>
              <input type="text" name="semail"  onChange={onChangeHandler} value={studentInfo.semail}/>
            </td>
          </tr>
          <tr>
            <td>
              <span>Dept :</span>
            </td>
            <td>
              <input type="text" name="sdept" onChange={onChangeHandler} value={studentInfo.sdept} />
            </td>
          </tr>
        
          <tr>
            <td>
              <span>Year</span>
            </td>
            <td>
              <input type="text" name="syear" onChange={onChangeHandler} value={studentInfo.syear}  required/>
            </td>
          </tr>
          <tr>
            <td>
              <span>Address :</span>
            </td>
            <td>
              <input type="text" name="saddress"  onChange={onChangeHandler} value={studentInfo.saddress}/>
            </td>
          </tr>
          <tr>
            <td>
              <span>Mobile No :</span>
            </td>
            <td>
              <input type="text" name="smob" onChange={onChangeHandler} value={studentInfo.smob} />
            </td>
          </tr>

          <tr>
            <td>
              <span>Upload Pic:</span>
            </td>
            <td>
              <input type="text" name="spic" onChange={onChangeHandler} value={studentInfo.spic} />
            </td>
          </tr>
          </tbody>
        </table>

        <div>
          <button type="submit" className="btn"  onClick={setStudentInfofun}>Submit </button>

          <button type="reset" className="btn">reset </button>
        </div>
      </div>
  
  </div>


           </>
)

}