import React from 'react';
import './myNavbar.css';
import {Link} from 'react-router-dom';
import { Nav, Navbar  } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";





export default class myNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <>
                
<Navbar sticky="top" bg="dark" variant="dark">

    <Nav className="mr-auto">
        <Nav.Item>
            <Nav.Link>
                {/* <Link to="/"> */}
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <FontAwesomeIcon icon={faHome} size="2x"></FontAwesomeIcon>

                </Link>
            </Nav.Link>
        </Nav.Item>
    </Nav>

    <Nav className="mx-auto">
        <Nav.Item>
            <Nav.Link>
                <Link to={process.env.PUBLIC_URL + '/pathfindingVisualizer'}>
                    Pathfinding Visualizer
                </Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>
                <Link to={process.env.PUBLIC_URL + '/sortingVisualizer'}>
                    Sorting Visualizer
                </Link>
            </Nav.Link>
        </Nav.Item>
    </Nav>

    <Nav className="ml-auto">
        <Navbar.Brand href="https://github.com/marcuspearce/Algorithm-Visualizer">
            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
        </Navbar.Brand>
    </Nav>

</Navbar>






            </>


        );
    }  
}
