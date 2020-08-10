import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../../algorithms/mergeSort.js';

import { Button, DropdownButton, Dropdown } from 'react-bootstrap';



const NUMBER_OF_ARRAY_BARS = 150;
const ANIMATION_SPEED_MS = 5;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array});
    }


    // below functions process the actual animations of the sorting algorithms

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            // if is color change
            if(i % 3 !== 2) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                let color = PRIMARY_COLOR;
                if (i % 3 === 0) {
                    color = SECONDARY_COLOR;
                }
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            } 
            else {
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}.px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {}
    heapSort() {}
    bubbleSort() {}
















    render() {
        const {array} = this.state;

        return (
            <>

                <div className="sidebar-s">
                    <h1 className="sidebar-s-title">Algorithm Visualizer</h1>
                    <hr className="sidebar-s-line"/>
                    <DropdownButton variant="secondary" className="sidebar-s-dropdown" id="dropdown-basic-button" title="Choose an Algorithm">
                        <Dropdown.Item onClick={() => this.mergeSort()}>Merge Sort</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.quickSort()}>Quick Sort</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.heapSort()}>Heap Sort</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.bubbleSort()}>Bubble Sort</Dropdown.Item>
                    </DropdownButton>
                    
                    <Button onClick={() => this.resetArray()} variant="info">
                        New Array
                    </Button>{' '}
                    <Button onClick={() => this.mergeSort()} variant="success">
                        Visualize!
                    </Button>{' '}
                </div>

                <div id="sorting-content">
                    <div className="array-container">
                        {array.map((value,idx) => (
                            <div 
                                className="array-bar" 
                                key={idx}
                                style={{
                                    backgroundColor: PRIMARY_COLOR,
                                    height: `${value}px`,
                                }}
                                >
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }  
}














// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}