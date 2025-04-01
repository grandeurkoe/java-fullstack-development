import { useState } from "react";
import { Link } from "react-router-dom";

function CreateStudent() {
    const [id, setid] = useState("");
    const [studname, setStudName] = useState("");
    const [emailid, setEmailid] = useState("");
    const [cellno, setcellno] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {id, studname, emailid, cellno}; 
        fetch("http://localhost:3000/student", {
            method: 'POST',
            headers: {'content-type': "application/JSON"},
            body: JSON.stringify(studentData)
        })
        .then((res) => {alert('Record Saved Successfully!')})
        .catch((err) => console.log(err))
    }

    return (
        <div>
           <h2>Add New Student</h2>
           <form onSubmit={handleSubmit}>
                <table>
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
                </table>
                <div>
                    <button className="btn btn-primary">Save</button>
                    <Link to="/" className="btn btn-danger">Back</Link>
                </div>
            </form> 
        </div>
    );
}

export default CreateStudent;