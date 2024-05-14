import React, { useState, useEffect } from 'react';
import { Form, Button, NavDropdown, Navbar, Nav, Container, Modal, Col, InputGroup, Row, Alert, Table } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoicon from './Component/LUXE.png';
import './Home.css';
//import './Header.css'; 


function Home() {

                  const location = useLocation();             
                  const navigate = useNavigate();
                  const [user, setUser] = useState({ user_name: '' });
                  const [modalShow, setModalShow] = React.useState(false);
                  const [username, setUsername] = useState('')
                  const [user_name, setUser_name] = useState('')
                  const [receiptlog, setReceiptlog] = useState(false);
                  const [searchTerm, setSearchTerm] = useState('');


                  //to display logged usernames
                  useEffect(() => {
                    const storedUser = localStorage.getItem("user-info");
                    if (storedUser) {
                      const parsedUser = JSON.parse(storedUser);
                      // Check if parsedUser is not null and has the 'user_name' property
                      if (parsedUser && parsedUser.user) {
                        console.log('User set:', parsedUser);
                        setUser({ user_name: parsedUser.user.user_name });
                        console.log('User set:', parsedUser);
                      } else {
                        console.error('User data is incomplete or incorrect.');
                        console.log('User set:', user);
                      }
                    }
                  }, [location.pathname]);


                  
                
                  const shouldShowNavbar = location.pathname !== '/Logr';             
                    if (!shouldShowNavbar) {
                      return null;
                    }

                  const handleLogout = () => {
                    // Clear user information from local storage on logout
                    localStorage.removeItem("user-info");
                    setUser(null);
                    // Redirect to the login page after logout
                    navigate("/Logr");
                  }; 
                  
                  //modal
                  

                  const MyVerticallyCenteredModal = React.memo((props) => {   
                    
                    const [firstname, setFirstname] = useState('');
                    const [lastname, setLastname] = useState('');
                    const [username, setUsername] = useState('');
                    const [country, setCountry] = useState('');
                    const [city, setCity] = useState('');
                    const [province, setProvince] = useState('');
                    const [zip, setZip] = useState('');
                    const [number, setNumber] = useState('');
                    const [validated, setValidated] = useState(false);
                    //2nd lvl modal
                    const [show, setShow] = useState(false);
                    const handleClose = () => setShow(false);
                    const handleShow = () => setShow(true);
                    const [showEditModal, setShowEditModal] = useState(false); 
                    const [modalactive, setModalactive] = React.useState(false);
                    
                    //2nd modal end here
                    const [showModal, setShowModal] = useState(false);


                    const { onHide, ...otherProps } = props;

                    
                    useEffect(() => {
                      const storedUser = localStorage.getItem("user-info");
                      if (storedUser) {
                        const parsedData = JSON.parse(storedUser);
                        const parsedUser = parsedData.user; // Access the "user" property
                        setUsername( parsedUser.user_name );
                        console.log('User set:', parsedUser);
                      }
                    }, []);

                    
                 
                      const handleSaveChanges = async (event) => {
                        const form = event.currentTarget;

                        if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                        }
                    
                        setValidated(true);

                        if (
                          firstname.trim() === '' ||
                          lastname.trim() === '' ||
                          username.trim() === '' ||
                          country.trim() === '' ||
                          city.trim() === '' ||
                          province.trim() === '' ||
                          zip.trim() === '' ||
                          number.trim() === ''
                        ) {
                          // Handle the case where some fields are empty (e.g., show an error message)
                          console.error('Please fill in all required fields.');  
                          showAlert('Please fill in all required fields.', "info");                   
                          return;
                        }

                        try {
                          const item = { firstname, lastname, username, country, city, province, zip, number };
                          console.warn(item);
                          console.log(item);
                    
                          const result = await fetch("http://localhost:8000/api/details", {
                            method: 'POST',
                            body: JSON.stringify(item),
                            headers: {
                              "Content-Type": 'application/json',
                              "Accept": 'application/json'
                            }
                          });
                        
                    
                          if (!result.ok) {
                            // Handle non-successful response (e.g., show an error message)
                            console.error('API request failed:', result.status, result.statusText);
                            showAlert('The maximum of 5 User details have been Reach', 'error');
                            return;
                          }
                          
                          const data = await result.json();
                          console.log('API request successful:', data);
                          showAlert('User details save successful', 'success');
                          
                          setShowModal(false);
                          
                    
                          // Reload the page or update the state as needed
                          // Or use state to trigger a re-render
                          // setSomeStateUpdated(true);
                        } catch (error) {
                          console.error('Error during API call:', error);
                          // Handle the error (e.g., show an error message to the user)
                        }
                      };

                      

                      //get details api -----                 

                      function Editmodal(props) {
                        const [apiResponse, setApiResponse] = useState(null);                       
                        const [selectedUserId, setSelectedUserId] = useState(null);
                        const [users, setUsers] = useState([]);                      
                      
                        useEffect(() => {
                          const saveUserDetails = async () => {
                            try {
                              const item = { username: user.user_name };
                              const result = await fetch('http://localhost:8000/api/isused', {
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
                              console.log('userdata', data);
                            } catch (error) {
                              console.error('Error during API call:', error);
                            }
                          };
                      
                          // Call the function
                          saveUserDetails();
                        }, [user.user_name]);
                      
                        const handleUserSelection = (selectedId) => {
                          setSelectedUserId(selectedId);
                          console.log('mao ni iya gina pasa',selectedId)
                        };

                        //update api---

                  

                        
                      
                        //delete api----
                        const deletedetails = async () => {
                          // Display a confirmation dialog
                          const userConfirmed = window.confirm('Do you wish to delete details?');
                        
                          // Check user's response
                          if (userConfirmed) {
                            try {
                              // Ensure you have the selectedUserId before proceeding
                              if (!selectedUserId) {
                                showAlert("User ID not available for delete operation", "error");
                                return;
                              }
                        
                              console.log('to delete', selectedUserId);
                        
                              const deleteResult = await fetch('http://localhost:8000/api/deleteuser', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  Accept: 'application/json',
                                },
                                body: JSON.stringify({ selectedUserId }),
                              });
                        
                              if (!deleteResult.ok) {
                                console.error('API delete request failed:', deleteResult.status, deleteResult.statusText);
                                return;
                              }
                        
                              const deleteResponse = await deleteResult.json();
                              console.log('Delete API Response:', deleteResponse);
                              showAlert(deleteResponse, "success");
                              //closeModal();
                              onHide(Editmodal(props))
                              // Reopen the modal or trigger a refresh
                              //openModal();
                              //refreshModalContent(Editmodal);
                              //props.onHide
                            } catch (error) {
                              console.error('Error during delete API call:', error);
                              //showAlert("An error occurred during the delete operation. Please try again later", "error");
                              showAlert('User details deleted successfully', "success");
                            }
                          } else {
                            // User clicked 'Cancel' or closed the dialog
                            showAlert("Delete operation canceled", "info");
                          }
                        };
                        

                        

                        //active api
                        const activedetails = async () => {
                          try {
                            // Ensure you have the selectedUserId before proceeding
                            if (!selectedUserId) {
                              showAlert("User ID not available for delete operation", "error");
                              return;
                            }
                      
                            console.log('to activate', selectedUserId);
                      
                            const activeResult = await fetch('http://localhost:8000/api/active', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json',
                              },
                              body: JSON.stringify({ selectedUserId }),
                            });
                      
                            if (!activeResult.ok) {
                              console.error('API activation request failed:', activeResult.status, activeResult.statusText);
                              return;
                            }
                      
                            const activeResponse = await activeResult.json();
                            console.log('activate API Response:', activeResponse);
                            
                            //closeModal();
                            onHide(Editmodal(props))
                            // Reopen the modal or trigger a refresh
                            //openModal();
                            //refreshModalContent(Editmodal);
                            //props.onHide
                          } catch (error) {
                            console.error('Error during active API call:', error);
                            //showAlert("An error occurred during the delete operation. Please try again later", "error");
                            showAlert("User details Is now Active", "success");
                          }
                        };

                        //to handle the update of userdetails
                        const handleUserEdit = (field, value) => {
                        
                          // Update the user details based on the field being edited
                          setUsers((prevUsers) => {
                            const updatedUsers = prevUsers.map((user) => {
                              if (user.id === selectedUserId) {
                                return { ...user, [field]: value };
                              }
                              return user;
                            });
                            return updatedUsers;
                          });
                        };
                        

                        //update api
                       
                    
                          const navigate = useNavigate();
                          
                          const handleEditDetails = () => {   
                            console.log("this the update", selectedUserId) 
                            onHide();                                         
                            navigate(`/updatedetails?selectedUserId=${selectedUserId}`);                      
                          };

                        


                        // Function to render user details
                        const renderUserDetails = (user) => (
                          <>
                            {['radio'].map((type) => (
                          <div key={type} className="mb-3">
                            <Form.Check
                              type={type}
                              id={`check-api-${type}`}
                              checked={selectedUserId === user.id}
                              onChange={() => handleUserSelection(user.id)}                             
                            >                                                        
                            </Form.Check>
                          </div>
                        ))} 
                        <Table striped>
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
                           
                <td>
                              <Col>
                                
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.firstname}
                                    onChange={(e) => handleUserEdit('firstname', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.firstname}</span>
                                )}
                              </Col>
                              </td>
                              <td>
                              <Col>
                               
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.lastname}
                                    onChange={(e) => handleUserEdit('lastname', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.lastname}</span>
                                )}
                              </Col>
                              </td>
                              <td>
                              <Col>
                               
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.country}
                                    onChange={(e) => handleUserEdit('country', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.country}</span>
                                )}
                              </Col>
                           </td>
                              <td>
                        
                              <Col>
                              
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.province}
                                    onChange={(e) => handleUserEdit('province', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.province}</span>
                                )}
                              </Col>
                              </td>
                              <td>
                              <Col>
                              
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.city}
                                    onChange={(e) => handleUserEdit('city', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.city}</span>
                                )}
                              </Col>
                              </td>
                              <td>
                              <Col>
                              
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.zip}
                                    onChange={(e) => handleUserEdit('zip', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.zip}</span>
                                )}
                              </Col>
                              </td>
                              <td>
                              <Col>
                               
                                {user.isEditing ? (
                                  <input
                                    type="text"
                                    value={user.ph_number}
                                    onChange={(e) => handleUserEdit('ph_number', e.target.value)}
                                  />
                                ) : (
                                  <span>{user.ph_number}</span>
                                )}
                              </Col>
                              </td>
                          
                            </tbody>
                            </Table>
                          </>
                        );

                        const [activeResponse, setActiveResponse] = useState(null);

                        ///////////////////////


                        useEffect(() => {    
                          const activeUserDetails = async () => {
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
                              setActiveResponse(data);
                            } catch (error) {
                              console.error('Error during API call:', error);
                            }
                          };
                      
                          // Call the function
                          activeUserDetails();
                        }, [user.user_name]);
                      
                        return (
                          <Modal {...props}size="lg" aria-labelledby="contained-modal-title-vcenter">
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              User details

                              
                            </Modal.Title>
                            
                          </Modal.Header>
                          <Modal.Body className="grid-example">
                          <Container>  
                            <h4>Active Details</h4>                                     
                                      {activeResponse && activeResponse.user && (
          <Alert variant="success">
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
          
          <td>{activeResponse.user.firstname}</td>
          <td>{activeResponse.user.lastname}</td>
          <td>{activeResponse.user.country}</td>
          <td>{activeResponse.user.province}</td>
          <td>{activeResponse.user.city}</td>
          <td>{activeResponse.user.zip}</td>
          <td>{activeResponse.user.ph_number}</td>

        </tr>
        </tbody>
            </Table>
          </Alert>
        )} 
                             
                            <hr/><hr/>
                            <h4>Edit Details</h4>
                              {apiResponse && apiResponse.users && (
                                <Row>
                                  {Array.isArray(apiResponse.users) ? (
                                    apiResponse.users.map((user, index) => (
                                      <Col key={index} xs={12} md={14}>
                                        <Alert variant="success">
                                          {renderUserDetails(user)}
                                        </Alert>
                                      </Col>
                                    ))
                                  ) : (
                                    Object.values(apiResponse.users).map((user, index) => (
                                      <Col key={index} xs={12} md={14}>
                                        <Alert variant="success">
                                          {renderUserDetails(user)}
                                        </Alert>
                                      </Col>
                                    ))
                                  )}
                                </Row>
                              )}
                            </Container>

                            </Modal.Body>
                            <Modal.Footer>
                              <button onClick={deletedetails}>Delete Details</button>
                              <button onClick={activedetails}>Activate Details</button>
                              <button onClick={handleEditDetails} variant="primary">Edit Details</button>           
                            </Modal.Footer>
                          </Modal>
                              );
                               }
                               
                      return (
                        <Modal
                          {...props}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered

                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              Userdetails
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>

                          <Form noValidate validated={validated} onSubmit={handleSaveChanges}>
                                  {/* First Row: Personal Information */}
                                  
                                  <Row className="mb-3">
                                    {/* First Name Field */}
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                      <Form.Label>First name</Form.Label>
                                      <Form.Control
                                        name="firstname" value={firstname}onChange={(e) => setFirstname(e.target.value)} required
                                      />
                                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Last Name Field */}
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                      <Form.Label>Last name</Form.Label>
                                      <Form.Control
                                      name="firstname" value={lastname} onChange={(e) => setLastname(e.target.value)} required
                                      />
                                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Username Field */}
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                          <Form.Control
                                            value={user && user.user_name}
                                            onChange={(e) => setUsername(e.target.value)} 
                                            readOnly
                                          />                                
                                          <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                          </Form.Control.Feedback>
                                        </InputGroup>
                                      </Form.Group>
                                  </Row>

                                  {/* Second Row: Address Information */}
                                  <Row className="mb-3">
                                    {/* Country Field */}
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                      <Form.Label>Country</Form.Label>
                                      <Form.Control type="text" name="Country" value={country}onChange={(e) => setCountry(e.target.value)} required />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a valid Country.
                                      </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* City Field */}
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                      <Form.Label>City</Form.Label>
                                      <Form.Control type="text" name="city" value={city}onChange={(e) => setCity(e.target.value)} required />
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a valid City.
                                      </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Province (State) Field */}
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                      <Form.Label>Province</Form.Label>
                                      <Form.Control type="text" name="province" value={province}onChange={(e) => setProvince(e.target.value)} required/>
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a valid Province.
                                      </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Zip Field */}
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                      <Form.Label>Zip</Form.Label>
                                      <Form.Control type="text" name="zip" value={zip}onChange={(e) => setZip(e.target.value)} required/>
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                      </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Phone Number Field */}
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                      <Form.Label>Phone number</Form.Label>
                                      <Form.Control type="text" name="number" value={number}onChange={(e) => setNumber(e.target.value)} required/>
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a valid mobile number.
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </Row>

                                  {/* Agreement Checkbox 
                                  <Form.Group className="mb-3">
                                    <Form.Check
                                      required
                                      label="Agree to terms and conditions"
                                      feedback="You must agree before submitting."
                                      feedbackType="invalid"
                                    />
                                  </Form.Group>*/}
                                </Form>


                          </Modal.Body>
                          <Modal.Footer>                       

                                   <button variant="primary" onClick={() => setShowEditModal(true)}>
                                        View Details
                                       </button>
                                  {showEditModal && <Editmodal show={modalShow} onHide={() => setShowEditModal(false)} />}

                                  <button type="submit" onClick={handleSaveChanges}>
                                    Save Details
                                  </button>
                          </Modal.Footer>
                        </Modal>                
                      );
                                    
                    });




                    function MydModalWithGrid(props) {

                      const [receiptResponse, setReceiptResponse] = useState(null);

                      useEffect(() => {
                        const saveUserDetails = async () => {
                          try {
                            console.log({username: user.user_name });
                            const item = { username: user.user_name };
                            const result = await fetch('http://localhost:8000/api/receiptlog', {
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
                            setReceiptResponse(data);
                            console.log("this the receiptlog", data)                       
                          } catch (error) {
                            console.error('Error during API call:', error);
                          }
                        };
                      
                        // Call the function
                        saveUserDetails();
                      }, [user.user_name]);
                      


                      return (
                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              Transactions
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="grid-example">
                            <Container>                           
                            <Row>
                                  {receiptResponse && receiptResponse.length > 0 && 
                                    receiptResponse.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((item, index) => (
                                      <Col key={index} xs={12} md={15}>
                                        <Alert variant="success">
                                          <Row>Model: {item.model}</Row>
                                          <Row>User: {item.username}</Row>
                                          <Row>Buyer: {item.firstname}</Row>
                                          <Row>Transaction Date: {item.receipt_create}</Row>
                                        </Alert>
                                      </Col>
                                    ))
                                  }
                                </Row>
                            </Container>
                          </Modal.Body>
                          <Modal.Footer>
                            <button onClick={props.onHide}>Close</button>
                          </Modal.Footer>
                        </Modal>
                      );
                    }   
                    
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
                      notification.style.zIndex  = '100000';
                  
                      // Apply styles based on the notification type
                      if (type === 'success') {
                          notification.style.backgroundColor = '#4CAF50';
                          notification.style.color = '#fff';
                      } else if (type === 'error') {
                          notification.style.backgroundColor = '#f44336';
                          notification.style.color = '#fff';
                      }else if (type === 'info') {
                        notification.style.backgroundColor = '#FFD700';
                        notification.style.color = '#3498db';
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

                    const handleSearchChange = (e) => {
                      setSearchTerm(e.target.value);
                    };
                  
                    const handleSearchSubmit = (e) => {
                      e.preventDefault();
                    
                      // Check if the entered search term is empty
                      if (!searchTerm.trim()) {
                        // Display an error message or perform any other action
                        showAlert("Please enter a valid search term.", "error");
                        // Optionally, show an error message to the user
                        return;
                      }
                    
                      // Check if the entered search term matches any route path
                      const formattedSearchTerm = searchTerm.toLowerCase();
                    
                      // Use the navigate function to redirect to the desired route
                      if (isValidRoute(formattedSearchTerm)) {
                        navigate(`/${formattedSearchTerm}`);
                      } else {
                        console.log(formattedSearchTerm)
                        showAlert("No matched to the entered search term.", "info");
                        // Optionally, show an info message to the user
                      }
                    };
                    
                    // You need to implement the isValidRoute function based on your route configuration
                    const isValidRoute = (searchTerm) => {
                      // Convert the search term to lowercase for case-insensitive comparison
                      const formattedSearchTerm = searchTerm.toLowerCase();
                    
                      // Array of valid routes
                      const validRoutes = [
                        'home',
                        'shop',
                        'logr',
                        'featured',
                        'about',
                        'mercedes',
                        'mercedessedan',
                        'mercedessport',
                        'mercedescoupe',
                        'mercedesgrancoupe',
                        'bmw',
                        'bmwsedan',
                        'bmwsport',
                        'bmwcoupe',
                        'bmwgrancoupe',
                        'maserati',
                        'maseratisedan',
                        'maseratisport',
                        'maseraticoupe',
                        'maseratigrancoupe',
                        'porsche',
                        'porschesedan',
                        'porschesport',
                        'porschecoupe',
                        'porschegrancoupe',                     
                      ];
                    
                      // Check if the formatted search term is in the array of valid routes
                      return validRoutes.includes(formattedSearchTerm);
                    };
    
    return (
        <div>
            <nav>
            <div className="container back nav-container">
            <Navbar.Brand /*as={Link} to="/https://www.youtube.com/watch?v=ydbdtdgCu14"*/>
           <img src={logoicon} alt="LUXE Logo"  height={50} width={50} />
            </Navbar.Brand>
                <ul className="nav-link">
                    <li><a href="Home" style={{ '--i': 1 }} className="active " >Home</a></li>
                    <li><a href="Featured" style={{ '--i': 2 }}>Featured</a></li>
                    <li><a href="Shop" style={{ '--i': 3 }}>Shop</a></li>
                    {/*<li><a href="About" style={{ '--i': 4 }}>About Us</a></li>*/}
               
                    <Form className="d-flex" style={{ paddingTop: '10px' }} onSubmit={handleSearchSubmit}>
                        <Form.Control
                          type="search"
                          placeholder="Search specs and more"
                          className="me-2"
                          aria-label="Search"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                        <Button variant="outline-success" type="submit">
                          Search
                        </Button>
                      </Form>
                      

                     <Nav  className="usernamebg">

                      

                     <NavDropdown style={{}} title={user && user.user_name} id="basic-nav-dropdown">
                        {user && (
                          <>
                            <NavDropdown.Item className="no-animation" variant="primary" onClick={() => setModalShow(true)}>
                              Userdetail
                            </NavDropdown.Item>

                            <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                            <>
                            <NavDropdown.Item className="no-animation" variant="primary" onClick={() => setReceiptlog(true)}>
                              ORDERS
                            </NavDropdown.Item>

                            <MydModalWithGrid show={receiptlog} onHide={() => setReceiptlog(false)} />
                          </>

                            <NavDropdown.Item className='Sbutton' onClick={handleLogout}>LOG_OUT</NavDropdown.Item>
                          </>
                        )}
                      </NavDropdown>

                              </Nav>
                </ul>

                <ul class="social-link">
                    <li><a href="" style={{ '--i': 1 }}><img src="/Icons/facebook.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /><i class="fab fa-facebook"></i></a></li>
                    <li><a href="" style={{ '--i': 2 }}><img src="/Icons/line.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /><i class="fab fa-line"></i></a></li>
                    <li><a href="" style={{ '--i': 3 }}><img src="/Icons/instagram.png" alt="Facebook" style={{ width: '24px', height: '24px' }} /><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    );
    
};

export default Home;
