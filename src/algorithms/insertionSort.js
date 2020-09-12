// Returns an array of the animations
export function getInsertionSortAnimations(array) {
    if (array.length <= 1) return array;

    const animations = [];
    insertionSort(array, animations);
    return animations;
}

function insertionSort(array, animations) {
    const len = array.length;
    var i,j;

    // iterate from arr[1] to arr[n] over the array
    for(i=1; i < len; i++) {
        let key = array[i];
        j = i-1;

        // compare the curr element (key) to its predecessor
        while (j >= 0 && key < array[j]) {

            // swap elements moving cur element (key) down 
            let temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;

            // SIGNAL sequence of animations for swap of array bars
            animations.push([-1,-1]);
            // make SECONDARY_COLOR since comparing these two values
            animations.push([j,j+1]);
            // change heights of bars -> push the Modified heights
            animations.push([j, array[j]]);
            animations.push([j+1, array[j+1]]);
            // revert elements back to PRIMARY_COLOR
            animations.push([j,j+1]);

            j -= 1;
        }

        array[j+1] = key;        // final element is set to the old key

        // case where swapped all the way to the front, no final check (would break animation)
        if (j === -1) {
            continue
        }
        // case where just check two bars, but DON'T swap
        // INIT make SECONDARY_COLOR since comparing these two values
        animations.push([j,j+1]);
        // revert elements back to PRIMARY_COLOR
        animations.push([j,j+1]);

    }

    // console.log("Sorted Array");
    // console.log(array);
    // console.log("asdfasdfasdf");
}