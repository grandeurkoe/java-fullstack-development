function employee(props) {
    return (
        <tr>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.deptname}</td>
        </tr>
    );
}

export default employee;