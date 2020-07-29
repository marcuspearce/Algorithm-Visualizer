// use auxiliary array to override values in main array
// return array of animations rather than array
    // each time compare values, create an animation (which holds two values being compared)
// in SortingVisualizer, get animations, iterate thru animations 


export function getMergeSortAnimations(array) {
    if (array.length <= 1) return array;

    const animations = [];
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxiliaryArray, animations);
    return animations;
}

// NOTE: javascript arrays and objects are pass by reference 
function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    if(startIndex === endIndex) return;

    const middleIndex = Math.floor((startIndex+endIndex)/2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex+1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}


function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    // i and j are the values comparing , k is index in original array w/ value at index i in auxiliary array
    let i = startIndex;             
    let j = middleIndex + 1;
    let k = startIndex;

    // merge two "halves"
    while(i <= middleIndex && j <= endIndex) {
        // comparing these values ; push them once to change colour
        animations.push([i,j]);
        // push second time to revert colour
        animations.push([i,j]);

        if(auxiliaryArray[i] <= auxiliaryArray[j]) {
            // overwrite value at index k in og array w/ value at index i in auxiliary array
            animations.push([k,auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // overwrite value at index k in og array w/ value at index j in auxiliary array
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    // merge "remainder" of either first or last half
    while (i <= middleIndex) {
        // comparing these values ; push them once to change colour
        animations.push([i, i]);
        // push second time to revert colour
        animations.push([i, i]);
        // overwrite value at index k in og array w/ value at index i in auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= endIndex) {
        // comparing these values ; push them once to change colour
        animations.push([j, j]);
        // push second time to revert colour
        animations.push([j, j]);
        // overwrite value at index k in og array w/ value at index j in auxiliary array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
}