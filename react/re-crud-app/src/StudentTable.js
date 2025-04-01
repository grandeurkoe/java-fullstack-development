import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";

function StudentTable () {
    const navigate = useNavigate("");
    const [studentData, setStudentData] = useState("");
    // Use Effect Hook 
    // useEffect() runs atleast once.
    // useEffect() runs everytime the state changes (data changes).
    // useEffect() runs everytime useState() runs successfully.
    // useEffect(callback, [studentData])
    // If you use [] instead of [studentData] then it will terminate after 1 run.
    useEffect(() => {
        fetch("http://localhost:3000/student")
        .then((res) => res.json())
        .then((data) => {setStudentData(data)})
        .catch((err) => {console.log(err)})
    }, 
    [])

    const DisplayStudent =  (id) => {
        navigate("/student/view/" + id);
    }

    const UpdateStudent =  (id) => {
        navigate("/student/edit/" + id);
    }

    const DeleteStudent = (id) => {
        if(window.confirm("Are you sure you want to delete this record?")) {
            fetch("http://localhost:3000/student/" + id, {
                method: 'DELETE',
            })
            .then ((res) => {
                alert("Data Deleted Successfully");
                window.location.reload();
            })
            .catch((err) => console.log(err))
        }
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Student Records</h1> 
            <hr />
            <div className="container">
                <div style={{display: "flex", justifyContent: "center", marginBottom: "10px"}}>
                    <Link to="/student/create" className="btn btn-success">Add New Student</Link>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Email ID</th>
                            <th>Phone number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData && studentData.map((items) => (
                                <tr>
                                    <td>{items.id}</td>
                                    <td>{items.studname}</td>
                                    <td>{items.emailid}</td>
                                    <td>{items.cellno}</td>
                                    <td>
                                        <a href="" className="btn btn-primary" onClick={(e) => {UpdateStudent(items.id)}}>Edit</a>&nbsp;&nbsp;
                                        <a href="" className="btn btn-info" onClick={(e) => {DisplayStudent(items.id)}}>View</a>&nbsp;&nbsp;
                                        <a href="" className="btn btn-danger"onClick={(e) => {DeleteStudent(items.id)}}>Delete</a>
                                    </td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default StudentTable;