import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../../algorithms/mergeSort.js';
import {getBubbleSortAnimations} from '../../algorithms/bubbleSort.js';
import {getSelectionSortAnimations} from '../../algorithms/selectionSort.js';


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
            algorithm: "Bubble",        // DEFAULT BUBBLE SORT
            dropdownText: "Choose an Algorithm!",
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



    // Helper functions to select correct sort AND change dropdownText
    setStateBubble() {
        this.setState({algorithm : "Bubble", dropdownText: "Bubble Sort"});
    }
    setStateMerge() {
        this.setState({algorithm : "Merge", dropdownText: "Merge Sort"});
    }
    setStateSelection() {
        this.setState({algorithm : "Selection", dropdownText: "Selection Sort"});
    }



    // Play the animation for the selected Sorting Algorithm
    visualize() {
        const alg = this.state.algorithm;
        if(alg === "Bubble") {
            this.bubbleSort();
        }
        else if (alg === "Merge") {
            this.mergeSort();
        }
        else if (alg === "Selection") {
            this.selectionSort();
        }
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


    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        var i;
        for(i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            // if no [-1,-1] pair, then a pair animations -> switching bar colours for compared elements
            // [-1,-1] signals set of FOUR animations for ACTUAL SWAP OF ARRAY BARS

            // NOTE: needed to redefine var as const w/ numbers because .style would be undefined otherwise
            var [check1, check2] = animations[i];
            if(check1 === -1 && check2 === -1) {
                i++;            // need to skip past [-1,-1]

                // first animation: change to SECONDARY_COLOR
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                let color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);

                i++;
                // second and third animation: modify heights
                const [barOneIndex2, barOneHeight2] = animations[i];
                i++;
                const [barTwoIndex2, barTwoHeight2] = animations[i];
                const barOneStyle2 = arrayBars[barOneIndex2].style;
                const barTwoStyle2 = arrayBars[barTwoIndex2].style;

                setTimeout(() => {
                    barOneStyle2.height = `${barOneHeight2}.px`;
                    barTwoStyle2.height = `${barTwoHeight2}.px`;
                }, i*ANIMATION_SPEED_MS);
                

                i++;
                // fourth animation: change back to PRIMARY_COLOR
                const [barOneIndex3, barTwoIndex3] = animations[i];
                const barOneStyle3 = arrayBars[barOneIndex3].style;
                const barTwoStyle3 = arrayBars[barTwoIndex3].style;
                let color3 = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle3.backgroundColor = color3;
                    barTwoStyle3.backgroundColor = color3;
                }, i*ANIMATION_SPEED_MS);
                
            }

            // just switch colours
            else {
                // console.log(animations[i]);

                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                let color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            
                i++
                const [barOneIndex2, barTwoIndex2] = animations[i];
                const barOneStyle2 = arrayBars[barOneIndex2].style;
                const barTwoStyle2 = arrayBars[barTwoIndex2].style;
                let color2 = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle2.backgroundColor = color2;
                    barTwoStyle2.backgroundColor = color2;
                }, i*ANIMATION_SPEED_MS);
                
            }

        }
    }



    quickSort() {}
    heapSort() {}








    render() {
        const {array} = this.state;

        return (
            <>

                <div className="sidebar-s">
                    <h1 className="sidebar-s-title">Algorithm Visualizer</h1>
                    <hr className="sidebar-s-line"/>
                    {/* title="Choose an Algorithm" */}
                    <DropdownButton variant="secondary" className="sidebar-s-dropdown" id="dropdown-basic-button" title={this.state.dropdownText}>
                        <Dropdown.Item onClick={() => this.setStateBubble()}>Bubble Sort</Dropdown.Item>                        
                        <Dropdown.Item onClick={() => this.setStateSelection()}>Selection Sort</Dropdown.Item>
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