import React, { useState, useEffect } from 'react';
import { NavDropdown, Container, Alert, Table } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Order() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ user_name: '' });
  const [apiResponse, setApiResponse] = useState(null);
  const [car, setCar] = useState(null);

  const location = useLocation();
  const carId = new URLSearchParams(location.search).get('carid');
  const carParam = new URLSearchParams(location.search).get('car');

  useEffect(() => {
    console.log('Car ID in useEffect:', carId);
    console.log('Car Param in useEffect:', carParam);

    if (!carParam) {
      console.error('No car information provided.');
      return;
    }

    const parsedCar = JSON.parse(carParam);
    setCar(parsedCar);
    console.log('Car ID:', parsedCar.id);
    console.log('Car Make:', parsedCar.make);
    console.log('Car Model:', parsedCar.model);
    console.log('Car Model:', parsedCar.type);
  }, [carId, carParam]);

  useEffect(() => {
    console.log('User Effect:', user.user_name);

    const storedUser = localStorage.getItem('user-info');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser && parsedUser.user) {
        setUser({ user_name: parsedUser.user.user_name });
      } else {
        console.error('User data is incomplete or incorrect.');
      }
    }
  }, []);

  useEffect(() => {
    

    const saveUserDetails = async () => {
      try {
        const item = { username: user.user_name };
        const result = await fetch('http://localhost:8000/api/getdetails', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });

        if (!result.ok) {
          console.error('API request failed:', result.status, result.statusText);
          return;
        }

        const data = await result.json();
        setApiResponse(data);
      } catch (error) {
        console.error('Error during API call:', error);
      }
    };

    // Call the function
    saveUserDetails();
  }, [user.user_name]);

  ///////////
  console.log('user api:', apiResponse?.user?.id);
  console.log('id sa car',car && car.id)

  function showAlert(message, type) {
    // Create a div element for the notification
    const notification = document.createElement('div');

    // Add styles to the notification
    notification.style.position = 'fixed';
    notification.style.top = '0';
    notification.style.width = '50%';
    notification.style.padding = '10px';
    notification.style.textAlign = 'center';
    notification.style.fontWeight = 'bold';
    notification.style.marginTop = '100px';
    notification.style.marginLeft = '400px';

    // Apply styles based on the notification type
    if (type === 'success') {
        notification.style.backgroundColor = '#FFD700';
        notification.style.color = '#fff';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = '#fff';
    }

    // Set the notification message
    notification.innerText = message;

    // Append the notification to the document body
    document.body.appendChild(notification);

    // Remove the notification after 3000 milliseconds (3 seconds)
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
  
  

  const order = async () => {
    try {
      const receiptData = { userId: apiResponse?.user?.id, carId: car && car.id };
      const receiptResult = await fetch('http://localhost:8000/api/receipt', {
        method: 'POST',
        body: JSON.stringify(receiptData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!receiptResult.ok) {
        console.error('API receipt request failed:', receiptResult.status, receiptResult.statusText);
        return;
      }

      const receiptResponse = await receiptResult.json();
      console.log('Receipt API Response:', receiptResponse);
      alert("Order in process, A call will be made for Confirmation", "success");
      showAlert("thank you for Trusting our service", "success");
      navigate('/Shop');
    } catch (error) {
      console.error('Error during receipt API call:', error);
      showAlert("An Error Occured during Transactions, Please try Again Later", "error");
    }
  };

  return (
    <div className='Homeback' style={{ paddingTop: '157px', marginRight: '5px', paddingBottom: '157px', marginLeft: '5px' }}   variant="success">
      <Container style={{ marginTop: '172px, 100px, 172px, 100px'}}>
        <h1>Confirm Purchase</h1>
        <Table striped="lg">
        <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{car && car.make}</td>
          <td>{car && car.model}</td>
          <td>{car && car.type}</td>
        </tr>
      </tbody>

        </Table>
        <hr />

        {apiResponse && apiResponse.user && (
          <Alert variant="success">
            <p>{apiResponse.message}</p>
            <Table striped >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Zip</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
        <tr>
          
          <td>{apiResponse.user.firstname}</td>
          <td>{apiResponse.user.lastname}</td>
          <td>{apiResponse.user.country}</td>
          <td>{apiResponse.user.province}</td>
          <td>{apiResponse.user.city}</td>
          <td>{apiResponse.user.zip}</td>
          <td>{apiResponse.user.ph_number}</td>

        </tr>
        </tbody>
            </Table>
          </Alert>
        )}

        <NavDropdown.Item as={Link} onClick={order} variant="primary">
          Order
        </NavDropdown.Item>
      </Container>
    </div>
  );
}

export default Order;
