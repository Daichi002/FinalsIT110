import React, { useState, useEffect } from 'react';
import { Form, Button, NavDropdown, Navbar, Nav, Container, Modal, Col, InputGroup, Row, Alert, Table } from 'react-bootstrap';
import { showAlert } from './helper';
import { useLocation } from 'react-router-dom';
import './update.css';

function Updatedetails() {
  const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [username, setUsername] = useState('');
const [country, setCountry] = useState('');
const [city, setCity] = useState('');
const [province, setProvince] = useState('');
const [zip, setZip] = useState('');
const [number, setNumber] = useState('');

const [user, setUser] = useState({
  firstname: '',
  lastname: '',
  user_name: '',
  country: '',
  city: '',
  province: '',
  zip: '',
  number: ''
});


console.log('animgal nga user', user)

  const location = useLocation();
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const userId = new URLSearchParams(location.search).get('selectedUserId');
    setSelectedUserId(userId);
  }, [location.search]);

  useEffect(() => {
    const getUpdateDetails = async () => {
      try {
        if (!selectedUserId) {
          return;
        }
  
        console.log('to update sa yawa', selectedUserId);
  
        const result = await fetch('http://localhost:8000/api/geteditDetails', {
          method: 'POST',
          body: JSON.stringify({ selectedUserId }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
  
        if (!result.ok) {
          console.error('API call failed:', result.status, result.statusText);
          showAlert("Failed to fetch user details", "error");
          return;
        }
  
        const responseData = await result.json();
        console.log('getupdate', responseData);
  
        setUser(responseData.user); // Update user state with the received data
  
      } catch (error) {
        console.error('Error during API call:', error);
        showAlert("An error occurred during the update operation. Please try again later", "error");
      }
    };
  
    getUpdateDetails(); // Call the function when the component mounts and whenever selectedUserId changes
  
  }, [selectedUserId]);

  //update details

  console.log('mao ni ang update nga user', user)

  const updateUserDetails = async () => {
    try {
      

        const { id, username, ...userData } = user;
        const response = await fetch(`http://localhost:8000/api/updateUserDetails/${id}/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        console.log('mao ni ang update nga userData', userData)
        if (!response.ok) {
            throw new Error('Failed to update user details');
        }

        const updatedUserData = await response.json();
        setUser(updatedUserData);
        showAlert('User details updated successfully', 'success');
        window.location.href = '/home';
    } catch (error) {
        console.error('Error updating user details:', error);
        showAlert('Failed to update user details. Please try again later.', 'error');
    }
};

  

  return (
    
<div className='upcontainer updatewrap'>
<table className="table">
  <tbody>
    {/* First Row: First Name, Last Name, Username */}
    <tr>
      {/* First Name */}
      <td>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="firstname"
          name="firstname"
          value={user.firstname || ''}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
        />
      </td>
      {/* Last Name */}
      <td>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="lastname"
          name="lastname"
          value={user.lastname || ''}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        />
      </td>
      {/* Username */}
      <td>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={user.username || ''}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          readOnly
        />
      </td>
   

    {/* Second Row: Country, City, Province, Zip, Phone Number */}
   
      {/* Country */}
      <td>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="country"
          name="country"
          value={user.country || ''}
          onChange={(e) => setUser({ ...user, country: e.target.value })}
        />
      </td>
      {/* City */}
 </tr>
       <tr>
      <td>
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="city"
          name="city"
          value={user.city || ''}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
      </td>
      {/* Province */}
      <td>
        <label htmlFor="province">Province</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="province"
          name="province"
          value={user.province || ''}
          onChange={(e) => setUser({ ...user, province: e.target.value })}
        />
      </td>
      {/* Zip */}
      <td>
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="zip"
          name="zip"
          value={user.zip || ''}
          onChange={(e) => setUser({ ...user, zip: e.target.value })}
        />
      </td>
      {/* Phone Number */}
      <td>
        <label htmlFor="number">Phone number</label>
        <input
          type="text"
          className="form-control fixed-width"
          id="number"
          name="number"
          value={user.ph_number || ''}
          onChange={(e) => setUser({ ...user, ph_number: e.target.value })}
        />
      </td>
    </tr>
  </tbody>
<button onClick={updateUserDetails} style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
  Update Details
</button>

</table>





    </div>
  );
}

export default Updatedetails;
