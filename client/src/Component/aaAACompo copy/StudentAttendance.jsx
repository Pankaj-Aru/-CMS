import { useState } from "react";
import { getStudent, postAttendance } from "../../Api";

export default function StudentAttendance(props) {



    const [message, setMessage] = useState(false)
    const subjects = ["math", "sciendas", "electrical"];
    const sem = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];
    
    var [allStudent, setAllStudent] = useState([])
    const [attenData, setAttenData] = useState({})
    const [isSubmit, setIsSuubmit] = useState(false)
  
    // <+++++++++++++++++++++++==================================================>

    // document.getElementById('select').onclick = function() {
    //     var checkboxes = document.getElementsByName('vechicle');
    //     for (var checkbox of checkboxes) {
    //       if (checkbox.checked)
    //         document.body.append(checkbox.value + ' ');
    //     }
    //   }

    function update(e) {

        var name = e.target.name;
        var value = e.target.value;

        console.log(name);
        console.log(value);

        if(value!=="NOTSELECT"){
            setAttenData({ ...attenData, [name]: value })
        console.log("attenData>>>", attenData);
        }else{
            delete attenData[name]
        }
        
        

    }

    const showStudent = async () => {
        console.log("in showStudent>>>>>>>>>>>>>>>>>>>>")
        

        if(("sname" in attenData  && "sdept" in attenData && "ssemester" in attenData)  ){

            console.log("Dropdown select Properly");
            setMessage(false);
            
            const temp = await getStudent(attenData);
            setAllStudent(temp.data);
            setIsSuubmit(true);

        }else{
            setMessage(true);
            console.log("Dropdown Not select Properly");
        }
       
        console.log("allStudent>>>>>>>>>>>>>>>>>>>>", allStudent);
       
    }

    var allPresent = []
    const presentFun = (e) => {
        const id = e.target.id;
        if (allPresent.includes(id)) {
            const temp = allPresent;
            allPresent = temp.filter((ele) => ele !== id)
            console.log("allPresent>>>>>>", allPresent)

        } else {
            allPresent.push(e.target.id)
        }

        console.log("not present>>>>");



        console.log("allPresent>>>>", allPresent)
    }

    const setAttendance = async () => {
        const dataForBackend = { speci: "", attendance: "" };
        dataForBackend["speci"] = attenData;
        dataForBackend["attendance"] = allPresent;
        console.log("assss>>>>>")
        setAllStudent([]);
        setIsSuubmit(false);
        console.log("lenghthhhhhh>>>>>", allStudent.length);

        const respPostAttendance = await postAttendance(dataForBackend)
        console.log("assss>>>>>", dataForBackend)

        
        console.log("setAllStudent>>>>>", allStudent);



    }
    return (
        <>
            {/* <div className="getList fl-column"> */}
            <div className="form-group flex">
                <label >Select Subject </label>
                <select id="subjects" name="sname" onChange={(e) => update(e)} >
                    <option value="NOTSELECT">Select Subject</option>
                    {subjects.map((item, index) => {
                        return (
                            <>
                                <option value={item}>{item}</option>
                            </>
                        )
                    })}
                </select>

            </div>
            <div className="form-group flex">
                <label for="semster" className="col-lg-2">Select Semester </label>
                <select id="semester" name="ssemester" className="form-control"  onChange={(e) => update(e)}>
                    <option value="NOTSELECT">Select semester</option>
                    <option value="first">First</option>
                      <option value="second" >Second</option>
                      <option value="third">Third</option>
                      <option value="fourth">Fourth</option>
                      <option value="fifth">Fifth</option>
                      <option value="sixth">Sixth</option>
                      <option value="seventh">Seventh</option>
                      <option value="eighth">Eighth</option>
                </select>

            </div>
            <div className="form-group flex">
                <label>Select Department for Attendance</label>
                <select name="sdept" id="department" onChange={(e) => update(e)}  >
                    <option value="NOTSELECT">Select Department</option>
                    <option value="ele">Electrical Engineering</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="it">Information Technology </option>
                    <option value="entc">Electronics Engineering</option>

                </select>
                {message?<h4>Select All Field</h4>:""}
                <div>
                    <button type="button" className="btn btn-primary" onClick={showStudent}><i className="bi bi-cloud-download"></i>Take Attendance</button>
                </div>
                <div>
                    <button  type="button" className="btn btn-primary"onClick={setAttendance} >  <i className="bi bi-cloud-upload"></i>Submit Attendance</button>
                </div>
            </div>

            <div className="cms-table">
                <table className="table table-striped">
                    <thead className="bg-light">
                        <tr>
                            <th>Roll</th>
                            <th>Student Name</th>
                            <th>Attendance</th>
                        </tr>

                    </thead>

                    <div>
                        {/* <input type="checkbox" id="auto" name="vechicle" value="auto">
      <label for="auto">Auto</label> */}


                    </div>
                    <tbody>
                        {
                            isSubmit ?
                            isSubmit?allStudent.map((item, index) => {

                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{item.prn}</td>
                                                <td>{item.sname}</td>
                                                <td><input type="checkbox" onChange={(e) => presentFun(e)} id={item.sname} name="student" value={item.sname} /></td>
                                            </tr>
                                        </>
                                    )


                                }) : "":""
                        }


                    </tbody>
                </table>
            </div>
        </>

    )
}