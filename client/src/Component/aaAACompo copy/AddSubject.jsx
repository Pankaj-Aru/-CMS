import { useState } from "react"
import { addSubject } from "../../Api.js";
import "../../Assets/Css/form.css"
export default function AddCourse() {
  const [subjects, setsubjects] = useState({ subid: '', subname: '', subdept: '', year: '', semester: '' });


  function onChangeHandler(e) {

    const name = e.target.name;
    const value = e.target.value;

    setsubjects({ ...subjects, [name]: value })

    console.log(subjects)
  }


  const setAllSubjects = async () => {
    console.log("in setAllSubjects ")

    const subject = await addSubject(subjects);
    console.log("subject========>")

    console.log(subject.data)

    setsubjects({ subid: '', subname: '', year: '', semester: '' })
  }




  return (
    <>
    <div  className="fl-center facultyform">
    
   <div class="container">
     <form encType="multipart/form-data" >
       <div class="row">
       
       
         <div class="input-group ">
         <input type="text" name="fid"  placeholder="Faculty Id" onChange={onChangeHandler}  required/>
        
         </div>
         <div class="input-group ">
         <input type="text" placeholder="Full Name" name="fname"  onChange={onChangeHandler} required/>
         </div>
         <button type="submit" >Submit</button>
         <button type="reset">Reset</button>
       </div>
        </form>
   </div></div>
   
              </>
   
  )

}