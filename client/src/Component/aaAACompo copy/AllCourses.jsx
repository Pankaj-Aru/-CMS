export default function AllCourse(props) {


    return (

        <>
            <div className="viewtable">
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Sem/Year</th>
                            <th>Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        {props.courses.map((item, index) => {

                            return (
                                <>
                                    <tr key={index}>
                                        <td>
                                            {item.code}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.sem}
                                        </td>
                                        <td>
                                            <button>Edit</button>
                                            <button>Delet</button>

                                        </td>
                                    </tr>
                                </>
                            )
                        })}




                    </tbody>

                </table>



            </div>

        </>
    )

}