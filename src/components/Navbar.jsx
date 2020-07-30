import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'



export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <>
                <nav>
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
                </nav>
            </>
        );
    }  
}
