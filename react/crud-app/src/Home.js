import { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import Employee from "./Employee";

function Home() {
    return (
        <Fragment>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employee && Employee.length > 0 ? Employee.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.empName}</td>
                                        <td>{item.empDept}</td>
                                        <td>{item.empEmailId}</td>
                                        <td>
                                            <Button onClick={(e) => {alert(item.empId)}}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button onClick={(e) => {alert(item.empId)}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }) : "No Data Available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    );
}

export default Home;