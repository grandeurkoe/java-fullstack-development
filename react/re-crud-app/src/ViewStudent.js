import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewStudent () {
    const {id} = useParams();
    const [studentData, setStudentData] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/student/" + id)
        .then((res) => res.json())
        .then((data) => setStudentData(data))
        .catch((err) => console.log(err))
    }, []);
    return (
        <div>
            <h2>View Student</h2>
            <hr />
            <table style={{borderStyle: "dashed"}}>
                {studentData &&
                    <tbody>
                        <tr>
                            <td>ID: </td>
                            <td>{studentData.id}</td>
                        </tr>
                        <tr>
                            <td>Student Name: </td>
                            <td>{studentData.studname}</td>
                        </tr>
                        <tr>
                            <td>Email ID: </td>
                            <td>{studentData.emailid}</td>
                        </tr>
                        <tr>
                            <td>Cell No.: </td>
                            <td>{studentData.cellno}</td>
                        </tr>
                    </tbody>
                }
            </table>
            <Link to="/" className="btn btn-danger">Back</Link>
        </div>
    );
}

export default ViewStudent;