import React, { useState, useEffect }  from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, NavDropdown, Table, Row, Offcanvas, Collapse, Button } from 'react-bootstrap';

function Porschecoupe() {
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
  <div className="header_f Homeback" >
                 <Table responsive="md" className="transparent-table" style={{ marginTop: '172px', marginBottom :'172px'}} >
        <thead>
          <tr>
            <th>Brands</th>      
            <th>COUPE</th>                     
          </tr>
        </thead>
  <tbody style={{opacity: '100% !important'}}>
     {/* PORSCHE */}
     <tr>
     <td>PORSCHE</td> {/* Empty td */}
      <td>
          {/* CAR 2*/}
          <Card style={{ width: '18rem', height: '300px' }}>
            {/* Use the correct path to your image */}
            <Card.Img variant="top" src="/Porsche/5ec2ce384dca6878b3555e73.jpg" alt="Porsche Image" />
            <Card.Body>
              <Card.Text style={{ position: 'relative', height: '100%' }}>
                <button
                  variant="primary"
                  onClick={() => setShow14(true)}
                  style={{ position: 'absolute', bottom: '10px', left: '5px' }}
                >
                  <Card.Title>2020 Porsche Cayenne Coupe</Card.Title>
                </button>
                <Offcanvas show={show14} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Details</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    The Porsche Cayenne is, without question, the finest SUV humanity has ever produced.
                    It's fast. It handles ... well, like a Porsche. It's roomy. It has plenty of space to stow gear.
                    So it has been since the early 2000s, when it made its shocking debut, and so it remains.
                  </Offcanvas.Body>
                  <Button as={Link} to={`/Order?car=${JSON.stringify(cars[13])}`} variant="primary">
                    Purchase
                  </Button>
                </Offcanvas>
              </Card.Text>
            </Card.Body>
          </Card>
      </td>
    </tr>
  </tbody>
</Table>

  </div>
);
}

export default Porschecoupe;