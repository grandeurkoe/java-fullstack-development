function namelist(props) {
    var fetchList = props.item;
    const newlistNames = fetchList.map((fetchList) => {
      return (<li>{fetchList}</li>)
    });
    return (
        <ul>{newlistNames}</ul>
    );
}

export default namelist;