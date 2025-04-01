import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditStudent() {
    const navigate = useNavigate("");
    const [sid, setid] = useState("");
    const [studname, setStudName] = useState("");
    const [emailid, setEmailid] = useState("");
    const [cellno, setcellno] = useState("");

    const {id} = useParams();
    const [studentData, setStudentData] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/student/" + id)
        .then((res) => res.json())
        .then((data) => {setid(data.id) 
            setStudName(data.studname)
            setEmailid(data.emailid)
            setcellno(data.cellno)
        })
        .catch((err) => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {id, studname, emailid, cellno}; 
        fetch("http://localhost:3000/student/" + studentData.id, {
            method: 'PUT',
            headers: {'content-type': "application/JSON"},
            body: JSON.stringify(studentData)
        })
        .then((res) => {alert('Record Updated Successfully!')})
        .then(() => {navigate("/")})
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>Edit Student</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <table>
                    {studentData &&
                        <tbody>
                            <tr>
                                <td><label htmlFor="id">ID: </label></td>
                                <td><input type="text" id="id" name="id" value={id} onChange= {(e) => setid(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="studentName">Name: </label></td>
                                <td><input type="text" id="studentName" name="studentName" value={studname} onChange= {(e) => setStudName(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="emailid">Email ID: </label></td>
                                <td><input type="text" id="emailid" name="emailid" value={emailid} onChange= {(e) => setEmailid(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="cellno"></label>Cell No.: </td>
                                <td><input type="text" id="cellno" name="cellno" value={cellno} onChange= {(e) => setcellno(e.target.value)}/></td>
                            </tr>
                        </tbody>
                    }
                </table>
                <div>
                    <button className="btn btn-primary">Update</button>
                    <Link to="/" className="btn btn-danger">Back</Link>
                </div>
            </form> 
        </div>
    );
}

export default EditStudent;