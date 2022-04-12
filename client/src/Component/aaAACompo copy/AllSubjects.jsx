import { useHistory } from "react-router-dom";
import Log from "./LoggerInfo"

export default function AllSubjects(props) {

    // function getStatus(item){
    // //  let stat=   props.Sub_status.filter(itemc=>itemc===item).length;
    // // const status=(props.Sub_status.filter(itemc=>itemc===item).length)>0?"Upload":"Not Upload";
    // // console.log(stat)
    //     return (props.Sub_status.filter(itemc=>itemc===item).length)>0?"Upload":"Not Upload";;
    // }
    const history = useHistory();

    function update(item) {
        const path = `/subject=${item}`
        history.push(path)
    }


    return (
        <>

            <div className="viewtable" >
                <table >
                    <thead>
                        <tr>
                            <th>Subject Name</th>
                            <th>Syllabus upload</th>
                          
                        </tr>
                    </thead>
                    <tbody>

                        {props.subjects.map((item, index) => {
                            console.log("");
                            {/* console.log(item); */ }
                            {/* console.log(props.Sub_status.filter(itemc=>itemc===item).length>0); */ }
                            const s_link = `#${item}`

                            return (<>
                                <tr key={index}>
                                    <td> <a href={s_link} name={item}>{item}</a>        </td>
                                    <td>{(props.Sub_status.filter(itemc => itemc === item).length) > 0 ? "Upload" : "Not Upload"}</td>
                                   
                                    {/* <td><button onClick={()=>update(item)}>Update</button></td> */}
                                </tr>
                            </>)
                        })}
                    </tbody>
                </table>

            </div>

        </>
    );
}
