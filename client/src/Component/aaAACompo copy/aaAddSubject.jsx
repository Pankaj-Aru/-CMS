import { useState } from "react"
import { addSubject } from "../../Api.js";

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


      <div className="add-course">
   
        {/* <span>Subject Id :</span> */}

        <input type="text" name="subid" onChange={onChangeHandler} value={subjects.subid} required />

      {/* <br/>  <span>Subject Name :</span> */}

        <input type="text" name="subname" onChange={onChangeHandler} value={subjects.subname} required />

      {/* <br/>  <span>Subject Department :</span> */}

        <input type="text" name="subdept" onChange={onChangeHandler} value={subjects.subdept} required />

      {/* <br/>  <span>Subject Year :</span> */}

        <input type="text" name="year" onChange={onChangeHandler} value={subjects.year} required />

      {/* <br/>  <span>Subject Semester :</span> */}

        <input type="text" name="semester" onChange={onChangeHandler} value={subjects.semester} required />


        <div>
          <button type="submit" className="btn" onClick={setAllSubjects}>Submit button </button>

          <button type="reset" className="btn">reset </button>
        </div>
      </div>

    </>
  )

}