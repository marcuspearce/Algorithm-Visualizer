import React from 'react';
import './Home.css';



export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    // componentDidMount() {
    //     this.resetArray();
    // }

    // resetArray() {
    //     const array = [];
    //     for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
    //         array.push(randomIntFromInterval(5, 700));
    //     }
    //     this.setState({array});
    // }


    // // below functions process the actual animations of the sorting algorithms

    // mergeSort() {
    //     const animations = getMergeSortAnimations(this.state.array);
    //     for(let i = 0; i < animations.length; i++) {
    //         const arrayBars = document.getElementsByClassName('array-bar');

    //         // if is color change
    //         if(i % 3 !== 2) {
    //             const [barOneIndex, barTwoIndex] = animations[i];
    //             const barOneStyle = arrayBars[barOneIndex].style;
    //             const barTwoStyle = arrayBars[barTwoIndex].style;
    //             let color = PRIMARY_COLOR;
    //             if (i % 3 === 0) {
    //                 color = SECONDARY_COLOR;
    //             }
    //             setTimeout(() => {
    //                 barOneStyle.backgroundColor = color;
    //                 barTwoStyle.backgroundColor = color;
    //             }, i*ANIMATION_SPEED_MS);
    //         } 
    //         else {
    //             setTimeout(() => {
    //                 const [barOneIndex, newHeight] = animations[i];
    //                 const barOneStyle = arrayBars[barOneIndex].style;
    //                 barOneStyle.height = `${newHeight}.px`;
    //             }, i*ANIMATION_SPEED_MS);
    //         }
    //     }
    // }

    // quickSort() {}
    // heapSort() {}
    // bubbleSort() {}

    render() {
        return (
            <>
                <h1>Hello</h1>
                <p>This is the Home Page</p>
            </>
        );
    }  
}


// // From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// function randomIntFromInterval(min,max) {
//     return Math.floor(Math.random() * (max-min+1) + min);
// }