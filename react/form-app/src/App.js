import './App.css';
import { useState } from 'react';

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('male');
  const [selectedOption, setSelectedOption] = useState('');

  const handleReset = () => {
    // Reset all state variables here.
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');
    setGender('male');
    setSelectedOption('');
  }

  const handleSubmit = (e) => {
    //To prevent the default form submission behavior when the form is submitted. 
    //You can do this by calling e.preventDefault() in the handleSubmit function.
    e.preventDefault();
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(gender);
    console.log(selectedOption);
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <form>
        <fieldset>
          <legend><h2>Personal Information:</h2></legend>
          <table>
            <tr>
              <td>
                <label>First name*</label>
              </td>
              <td class="inputField">
                <input type="text" id="fname" name="fname" value={firstname} onChange={(e) => {setFirstname(e.target.value)}} required></input><br></br>              
              </td>
            </tr>
            <tr>
              <td>
               <label>Last name*</label> 
              </td>
              <td class="inputField">
                <input type="text" id="lname" name="lname" value={lastname} onChange={(e) => {setLastname(e.target.value)}} required></input><br></br>                
              </td>
            </tr>
            <tr>
              <td>
                <label>Email*</label>
              </td>
              <td class="inputField" style={{marginLeft:"35px"}}>
                <input type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required></input><br></br>            
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone*</label>
              </td>
              <td class="inputField" style={{marginLeft:"30px"}}>
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} required></input><br></br>
              </td>
            </tr>
            <tr>              
              <td>
                <label>Gender*</label>
              </td>
              <td id="genderField">
                <input type='radio' value='male' checked={gender==="male"} onChange={(e) => {setGender(e.target.value)}}/>Male
                <input type='radio' value='female' checked={gender==="female"} onChange={(e) => {setGender(e.target.value)}}/>Female
              </td>
            </tr>
            <tr style={{gap: '35px'}}>
              <td>
                <label>Select Your Choice</label>
              </td>
              <td>
                <select value={selectedOption} onChange={(e) => {setSelectedOption(e.target.value)}}>
                  <option value="" selected={selectedOption===""}>
                    Select Your Answer
                  </option>
                  <optgroup label='Beginner'>
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">JavaScript</option>
                  </optgroup>
                  <optgroup label='Advance'>
                    <option value="4">ReactJS</option>
                    <option value="5">NodeJS</option>
                    <option value="6">ExpressJS</option>
                  </optgroup>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <button type='reset' value='reset' onClick={() => {handleReset()}}>Reset</button>
              </td>
              <td>
                <button type='submit' value='submit' onClick={(e) => {handleSubmit(e)}}>Submit</button>
              </td>
            </tr>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
