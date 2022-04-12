
import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import App  from "../App"

const ShowAll = (props) => {


    console.log(props.allStudent.name + "<====sankdjkn");

    const wholestud=props.allStudent;
 function deleteStu(mmm){

     console.log("in Showall Delet")
     console.log(mmm);
     console.log("<====sankdjkn for delet")
     console.log(props.allStudent);

   // deletElement(mmm);
    const wholestud=props.allStudent.filter((stud)=>{
        console.log("stud.name ");
console.log(stud.name);
        return mmm!=stud.name?{...props.allStudent,stud}:null;
      });

console.log(" ");   
console.log(wholestud);
// setmyStudent([...myStudent,wholestud]);

}



    const student = wholestud.map((stu) => {
        console.log(props.allStudent.name + "<====in COMSOLE");
        return (

            <tr key={stu.name}>
                <td>{stu.name}</td>
                <td>{stu.class}</td>
                <td>{stu.email}</td>
                <td><button >Edit</button><button onClick={()=>deleteStu(stu.name)}>Delet</button></td>
            </tr>



        )

    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {student}
                </tbody>
            

            </table>

        </div>
    )

}




export default ShowAll;