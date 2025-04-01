import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import StudentList from './studentlist';
import EmployeeList from './employeelist';


function App() {
  return (
    <div class="myApp">
      <Welcome name="Vishal Kushwaha" />
      <div class = "appBody">
        <div class = "myStudents">
          <h2>Student List</h2>
          <StudentList />
        </div>
        <div class = "myEmployees">
          <h2>Employee List</h2>
          <EmployeeList />
        </div>
      </div>
    </div>
  );
}

export default App;
