import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../../algorithms/mergeSort.js';


const NUMBER_OF_ARRAY_BARS = 100;
const ANIMATION_SPEED_MS = 10;
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
                <div className="container">
                    <div className="menu">
                        <button onClick={() => this.resetArray()}>Generate New Array</button>
                        <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button onClick={() => this.quickSort()}>Quick Sort</button>
                        <button onClick={() => this.heapSort()}>Heap Sort</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    </div>
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