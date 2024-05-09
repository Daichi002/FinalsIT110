import React, { useState } from 'react';
import { Carousel, Card, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useNavigate,   Link } from 'react-router-dom';
import './Featured.css';

function Featured() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="header_f">
               <Carousel fade>
                      {/* MERCEDES */}
                      <Carousel.Item interval={1500}>
                <img className="header_f img" src="/Mercedes/covermercedes.jpg" alt="MERCEDES" />
                <Carousel.Caption>
                <h1>MERCEDES</h1>
                  <div style={{ display: 'flex' }}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Mercedessedan`}>Sedan</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Mercedessport`}>Sport</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown title="Coupe">
                          <NavDropdown.Item as={Link} to={`/Mercedescoupe`}>Coupe</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/Mercedesgrancoupe`}>Gran Coupe</NavDropdown.Item>
                        </NavDropdown>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Mercedes`}>All Car Types</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              {/* BMW */}
              <Carousel.Item interval={1000}>
                <img className="header_f img" src="/BMW/coverbmw.jpg" alt="BMW" />
                <Carousel.Caption>
                <h1>BMW </h1>
                  <div style={{ display: 'flex' }}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Bmwsedan`}>Sedan</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/BmwSport`}>Sport</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown title="Coupe">
                          <NavDropdown.Item as={Link} to={`/BmwCoupe`}>Coupe</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/BmwGranCoupe`}>Gran Coupe</NavDropdown.Item>
                        </NavDropdown>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Bmw`}>All Car Types</NavDropdown.Item>
                      </Card.Body>
                    </Card>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>


        {/* MASERATI */}
                  <Carousel.Item interval={500}>
                    <img className="header_f img" src="/Maserati/coverMaserati.jpg" alt="MASERATI" />
                    <Carousel.Caption>
                    <h1>MASERATI </h1>
                      <div style={{ display: 'flex' }}>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <NavDropdown.Item as={Link} to={`/Maseratisedan`}>Sedan</NavDropdown.Item>
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <NavDropdown.Item as={Link} to={`/Maseratisport`}>Sport</NavDropdown.Item>
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <NavDropdown title="Coupe">
                              <NavDropdown.Item as={Link} to={`/Maseraticoupe`}>Coupe</NavDropdown.Item>
                              <NavDropdown.Item as={Link} to={`/Maseratigrancoupe`}>Gran Coupe</NavDropdown.Item>
                            </NavDropdown>
                          </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                          <Card.Body>
                            <NavDropdown.Item as={Link} to={`/Maserati`}>All Car Types</NavDropdown.Item>
                          </Card.Body>
                        </Card>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>


                    {/* PORSCHE */}                        
                <Carousel.Item interval={500}>
                <img className="header_f img" src="/Porsche/coverPorsche.jpg" alt="PORSCHE" />
                  <Carousel.Caption>
                    <h1>PORSCHE </h1>
                    <div style={{ display: 'flex' }}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <NavDropdown.Item as={Link} to={`/Porschesedan`}>Sedan</NavDropdown.Item>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <NavDropdown.Item as={Link} to={`/Porschesport`}>Sport</NavDropdown.Item>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <NavDropdown title="Coupe">
                            <NavDropdown.Item as={Link} to={`/Porschecoupe`}>Coupe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={`/Porschegrancoupe`}>Gran Coupe</NavDropdown.Item>
                          </NavDropdown>
                        </Card.Body>
                      </Card>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <NavDropdown.Item as={Link} to={`/Porsche`}>All Car Types</NavDropdown.Item>
                        </Card.Body>
                      </Card>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
         

    </div>
  );
}

export default Featured;
