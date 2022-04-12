export default function AcademicTable(props) {




    return (

        <>
            <div className="viewtable">
                <table>
                    <thead>
                        <tr>
                            {props.tablehead.map((item, index) => {
                                return (
                                    <>
                                        <th>{item}</th>
                                    </>
                                )
                            }

                            )}

                        </tr>


                    </thead>
                    <tbody> <tr>
                        {props.table.map((item, index) => {

                            return (
                                < >



                                    <td key={index}>
                                        {item}
                                    </td>





                                </>
                            )
                        })}


                    </tr>

                    </tbody>

                </table>



            </div>

        </>
    )

}