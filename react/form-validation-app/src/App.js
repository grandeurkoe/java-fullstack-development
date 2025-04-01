import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formData, setFormData] = useState ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form submission failed due to validation errors.');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required!';
    } else if (data.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long!';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid!';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required!';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be atleast 8 characters long!';
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password does't match!";
    }
    
    return errors;
  };

  return (
    <div className="App">
      <h2>Form Validation</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='' name='username' value={formData.username} onChange={handleChange}/>
          {error.username && (
            <span className='error-message'>{error.username}</span>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' name='email' value={formData.email} onChange={handleChange}/>
          {error.email && (
            <span className='error-message'>{error.email}</span>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' name='password'value={formData.password} onChange={handleChange}/>
          {error.password && (
            <span className='error-message'>{error.password}</span>
          )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Renter Password' name='confirmPassword'value={formData.confirmPassword} onChange={handleChange}/>
          {error.confirmPassword && (
            <span className='error-message'>{error.confirmPassword}</span>
          )}
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
