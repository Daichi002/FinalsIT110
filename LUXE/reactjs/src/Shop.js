import React, { useState, useEffect }  from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Card, NavDropdown, Table, Row, Offcanvas, Collapse, Button } from 'react-bootstrap';
import './Shop.css';

function Shop() {
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
<Table responsive="md" className="transparent-table" style={{ marginTop: '100px'}} >
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
     {/* BMW */}
     <tr>
      <td>BMW</td> {/* Empty td */}
      <td>
              {/* CAR SPORT */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/BMW/2020-bmw-i8-coupe-carbuzz-560475.jpg" alt="BMW Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow5(true)} style={{ position: 'absolute', bottom: '10px', left: '38px' }}>
                      <Card.Title>2020 BMW i8 Sport</Card.Title>
                    </button>
                    <Offcanvas show={show5} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        Harnessing incredible hybrid power, the BMW i8 Coupe and BMW i8 Roadster were among the first to combine electric
                        efficiency with high-performance dynamics giving them serious staying power that endures today.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[4])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* CAR COUPE */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/BMW/coverbmw1.jpg" alt="BMW Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow6(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                      <Card.Title>2024 BMW M8 Competition Luxury Coupe</Card.Title>
                    </button>
                    <Offcanvas show={show6} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        The BMW M models in the 8 Series family are precisely engineered and designed for performance driving.
                        This impacts everything from the seats, exhaust, suspension, steering, wheels, aerodynamics, and more. For example, the M8 Competition Coupe offers more pure performance power than the 8 Coupe,
                        featuring a 4.4-liter V-8 engine that delivers 617 hp and a 0-60 mph of 3.0 seconds.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[5])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* CAR GRAN COUPE */}
              <Card style={{ width: '18rem', height: '300px' }}>
                {/* Use the correct path to your image */}
                <Card.Img variant="top" src="/BMW/BMW-MY24-2SERIES-GRANCOUPE-DP-MMODELS-HERO-DESKTOP.jpg" alt="BMW Image" />
                <Card.Body>
                  <Card.Text style={{ position: 'relative', height: '100%' }}>
                    <button variant="primary" onClick={() => setShow7(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                      <Card.Title>2024 BMW 2 SERIES GRAN COUPE</Card.Title>
                    </button>
                    <Offcanvas show={show7} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Details</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        This next-level Gran Coupe delivers more than its share of driving excitement with engines,
                        aerodynamics, and style developed by BMW M.
                      </Offcanvas.Body>
                      <Button as={Link} to={`/Order?car=${JSON.stringify(cars[6])}`} variant="primary">
                        Purchase
                      </Button>
                    </Offcanvas>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>

            <td>
              {/* CAR SEDAN */}
              <Row type="sedan">
                <Card style={{ width: '18rem', height: '300px' }}>
                  {/* Use the correct path to your image */}
                  <Card.Img variant="top" src="/BMW/M 7 S SEDAN.jpg" alt="BMW Image" />
                  <Card.Body>
                    <Card.Text style={{ position: 'relative', height: '100%' }}>
                      <button variant="primary" onClick={() => setShow8(true)} style={{ position: 'absolute', bottom: '10px', left: '5px' }}>
                        <Card.Title>2022 BMW G70 Sedan</Card.Title>
                      </button>
                      <Offcanvas show={show8} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          since 2022, the BMW 7 Series (G70) as the new face of the luxury class has seen the light of day
                          by combining pure elegance with outstanding driving characteristics and multi-sensory entertainment.
                        </Offcanvas.Body>
                        <Button as={Link} to={`/Order?car=${JSON.stringify(cars[7])}`} variant="primary">
                          Purchase
                        </Button>
                      </Offcanvas>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </td>

    </tr>

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


     {/* PORSCHE */}
     <tr>
      <td>PORSCHE</td> {/* Empty td */}
      <td>      
          {/* CAR 1*/}
          <Card style={{ width: '18rem', height: '300px' }}>
            {/* Use the correct path to your image */}
            <Card.Img variant="top" src="/Porsche/2022-Porsche-Taycan-GTS-Sport-Turismo_KC_1.jpg" alt="Porsche Image" />
            <Card.Body>
              <Card.Text style={{ position: 'relative', height: '100%' }}>
                <button
                  variant="primary"
                  onClick={() => setShow13(true)}
                  style={{ position: 'absolute', bottom: '10px', left: '5px' }}
                >
                  <Card.Title> 2022 Porsche Taycan GTS Sport Turismo</Card.Title>
                </button>
                <Offcanvas show={show13} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Details</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    The Porsche Taycan Sport Turismo is a high-performance electric vehicle that combines family practicality with driving thrills.
                    It’s basically the same as the Taycan saloon, but with an extra bit tacked on – like adding a conservatory to your already lovely house.
                  </Offcanvas.Body>
                  <Button as={Link} to={`/Order?car=${JSON.stringify(cars[12])}`} variant="primary">
                    Purchase
                  </Button>
                </Offcanvas>
              </Card.Text>
            </Card.Body>
          </Card>
      </td>
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
      <td>
          {/* CAR 3*/}
          <Card style={{ width: '18rem', height: '300px' }}>
            {/* Use the correct path to your image */}
            <Card.Img variant="top" src="/Porsche/2023-Porsche-Panamera-Turbo-S-31.jpg" alt="Porsche Image" />
            <Card.Body>
              <Card.Text style={{ position: 'relative', height: '100%' }}>
                <button
                  variant="primary"
                  onClick={() => setShow15(true)}
                  style={{ position: 'absolute', bottom: '10px', left: '5px' }}
                >
                  <Card.Title>2023 Porsche Panamera Turbo E_hybrid Gran Coupe</Card.Title>
                </button>
                <Offcanvas show={show15} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Details</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    The Panamera is for those who use freedom to follow their instincts. Who express themselves in the way they travel, not just in reaching their destination.
                    Who make decisions based on their own desires and not what others think. We built this sports car for exactly these people.
                  </Offcanvas.Body>
                  <Button as={Link} to={`/Order?car=${JSON.stringify(cars[14])}`} variant="primary">
                    Purchase
                  </Button>
                </Offcanvas>
              </Card.Text>
            </Card.Body>
          </Card>
      </td>
      <td>
        <Row type="sedan">
            {/* CAR 4*/}
            <Card style={{ width: '18rem', height: '300px' }}>
              {/* Use the correct path to your image */}
              <Card.Img variant="top" src="/Porsche/porsche-panamera-4-e-hybrid-sport-turismo.png" alt="Porsche Image" />
              <Card.Body>
                <Card.Text style={{ position: 'relative', height: '100%' }}>
                  <button
                    variant="primary"
                    onClick={() => setShow16(true)}
                    style={{ position: 'absolute', bottom: '10px', left: '5px' }}
                  >
                    <Card.Title>2024 Porsche Panamera 4 E_hybrid Sedan</Card.Title>
                  </button>
                  <Offcanvas show={show16} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Details</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Can a vision be logical? Is it even allowed to be? Probably not. We believe that the more visionary an idea at the start, the more exciting it is at the end.
                      Then it's worth fighting for. That was the case with the Panamera. A sports car for four? With impressive performance and great comfort?
                    </Offcanvas.Body>
                    <Button as={Link} to={`/Order?car=${JSON.stringify(cars[15])}`} variant="primary">
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

export default Shop;