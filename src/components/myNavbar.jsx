import React from 'react';
import './myNavbar.css';
import {Link} from 'react-router-dom'
import { Nav, Navbar  } from 'react-bootstrap';





export default class myNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <>
                {/* <nav>
                    <h3>Logo</h3>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/sortingVisualizer'>
                            <li>Sorting Visualizer</li>
                        </Link>
                        <Link to='/pathfindingVisualizer'>
                            <li>Pathfinding Visualizer</li>
                        </Link>
                    </ul>
                </nav> */}
                
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
        <Nav.Item>
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>
                <Link to="/sortingVisualizer">Sorting Visualizer</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>
                <Link to="/pathfindingVisualizer">Pathfinding Visualizer</Link>
            </Nav.Link>
        </Nav.Item>
    </Nav>

</Navbar>
{/* <br /> */}
  
  {/* <Navbar expand="lg">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
</Navbar> */}

            </>


        );
    }  
}
