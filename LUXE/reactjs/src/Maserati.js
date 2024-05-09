import React, { useState, useEffect }  from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, NavDropdown, Table, Row, Offcanvas, Collapse, Button } from 'react-bootstrap';

function Maserati() {
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
    {/* MASERATI */}
    <tr>
      <td>MASERATI</td> {/* Empty td */}
          <td>
              {/* MASERATI SPORT */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/Maserati/2023-maserati-mc20-cielo-spyder-28-1666275747.jpg" alt="Maserati Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow9(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                      <Card.Title>2024 Maserati MC20 Sport</Card.Title>
                    </button>
                    <Offcanvas show={show9} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        More than just a modern mid-engine supercar, the 2024 Maserati MC20 represents a return to the trident brand’s core ethos.
                        Eschewing the parts-bin-in-pretty-wrapper designs of the previous decade—admittedly,
                        a bin with some occasionally spectacular parts—the MC20 blazes its own trail to supercar status.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[8])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* MASERATI COUPE */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/Maserati/2018-Maserati-GranTurismo-and-GranTurismo-Convertible-159.jpg" alt="Maserati Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow10(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                      <Card.Title>2019 Maserati GranTurismo Coupe</Card.Title>
                    </button>
                    <Offcanvas show={show10} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        Maserati's GranTurismo offers something extraordinary in a high-performance, six-figure coupe or convertible,
                        one that embodies all that is compelling and irresistible about Italian cars.
                        The exterior has curves in all the right places; the interior is lavishly appointed.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[9])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* MASERATI GRAN COUPE */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/Maserati/2020-maserati-quattroporte-s-q4-trahan-041-1587075645.jpg" alt="Maserati Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow11(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                      <Card.Title>2024 Maserati Quattroporte Gran Coupe</Card.Title>
                    </button>
                    <Offcanvas show={show11} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        While rival luxury sedans aim for plush cabins, quiet rides, and tech-laden feature lists,
                        the 2024 Maserati Quattroporte goes in a different—but no less hedonistic—direction.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[10])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* MASERATI SEDAN */}
              <Row type="sedan">
                <Card style={{ width: '18rem', height: '300px' }}>
                  {/* Use the correct path to your image */}
                  <Card.Img variant="top" src="/Maserati/qsujiq0dl3om4dbr2gwj.jpg" alt="Maserati Image" />
                  <Card.Body>
                    <Card.Text style={{ position: 'relative', height: '100%' }}>
                      <button variant="primary" onClick={() => setShow12(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}> 
                        <Card.Title>2022 Maserati Quattroporte Trofeo Sedan</Card.Title>
                      </button>
                      <Offcanvas show={show12} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          2022 Maserati Quattroporte
                          Upper-echelon limousines are, by their very nature, rare beasts.
                          Cars like the 2022 Maserati Quattroporte Trofeo raise the bar
                          even higher with envelope-pushing performance courtesy of a Ferrari-derived V8 heart beating under the bonnet.
                        </Offcanvas.Body>
                        <Button as={Link} to={`/Order?car=${JSON.stringify(cars[11])}`} variant="primary">
                          Purchase
                        </Button>
                      </Offcanvas>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </td>
    </tr>
  </tbody>
</Table>
              
  </div>
);
}

export default Maserati;