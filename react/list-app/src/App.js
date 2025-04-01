import './App.css';
import NameList from './namelist'

function App() {
  var numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) => {
    return (<li>{numbers * 5}</li>);
  });

  var nameList = ["Vishal", "Shweta", "Meena", "Seema"];
  const listNames = nameList.map((nameList) => {
    return (<li>{nameList}</li>)
  });

  var newNameList = ["Jason", "Joe", "Dane", "Skippy"]; 

  return (
    <div className="App">
      <h1>List App</h1>
      <hr />
      <h2>Multiply by 5</h2>
      <div class="numList">
        <ul>{listItems}</ul>
      </div>
      <hr />
      <h2>List of Names</h2>
      <div class="nameList">
        <ul>{listNames}</ul>
      </div>
      <hr />
      <h2>List of New Names</h2>
      <div class="nameList">
        <NameList item = {newNameList} />
      </div>
    </div>
  );
}

export default App;