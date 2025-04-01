import Student from './student'

function studentlist() {
    let student = [
        {rollno: 101, name: "Vishal Kushwaha"},
        {rollno: 102, name: "Shweta Kumari"},
        {rollno: 103, name: "Hasan Minhaj"}, 
    ];

    let studentComponent = [];
    for (let std of student) {
        studentComponent.push(<Student item = {std}/>);
    }
    return (
        <table><tr><th>Roll No.</th><th>Name</th></tr>{studentComponent}</table>
    );
}

export default studentlist;