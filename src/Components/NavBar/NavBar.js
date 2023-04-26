import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="navbar" fixed='top' variant='light'>
          <Container fluid>
            <h1><Navbar.Brand >Safe Pass Display</Navbar.Brand></h1>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <h1><Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> Menu </Offcanvas.Title></h1>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Inspiration">Inspiration</Nav.Link>
                  <Nav.Link href="/Mission">Our Mission</Nav.Link>
                  <NavDropdown title="More" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="https://docs.google.com/document/d/17yLEGBR9V0W0O3ox1KcBQxob4nGUwvl2Wmh1NG8WvtI/edit?usp=sharing">Code Link, Appendix A - C</NavDropdown.Item>
                    <NavDropdown.Item href="/AboutUs">Meet The Team!</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Documentation" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="https://docs.google.com/document/d/17yLEGBR9V0W0O3ox1KcBQxob4nGUwvl2Wmh1NG8WvtI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Project Comprehensive Report</NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.google.com/document/d/1-kcDruLeUo9Vt6Nj5NxWrN6fmaziGqgMmmXZNKtMmlc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Sustainability Report</NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.google.com/presentation/d/1b0p3zP0q40r9vjjrow5gqea8HFL8wIqH/edit?usp=sharing&ouid=110508737854526241767&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Sustainability Presentation</NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.google.com/presentation/d/1CQ-USjTWv_PXqwagODrE78_PqDTPUo0i/edit?usp=sharing&ouid=110508737854526241767&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Symposium Poster Presentation</NavDropdown.Item>
                    <NavDropdown.Item href="https://docs.google.com/presentation/d/1KgFQIsgof9Bq63BIUb8cQamB_TOyWb9xGzs2lZqZiVA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Midterm Presentation</NavDropdown.Item>
                    <NavDropdown.Item href="https://drive.google.com/file/d/1tdk5DXXWj0Sk5B5mwjUQhY6s1auig-z0/view?usp=share_link" target="_blank" rel="noopener noreferrer">Safe Pass Display Video Presentation</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default NavBar;