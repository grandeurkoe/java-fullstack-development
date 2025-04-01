import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewStudent from './ViewStudent';
import EditStudent from './EditStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={StudentTable}/>
          <Route path='/student/create' Component={CreateStudent}/>
          <Route path='/student/view/:id' Component={ViewStudent} />
          <Route path="/student/edit/:id" Component={EditStudent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
