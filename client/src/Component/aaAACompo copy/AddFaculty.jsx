import {useState} from "react"
import { addFacultyDetails } from "../../Api";
import "../../Assets/Css/form.css"
import {Buffer} from 'buffer'

export default function AddFaculty(){
const [facultyInfo, setFacultyInfo] = useState({fid:'',fname:'',femail:'',fdept:'',fexperience:'',faddress:'',fmob:'',img:''});
const [imag, setImag] = useState([]);

function onChangeHandler(e){
  console.log("facultyInfo")

const name=e.target.name;
const value=e.target.value;

setFacultyInfo({...facultyInfo,[name]:value})
}

function toBase64(sdata){
  return Buffer.from(String.fromCharCode.apply(null,new Uint8Array(sdata)),'binary').toString('base64')
}


function onphotoChangeHandler(e){
  console.log("onphotoChangeHandler")


setFacultyInfo({...facultyInfo,img:e.target.files[0]})
}


// const data="";
var data=[];

  const setSubmitData = async  (e)=>{
    e.preventDefault();
let formData=new FormData();
for( var key in facultyInfo ) {
  formData.append(key, facultyInfo[key]);
  console.log(key);
}
// formData.append("img", "anjnskj");  
console.log("sname",formData.get("sname"));
console.log("formData",formData)
console.log(facultyInfo)
console.log("facultyInfo",facultyInfo)

 
const facultyInfoResp=await addFacultyDetails(formData);
// console.log("responc from ser")
// formData.append()
console.log("responc from ser===> facultyInfo",facultyInfoResp)

data=facultyInfoResp.data.img.data.data;
setImag(data)
console.log("responc from data===> facultyInfo",data)

// const data=facultyInfo.data.img.data;

  }

 

return(

    <>
 <div  className="fl-center facultyform">
 
<div class="container">
  <form encType="multipart/form-data" >
    <div class="row">
      <h4>Faculty Form</h4>
    
      <div class="input-group ">
      <input type="text" name="fid"  placeholder="Faculty Id" onChange={onChangeHandler} value={facultyInfo.fid} required/>
     
      </div>
      <div class="input-group ">
      <input type="text" placeholder="Full Name" name="fname"  onChange={onChangeHandler} value={facultyInfo.fname} required/>
      </div>
      <div class="input-group ">
      <input type="text" placeholder="Email Address" name="femail" onChange={onChangeHandler} value={facultyInfo.femail}/>

      </div>
      <div class="input-group ">
      <input type="text" placeholder="Experience" name="fexperience" onChange={onChangeHandler} value={facultyInfo.fexperience}/>

      </div>
      
      <select name="fdept" id="dept" onChange={onChangeHandler} value={facultyInfo.fdept} >
  <option value="select department">Select Department</option>
  <option  value="ele">Electrical Engineering</option>
  <option value="mech">Mechanical Engineering</option>
  <option value="civil">Civil Engineering</option>
  <option value="it">Information Technology </option>
  <option value="entc">Electronics Engineering</option>
 
</select>
 
      <div class="input-group ">
      <input type="text" placeholder="Address" name="faddress" onChange={onChangeHandler} value={facultyInfo.faddress}/>

      </div>
   <img src={`data:image/jpeg;base64,${toBase64(imag)}`} />

      <div class="input-group ">
      <input type="text" placeholder="Mobile Number" name="fmob" onChange={onChangeHandler} value={facultyInfo.fmob}/>
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