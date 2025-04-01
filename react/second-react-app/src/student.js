function student(props) {
    return (
        <tr>
            <td>{props.item.rollno}</td>
            <td>{props.item.name}</td>
        </tr>
    );
}

export default student;