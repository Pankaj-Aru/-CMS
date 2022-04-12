import { useState } from "react"

export default function UpdateSubject(props) {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState({ sub: "", semester: "" });
    const [setSubject, setSetSubject] = useState(false);
    const [selectedSubjectMarks, setSelectedSubjectMarks] = useState([]);
    const [updatingStudent, setUpdatingStudent] = useState();
    const [stateStudentMarks, setStateStudentMarks] = useState([{ id: 101, name: "Mahesh", math: { first: 20, second: 30, exam: 40 }, english: { first: 7, second: 1, exam: 8 }, attendance: 88 },
    { id: 102, name: "Pravin", math: { first: 11, second: 55, exam: 89 }, english: { first: "Ab", second: 75, exam: "Ab" }, attendance: 44 }, { id: 103, name: "Rahul", math: { first: 35, second: 12, exam: 88 }, english: { first: 55, second: 75, exam: 7 }, attendance: 65 }]

    );


    const subjects = ["Math", "English", "Geomatry", "history"]

    const allSem = [1, 2, 3, 4, 5, 6, 7, 8]

    // const [editStudent, setEditStudent] = useState({ id: "", name: "", math: { first: "", second: "", exam: "" }, attendance: "" });

    const studentMarks = stateStudentMarks;
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        //For Backend
    };

    var subject = "";

    const update = async () => {
        var select = document.getElementById('subjects');
        var option = select.options[select.selectedIndex];
        var subject = option.value;
        // console.log("subject");
        // console.log(subject.toLowerCase());//it will give selected subject
        setSetSubject(true);
        setEdit(false);
        setSelectedSubject({ ...selectedSubject, sub: subject.toLowerCase() });


    }

    const updateSem = async () => {
        var select = document.getElementById('semester');
        var option = select.options[select.selectedIndex];
        var semester = option.value;
        // console.log("subject");
        console.log(semester);//it will give selected subject


        setSelectedSubject({ ...selectedSubject, semester: subject.toLowerCase() });


    }



    const getList = async () => {

        // const studList=await getStudentList(selectedSubject);
        console.log("selectedSubject>>>", selectedSubject)

    }

    //for updating marks of single Student
    function updateMarks(item) {
        console.log("in UpdateMArks")
        // console.log(item)
        setEdit(true);
        console.log("udatingStudent")
        // setUpdatingStudent(item);
        // console.log(updatingStudent)
        // setUpdatingStudent();
        setUpdatingStudent(item);
        setSelectedSubjectMarks(getMarks(item));
        console.log(selectedSubjectMarks)



    }
    function markChangeHandler(e) {
        console.log("in markChangeHandler")

        var value = e.target.value;
        var name = e.target.name;
        console.log(value)
        console.log(name)
        console.log(selectedSubjectMarks)

        setSelectedSubjectMarks({ ...selectedSubjectMarks, [name]: value })

        return ""
    }






    function updateMarksDone(item) {

        console.log("in UpdateMArksDone")
        // var student=getStudent(updatingStudent);
        // setUpdatingStudent()
        //    var sub=selectedSubject;
        //    console.log(data) ;  
        //    console.log("in UpdateMArksDone")
        updatingStudent[`${selectedSubject}`] = selectedSubjectMarks;

        // delete updatingStudent[`${selectedSubject}`] ;
        //    var data=selectedSubjectMarks;

        //         setUpdatingStudent({...updatingStudent,data})
        //    console.log(updatingStudent) ;   

        console.log(updatingStudent);

        setEdit(false);
    }

    //     function editSubject(item) {
    //         console.log(item)
    //  setEdit(true);
    //     }
    //     function doneEdit(item) {


    //     }


    // function getStudent(item) {

    //     for (const keys of Object.keys(item)) {

    //         if (keys != selectedSubject) {
    //             console.log(item.id);

    //             var data=keys;
    //             console.log("in getStudent");

    //             console.log(data);
    //             setUpdatingStudent({...updatingStudent,data})

    //         }

    //     }


    // }


    // For Getting the marks of Selected subject
    function getMarks(item) {

        for (const keys of Object.keys(item)) {

            if (keys === selectedSubject) {
                // console.log("keys");
                // console.log(item[keys]);
                // console.log(Object.values(item[keys]));
                // setSelectedSubjectMarks([]);

                //  setSelectedSubjectMarks(arr);
                // console.log(arr);
                // return Object.values(item[keys]);
                return item[keys];

            }

        }


    }


    return (

        <>
            <div className="getList fl-column">
                <div className="form-group flex">
                    <label  for="semster" className="col-lg-2" >Select Subject for Update</label>
                    <select  className="form-control" id="subjects" name="subjects" onChange={update}>
                        <option value="Select Subject">Select Subject</option>
                        {subjects.map((item, index) => {
                            return (
                                <>
                                    <option value={item}>{item}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div>
                <div className="form-group flex">
                    <label  for="semster" className="col-lg-2">Select Semester for Update</label>
                    <select id="semester" className="form-control" name="semester" onChange={updateSem}>
                        <option value="Select Subject">Select Subject</option>
                        {allSem.map((item, index) => {
                            return (
                                <>
                                    <option value={item}>{item}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                </div>
              

                <div className="container row-cols-5 fl-row">
                    <button type="button" className="btn btn-primary" onClick={getList}><i className="bi bi-cloud-download"></i> <span>Get List</span></button>
                    <button type="button" className="btn btn-primary">
                        <i className="bi bi-cloud-upload"></i> Submit
                    </button>
                </div>
            </div>

            <div className="updatemarks cms-table">
                <table  className="table table_striped">
                    <thead className="bg-light">
                        <th>Name</th>
                        <th>1st Test</th>
                        <th>2nd Test</th>
                        <th>Exam</th>
                        <th>Attendence</th>
                        <th>Update</th>
                    </thead>
                    <tbody>{

                        edit ? <tr>
                            <td><input type="text" name="name" value={updatingStudent.name} onChange={markChangeHandler} disabled />    </td>
                            <td><input type="text" name="first" value={selectedSubjectMarks.first} onChange={markChangeHandler} />     </td>
                            <td><input type="text" name="second" value={selectedSubjectMarks.second} onChange={markChangeHandler} />     </td>
                            <td><input type="text" name="exam" value={selectedSubjectMarks.exam} onChange={markChangeHandler} />     </td>
                            <td> Disabled</td>




                            <td><button onClick={updateMarksDone}>Done</button></td>

                        </tr> : ""}
                        {setSubject ? studentMarks.map((item, index) => {
                            {/* console.log("in MAp") */ }
                            const arr = getMarks(item);
                            {/* console.log(arr); */ }
                            {/* console.log("in MAp") */ }


                            {/* console.log("arr") */ }

                            {/* console.log(arr[0]) */ }
                            {/* for(const keys of Object.keys(item)){

                                if(keys===selectedSubject){
                                    console.log("keys");
                                    console.log(Object.values(item[keys]));

                                }
                            
                          } */}
                            {/* console.log("getObj") */ }

                            {/* console.log(getObj) */ }
                            return (
                                <>
                                    <tr key={index} >
                                        <td>{item.name}     </td>
                                        <td>{arr.first}</td>
                                        <td>{arr.second}</td>
                                        <td>{arr.exam}</td>
                                        <td>{item.attendance}</td>
                                        <td><button onClick={() => updateMarks(item)} >Edit</button></td>

                                    </tr>


                                </>
                            )
                        }) : ""}

                        {/* {ppp.map((data)=>console.log(data))} */}
                    </tbody>
                </table>
            </div>



        </>

    )

}