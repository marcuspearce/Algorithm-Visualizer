import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../../algorithms/mergeSort.js';
import {getBubbleSortAnimations} from '../../algorithms/bubbleSort.js';

import { Button, DropdownButton, Dropdown } from 'react-bootstrap';



const NUMBER_OF_ARRAY_BARS = 150;
const ANIMATION_SPEED_MS = 5;
const PRIMARY_COLOR = 'rgba(0, 190, 218, 0.75)';
const SECONDARY_COLOR = 'yellow';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            algorithm: "bubble",        // DEFAULT BUBBLE SORT
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

            // if is color change (every 3rd animation req colour change)
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
            // changing height
            else {
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}.px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }
    }


    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        var i;
        // animations come in set of FOURS
        for( i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            // first animation: change to SECONDARY_COLOR
            if(i % 4 === 0) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                let color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            }

            // second and third animation: modify heights
            if(i % 4 === 1 ) {
                const [barOneIndex, barOneHeight] = animations[i];
                i++;
                const [barTwoIndex, barTwoHeight] = animations[i];

                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight}.px`;
                    barTwoStyle.height = `${barTwoHeight}.px`;
                }, i*ANIMATION_SPEED_MS);
            }

            // fourth animation: change back to PRIMARY_COLOR
            if(i % 4 === 3) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                let color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            }
        }

    }



    quickSort() {}
    heapSort() {}


    // Helper functions to select correct sort
    setStateBubble() {
        this.setState({algorithm : "bubble"});
    }
    setStateMerge() {
        this.setState({algorithm : "merge"});
    }


    // play the animation for the selected Sorting Algorithm
    visualize() {
        const alg = this.state.algorithm;
        if(alg == "bubble") {
            this.bubbleSort();
        }
        else if (alg == "merge") {
            this.mergeSort();
        }
    }





    render() {
        const {array} = this.state;

        return (
            <>

                <div className="sidebar-s">
                    <h1 className="sidebar-s-title">Algorithm Visualizer</h1>
                    <hr className="sidebar-s-line"/>
                    <DropdownButton variant="secondary" className="sidebar-s-dropdown" id="dropdown-basic-button" title="Choose an Algorithm">
                        <Dropdown.Item onClick={() => this.setStateBubble()}>Bubble Sort</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.setStateMerge()}>Merge Sort</Dropdown.Item>
                        {/* <Dropdown.Item onClick={() => this.quickSort()}>Quick Sort</Dropdown.Item> */}
                        {/* <Dropdown.Item onClick={() => this.heapSort()}>Heap Sort</Dropdown.Item> */}
                    </DropdownButton>
                    
                    <Button onClick={() => this.resetArray()} variant="info">
                        New Array
                    </Button>{' '}
                    <Button onClick={() => this.visualize()} variant="success">
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