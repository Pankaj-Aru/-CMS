import "../../Assets/Css/table.css"
export default function AllStudent(props) {


    // function getEle(item) {
    //     console.log(Object.values(item));


    //     Object.values(item).map((ele, ind) => {
    //         console.log(ele);
    //         return (
    //             <>
    //                 <td>
    //                     {ele}
    //                 </td>
    //             </>
    //         )

    //     })

    // }

//     return (

//         <>
//             <div className="fl-center">
//                 <table>
//                     <caption>Statement Summary</caption>
//                     <thead>
//                         <tr>
//                             <th scope="col">Account</th>
//                             <th scope="col">Due Date</th>
//                             <th scope="col">Amount</th>
//                             <th scope="col">Period</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td data-label="Account">Visa - 3412</td>
//                             <td data-label="Due Date">04/01/2016</td>
//                             <td data-label="Amount">$1,190</td>
//                             <td data-label="Period">03/01/2016 - 03/31/2016</td>
//                         </tr>

//                     </tbody>
//                     </table>
//                     </div>
//                 </>
//                 )

// }

// //////////////////////////////////////////////////////////
 return (

        <>
            <div >
                <table>
                    <thead>
                        <tr>
                            {props.tablehead.map((item, index) => {
                                                    return (
                                                        <>
                                                            <th scope="col">{item}</th>
                                                        </>
                                                    )
                                                }

                                                )}

                                            </tr>


                                        </thead>
                                        <tbody> 
                                            {props.table.map((item, index) => {
                                                return (
                                                    < >
                                                        <tr key={index}>
                                                            {
                                                                Object.values(item).map((ele, ind) => {
                                                                    return (
                                                                        <>
                                                                            <td data-label="Account">
                                                                                {ele}
                                                                            </td>
                                                                        </>
                                                                    )

                                                                })
                                                            }
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

                    /////////////////////////////////////////////////////
                    <div class="container">
                        <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
                        <ul class="responsive-table">
                            <li class="table-header">
                                <div class="col col-1">Job Id</div>
                                <div class="col col-2">Customer Name</div>
                                <div class="col col-3">Amount Due</div>
                                <div class="col col-4">Payment Status</div>
                            </li>
                            <li class="table-row">
                                <div class="col col-1" data-label="Job Id">42235</div>
                                <div class="col col-2" data-label="Customer Name">John Doe</div>
                                <div class="col col-3" data-label="Amount">$350</div>
                                <div class="col col-4" data-label="Payment Status">Pending</div>
                            </li>

                        </ul>
                    </div>