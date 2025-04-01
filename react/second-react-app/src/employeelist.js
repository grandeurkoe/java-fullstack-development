import Employee from './employee'

function employeelist() {
    let employee = [
        {id: 101, name: "James Doe", deptname: "H.R."},
        {id: 102, name: "Dane Bane", deptname: "I.T."},
        {id: 103, name: "Slick Joe", deptname: "Marketing"}, 
    ];

    let employeeComponent = [];
    for (let emp of employee) {
        employeeComponent.push(<Employee item = {emp}/>);
    }
    return (
        <table><tr><th>Department ID</th><th>Employee Name</th><th>Department</th></tr>{employeeComponent}</table>
    );
}

export default employeelist;