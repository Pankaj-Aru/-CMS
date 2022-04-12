import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getOneFaculty } from "../../Api/adminApi";
// import { getAllStudent, postAttendance } from "../../Api/adminApi";
import { getAcademicOfStud, postAttendance } from "../../Api/facultyApi";
import Menu from "./menu";
import { check } from "../Validations/Utility";

export default function StudentAttendance(props) {
  const [message, setMessage] = useState(false);
  const [msgSerRespo, setMsgSerRespo] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  var [allStudent, setAllStudent] = useState([]);
  const [attenData, setAttenData] = useState({});
  const [isSubmit, setIsSuubmit] = useState(false);

  // <+++++++++++++++++++++++==================================================>

  useEffect(async () => {
    if (await check("faculty")) {
      setSubjects(
        JSON.parse(localStorage.getItem("userPersonalDetail")).allocateSubject
      );
    } else {
      localStorage.clear();
      window.href = "./";
    }
  }, []);

  function update(e) {
    if (e.target.value !== "NOTSELECT") {
      var object = subjects.filter((item) =>
        item.subID === e.target.value ? item : ""
      );
      setAttenData(object[0]);

      console.log("attenData>>>", attenData);
    } else {
      setAttenData({ set: "" });
      console.log("attenDataelsee>>>", attenData);
    }
  }

  const showStudent = async () => {
    console.log("in showStudent>>>>>>>>>>>>attenData>>>>>>>>", attenData);
    setMsgSerRespo("");
    if (attenData.sem && attenData.name && attenData.dept) {
      console.log("Dropdown select Properly");
      setMessage("");

      const temp = await getAcademicOfStud(
        `${attenData.sem}-${attenData.dept}`
      );
      setAllStudent(temp.data);
      console.log("Dropdown select temp", temp);

      setIsSuubmit(true);
    } else {
      setMessage("Select Subject");
      setAllStudent({});

      console.log("Dropdown Not select Properly");
    }

    console.log("allStudent>>>>>>>>>>>>>>>>>>>>", allStudent);
  };

  var allPresent = [];
  const presentFun = (e) => {
    const id = e.target.id;
    if (allPresent.includes(id)) {
      const temp = allPresent;
      allPresent = temp.filter((ele) => ele !== id);
      console.log("allPresent>>>>>>", allPresent);
    } else {
      allPresent.push(e.target.id);
    }

    console.log("not present>>>>");

    console.log("allPresent>>>>", allPresent);
  };

  const setAttendance = async () => {
    const dataForBackend = { speci: "", attendance: "" };
    dataForBackend["speci"] = attenData;
    dataForBackend["attendance"] = allPresent;
    console.log("assss>>>>>");
    setAllStudent([]);
    setIsSuubmit(false);
    console.log("lenghthhhhhh>>>>>", allStudent.length);

    const respPostAttendance = await postAttendance(dataForBackend);
    console.log("assss>>>>>", dataForBackend);

    if (respPostAttendance.status === 200) {
      setMsgSerRespo("Attendance Submit Successfully");
      const userPRN = JSON.parse(localStorage.getItem("userData")).PRN;

      const data = await getOneFaculty(userPRN);
      console.log("PRNNNNNN", data.data);
      localStorage.setItem("userPersonalDetail", JSON.stringify(data.data));
    }

    console.log("respPostAttendance>>>>>", respPostAttendance);
  };
  return (
    <>
      <div className="sub-heading">
        <div>Attendance</div>
      </div>
      <div className="getList fl-column">
        <h5 className="op-error">{message}</h5>

        <h5 className="op-success">{msgSerRespo}</h5>
        <div className="form-group flex">
          <label className="col-lg-2">Select Subject </label>
          <select
            id="subjects"
            name="sname"
            className="form-control"
            onChange={(e) => update(e)}
          >
            <option value="NOTSELECT">Select Subject</option>
            {subjects.map((item) => {
              return (
                <>
                  <option value={item.subID}>{item.name}</option>
                </>
              );
            })}
          </select>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={showStudent}
          >
            <i className="bi bi-cloud-download"></i>Take Attendance
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={setAttendance}
          >
            {" "}
            <i className="bi bi-cloud-upload"></i>Submit Attendance
          </button>
        </div>
      </div>

      <div className="cms-table">
        <div className="col-sm-4  btn-search ">
          <input
            type="text"
            className="form-control "
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
            placeholder="Search..."
          />
        </div>
        <table className="table table-striped">
          <thead className="bg-light">
            <tr>
              <th>Sr.No</th>
              <th>Student PRN</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {isSubmit
              ? allStudent
                  .filter((val) => {
                    if (searchItem === "") {
                      return val;
                    } else if (
                      val.sPRN.toLowerCase().includes(searchItem.toLowerCase())
                    ) {
                      return val;
                    } else if (
                      val.studentName
                        .toLowerCase()
                        .includes(searchItem.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{++index}</td>
                          <td>{item.sPRN}</td>
                          <td>{item.studentName}</td>
                          <td>
                            <input
                              type="checkbox"
                              onChange={(e) => presentFun(e)}
                              id={item.sPRN}
                              name="sPRN"
                              value={item.sPRN}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })
              : ""}{" "}
          </tbody>
        </table>
      </div>
    </>
  );
}
