import React, { useState, useEffect }  from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, NavDropdown, Table, Row, Offcanvas, Collapse, Button } from 'react-bootstrap';
import './Shop.css'

function Mercedes() {
  const cars = [
    { id: 1001, make: 'MERCEDES', model: 'AMG GT', year: 2024, type: 'SPORT' },
    { id: 1002, make: 'MERCEDES', model: 'E 450', year: 2023, type: 'COUPE' },
    { id: 1003, make: 'MERCEDES', model: 'AMG GT 43', year: 2023, type: 'GRAN COUPE' },
    { id: 1004, make: 'MERCEDES', model: 'Maybach S 680', year: 2023, type: 'SEDAN' },
    { id: 1005, make: 'BMW', model: 'i8 ', year: 2020, type: 'SPORT' },
    { id: 1006, make: 'BMW', model: 'M8 Competition', year: 2024, type: 'COUPE' },
    { id: 1007, make: 'BMW', model: '2 SERIES', year: 2024, type: 'GRAN COUPE' },
    { id: 1008, make: 'BMW', model: 'G70', year: 2022, type: 'SEDAN' },
    { id: 1009, make: 'MASERATI', model: 'MC20', year: 2023, type: 'SPORT' },
    { id: 1010, make: 'MASERATI', model: 'GranTurismo', year: 2019, type: 'COUPE' },
    { id: 1011, make: 'MASERATI', model: 'Quattroporte', year: 2024, type: 'GRAN COUPE' },
    { id: 1012, make: 'MASERATI', model: 'Quattroporte Trofeo', year: 2022, type: 'SEDAN' },
    { id: 1013, make: 'PORSCHE', model: 'Taycan GTS ', year: 2022, type: 'SPORT' },
    { id: 1014, make: 'PORSCHE', model: 'Cayenne', year: 2020, type: 'COUPE' },
    { id: 1015, make: 'PORSCHE', model: 'Panamera Turbo e_hybrid', year: 2023, type: 'GRAN COUPE' },
    { id: 1016, make: 'PORSCHE', model: 'Panamera 4 E_hybrid', year: 2011, type: 'SEDAN' },
];
const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);
  const [show16, setShow16] = useState(false);



  const handleClose = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false); 
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(false);
    setShow8(false);
    setShow9(false);
    setShow10(false);
    setShow11(false);
    setShow12(false);
    setShow13(false);
    setShow14(false);
    setShow15(false);
    setShow16(false);
  };


return (
  <div className="header_f Homeback">
   <Table responsive="md" className="transparent-table" style={{ marginTop: '172px', marginBottom :'172px'}} >
        <thead>
          <tr>
            <th>Brands</th>
            <th>SPORT</th>
            <th>COUPE</th>
            <th>GRANCOUPE</th>
            <th>SEDAN</th>
           
          </tr>
        </thead>
  <tbody style={{opacity: '100% !important'}}>
    <tr>
      <td>MERCEDES </td>
      <td>      
          <li>
            <Card style={{ width: '18rem', height: '300px'  }}>
            <Card.Img variant="top" src="/Mercedes/covermercedes.jpg" alt="Mercedes Image" />
          <Card.Body>
            <Card.Text style={{ position: 'relative', height: '100%' }}>
            <button
    variant="primary"
    onClick={() => setShow1(true)}
    style={{ position: 'absolute', bottom: '10px', left: '5px' }}
  >
                <Card.Title>2024 Mercedes-Benz AMG GT Sport </Card.Title>
              </button>
              <Offcanvas show={show1} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                  Explore everything from our cruising convertibles to top-of-the-line sports cars. all crafted by the
                  expert engineers to make open-air driving a luxury experience you will never forget.

                </Offcanvas.Body>                  
                <Button as={Link} to={`/Order?car=${JSON.stringify(cars[0])}`} variant="primary">
                    Purchase
                  </Button>
              </Offcanvas>
            </Card.Text>
          </Card.Body>
        </Card>           
          </li>
          </td>
          <td>  
          <li>
            <Card style={{ width: '18rem', height: '300px'  }}>
            <Card.Img variant="top" src="/Mercedes/2023-E-COUPE-HERO-DR.jpg" alt="Mercedes Image" />
          <Card.Body>
            <Card.Text style={{ position: 'relative', height: '100%' }}>
              <button variant="primary" onClick={() => setShow2(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                <Card.Title>2023 Mercedes-Benz E 450 Coupe</Card.Title>
              </button>
              <Offcanvas show={show2} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  The E-Class Coupe is a tradition that never stops leaping ahead. The art of driving is elevated in
                  elegantly sporty style. While the state of the art is advanced by intuitive technology.
                  
                </Offcanvas.Body>
                <Button as={Link} to={`/Order?car=${JSON.stringify(cars[1])}`} variant="primary">
                    Purchase
                  </Button>
              </Offcanvas>
            </Card.Text>
          </Card.Body>
            </Card>
          </li>
          </td>
          <td>  
          <li>
            <Card style={{ width: '18rem', height: '300px'  }}>
            <Card.Img variant="top" src="/Mercedes/2023-AMG-GT-4DR-COUPE-GAL-002-Q-TE-DR.jpg" alt="Mercedes Image" />
          <Card.Body>
            <Card.Text style={{ position: 'relative', height: '100%' }}>
              <button variant="primary" onClick={() => setShow3(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                <Card.Title>2023 AMG GT 43 4-door Coupe</Card.Title>
              </button>
              <Offcanvas show={show3} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  The 2011 Mercedes Mercedes-269 Gran Coupe is a luxurious and spacious four-door coupe, offering
                  the best of both worlds. This car is perfect for the driver who wants style, comfort, and performance.
                  
                </Offcanvas.Body>
                <Button as={Link} to={`/Order?car=${JSON.stringify(cars[2])}`} variant="primary">
                    Purchase
                  </Button>
              </Offcanvas>
            </Card.Text>
          </Card.Body>
            </Card>
          </li>
          </td>
          <td>  
          <li>
            <Row type="sedan">
              <Card style={{ width: '18rem', height: '300px'  }}>
              <Card.Img variant="top" src="/Mercedes/Mercedes-Maybach S 680 4MATIC.png" alt="Mercedes Image" />
            <Card.Body>
              <Card.Text style={{ position: 'relative', height: '100%' }}>
                <button variant="primary" onClick={() => setShow4(true)} style={{ position: 'absolute', bottom: '12px', left: '5px' }}>
                  <Card.Title>2023 Mercedes-Maybach S 680 4MATIC</Card.Title>
                </button>
                <Offcanvas show={show4} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Details</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Expressively individual. Expressly assertive. Exquisitely confident. Sending handcrafted V12 torque
                    to all four wheels, the Mercedes-Maybach S 680 4MATIC advances first-class travel to new heights, and
                    by an extraordinarily comfortable lead.
                   
                  </Offcanvas.Body>
                   <Button as={Link} to={`/Order?car=${JSON.stringify(cars[3])}`} variant="primary">
                      Purchase
                    </Button>
                </Offcanvas>
              </Card.Text>
            </Card.Body>
              </Card>
            </Row>
          </li>       
      </td>   
    </tr>
  </tbody>
</Table>
  </div>
);
}

export default Mercedes;