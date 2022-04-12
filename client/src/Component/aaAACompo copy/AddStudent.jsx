import {useState} from "react"
import { addStudentDetails } from "../../Api";
import "../../Assets/Css/form.css"
import {Buffer} from 'buffer'

export default function AddStudent(){
const [studentInfo, setStudentInfo] = useState({sname:'',prn:'',semail:'',sdept:'',ssemester:'',saddress:'',smob:'',img:''});
const [imag, setImag] = useState([]);

function onChangeHandler(e){
  console.log("studentInfo")

const name=e.target.name;
const value=e.target.value;

setStudentInfo({...studentInfo,[name]:value})
}

function toBase64(sdata){
  return Buffer.from(String.fromCharCode.apply(null,new Uint8Array(sdata)),'binary').toString('base64')
}


function onphotoChangeHandler(e){
  console.log("onphotoChangeHandler")


setStudentInfo({...studentInfo,img:e.target.files[0]})
}


// const data="";
var data=[];

  const setSubmitData = async  (e)=>{
    e.preventDefault();
let formData=new FormData();
for( var key in studentInfo ) {
  formData.append(key, studentInfo[key]);
  console.log(key);
}
// formData.append("img", "anjnskj");  
console.log("sname",formData.get("sname"));
console.log("formData",formData)
console.log(studentInfo)
console.log("studentInfo",studentInfo)

 
const studentinfo=await addStudentDetails(formData);
// console.log("responc from ser")
// formData.append()

data=studentinfo.data.img.data.data;
setImag(data)

// console.log("responc from ser===> studentinfo",studentinfo.data.img.data.data)
// const data=studentinfo.data.img.data;

  }

 

return(

    <>
 <div  className="fl-center facultyform">
 
<div class="container">
  <form encType="multipart/form-data" >
    <div class="row">
      <h4>Student Form</h4>
    
      <div class="input-group ">
      <input type="text" name="prn"  placeholder="PRN" onChange={onChangeHandler} value={studentInfo.prn} required/>
     
      </div>
      <div class="input-group ">
      <input type="text" placeholder="Full Name" name="sname"  onChange={onChangeHandler} value={studentInfo.sname} required/>
      </div>
      <div class="input-group ">
      <input type="text" placeholder="Email" name="semail" onChange={onChangeHandler} value={studentInfo.semail}/>

      </div>
      
      <select name="sdept" id="dept" onChange={onChangeHandler} value={studentInfo.sdept} >
  <option value="select department">Select Department</option>
  <option  value="ele">Electrical Engineering</option>
  <option value="mech">Mechanical Engineering</option>
  <option value="civil">Civil Engineering</option>
  <option value="it">Information Technology </option>
  <option value="entc">Electronics Engineering</option>
 
</select>
 
    
<select name="ssemester" id="semester" onChange={onChangeHandler} value={studentInfo.ssemester} >
  <option value="select semester">Select Semester</option>
  <option  value="first">First</option>
  <option value="second">Second</option>
  <option value="third">Third</option>
  <option value="fourth">Fourth</option>
  <option value="fifth">Fifth</option>
  <option value="sixth">Sixth</option>
  <option value="seven">Seventh</option>
  <option value="eighth">Eighth</option>
</select>

      <div class="input-group ">
      <input type="text" placeholder="Address" name="saddress" onChange={onChangeHandler} value={studentInfo.saddress}/>

      </div>
   <img src={`data:image/jpeg;base64,${toBase64(imag)}`} />

      <div class="input-group ">
      <input type="text" placeholder="Mobile Number" name="smob" onChange={onChangeHandler} value={studentInfo.smob}/>
    {/* <img src={`data:image/jpeg;base64,${data}`} /> */}

      </div>
      <div class="input-group ">
      {/* <input type="text" placeholder="Pic" name="spic" /> */}
      <h2>Upload Pic</h2>
      <input type="file" id="img" name="img"   onChange={onphotoChangeHandler}   accept="image/*"/>
      </div>
      <button type="submit" onClick={(e)=>setSubmitData(e)}>Submit</button>
      <button type="reset">Reset</button>
    </div>
     </form>
</div></div>

           </>
)

}