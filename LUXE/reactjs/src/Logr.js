import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginstyle.css'; 
import 'boxicons/css/boxicons.min.css';



function Logr(){
          const [username, setUsername] = useState('');
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [repassword, setREpassword] = useState('');
          const navigate = useNavigate();


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
            notification.style.marginLeft = '400px';
            notification.style.zIndex = '9999'; 
        
            // Apply styles based on the notification type
            if (type === 'success') {
                notification.style.backgroundColor = '#4BB543';
                notification.style.color = '#fff';
            } else if (type === 'error') {
                notification.style.backgroundColor = '#f44336';
                notification.style.color = '#fff';
            }else if (type === 'info') {
              notification.style.backgroundColor = '#f2eeec';
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
          

                useEffect(() => {
                  const wrapper = document.querySelector('.wrapper');
                  const registerLink = document.querySelector('.register-link');
                  const loginLink = document.querySelector('.login-link');
                
                  const handleRegisterClick = () => {
                    wrapper.classList.add('active');
                  };
                
                  const handleLoginClick = () => {
                    wrapper.classList.remove('active');
                  };
                
                  // Assign the functions to the onclick event using addEventListener
                  if (registerLink) {
                    registerLink.addEventListener('click', handleRegisterClick);
                  }
                
                  if (loginLink) {
                    loginLink.addEventListener('click', handleLoginClick);
                  }
                
                  // Cleanup by removing event listeners when the component unmounts
                  return () => {
                    if (registerLink) {
                      registerLink.removeEventListener('click', handleRegisterClick);
                    }
                
                    if (loginLink) {
                      loginLink.removeEventListener('click', handleLoginClick);
                    }
                  };
                }, []);

                //login function
                async function Login(e) {
                  e.preventDefault();

                  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	                const passwordRegex = /^(?=.*[A-Z])(?=.*[\d!@#$%^&*_+=])[A-Z\d!@#$%^&*_+=][A-Za-z\d!@#$%^&*_+=]{7,}$/;
                
                  if (!emailRegex.test(email)) {
                    showAlert("Please input a valid email", "error");
                        return;
                    }
                
                
                  if (password.length < 8 || !passwordRegex.test(password)) {
                        showAlert("Password Incorrect", "error");
                        return;
                    }

                  let item = { email, password };
                  console.log('Login payload:', item);
              
                  try {
                      let result = await fetch("http://localhost:8000/api/login", {
                          method: 'POST',
                          headers: {
                              "Content-Type": 'application/json',
                              "Accept": 'application/json'
                          },
                          body: JSON.stringify(item)
                      });
                  
                      if (!result.ok) {
                          throw new Error(`HTTP error! Status: ${result.status}`);
                      }
                  
                      const content = await result.text();
                      console.log('Login response body:', content);
                  
                      let data = JSON.parse(content);
                      console.log('Login response:', data);
              
                      if (data.success) {
                        showAlert("LogIn successful!", "success");
                          console.log("Login successful");
                         localStorage.setItem("user-info", JSON.stringify(data));
                          navigate('/Home');
                          // Perform actions for successful login,
                      } else {
                          console.error("Login failed: ", data.message || "Unknown error");
                          showAlert("Login failed. Please check your credentials.", "error");
                      }   
                  } catch (error) {
                      console.error('Login failed:', error);
                      showAlert("An error occurred during login. Please try again later.", "error");
                  }
              }

              //registration function
              async function Sign_up(e) {
                e.preventDefault();

                const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	                const passwordRegex = /^(?=.*[A-Z])(?=.*[\d!@#$%^&*_+=])[A-Z\d!@#$%^&*_+=][A-Za-z\d!@#$%^&*_+=]{7,}$/;

                  if ( !email || !password) {
                    showAlert("All fields are required", "error");
                    return;
                  }
                
                if (!emailRegex.test(email)) {
                    showAlert("Email can only contain letters, numbers, '-', '_', '@', and '.'", "error");
                    return;
                }
                
                if (password.length < 8 || !passwordRegex.test(password)) {
                    showAlert("Password must start with an uppercase letter and contain numbers or symbols", "error");
                    return;
                }
                if (repassword != (password)) {
                  showAlert("Password did not match", "error");
                  return;
              }

                try {
                    let item = { username, email, password };
                    console.warn(item);
            
                    let response = await fetch("http://localhost:8000/api/create", {
                        method: 'POST',
                        body: JSON.stringify(item),
                        headers: {
                            "Content-Type": 'application/json',
                            "Accept": 'application/json'
                        }
                    });
            
                    if (!response.ok) {                       
                      showAlert("Username must be unique", "info");
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
            
                    let result = await response.json();     
                        // Display a success alert or handle the successful response
                        showAlert("Signup successful!", "success");
                        localStorage.setItem("user-info", JSON.stringify(result));
            
                        // Use the navigate function directly, don't call useNavigate again
                        window.location.reload();
                    
                } catch (error) {
                    console.error('Error during signup:', error);
                }
            }
            
            




  return (

    <div className="logr">
    <div className="wrapper">
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      <div className="form-box login">
        <h2 className="animation" style={{'--i': 0, '--j': 21}}>Login</h2>
        <form action="#">
          <div className="input-box animation" style={{'--i': 1, '--j': 22}}>
            <input type="text"  name="email"value={email}onChange={(e) => setEmail(e.target.value)} required />
            <label>Email</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{'--i': 2, '--j': 23}}>
            <input type="password" name="password"value={password}onChange={(e) => setPassword(e.target.value)} required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" onClick={Login} className="btn animation" style={{'--i': 3, '--j': 24}}>
            Login
          </button>

          <div className="logreg-link animation" style={{'--i': 4, '--j': 25}}>
            <p>
              Don't have an account? <a href="#" className="register-link">Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="animation" style={{'--i': 0, '--j': 20}}>
          Welcome to our shop
        </h2>
      </div>

      <div className="form-box register">
        <h2 className="animation" style={{'--i': 17, '--j': 0}}>
          Sign up
        </h2>
        <form action="#">
          <div className="input-box animation" style={{'--i': 18, '--j': 1}}>
            <input type="text" name="username"value={username}onChange={(e) => setUsername(e.target.value)} required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation" style={{'--i': 19, '--j': 2}}>
            <input type="text" name="email"value={email}onChange={(e) => setEmail(e.target.value)} required/>
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box animation" style={{'--i': 20, '--j': 3}}>
            <input type="password" name="password"value={password}onChange={(e) => setPassword(e.target.value)} required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="input-box animation" style={{'--i': 20, '--j': 3}}>
            <input type="password" name="password"value={repassword}onChange={(e) => setREpassword(e.target.value)} required />
            <label>Confirm-Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
         <button type="submit"  onClick={Sign_up} className="btn animation" style={{'--i': 21, '--j': 4}}>
            Sign Up
          </button>

          <div className="logreg-link animation" style={{'--i': 22, '--j': 5}}>
            <p>
              Already have an account? <a href="#" className="login-link">Login</a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text register">
        <h2 className="animation" style={{'--i': 17, '--j': 0}}>
          Welcome to our shop
        </h2>
      </div>
    </div>
    </div>
  );
};


export default Logr;
