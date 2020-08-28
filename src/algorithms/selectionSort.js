// Returns an array of the animations
export function getSelectionSortAnimations(array) {
    if (array.length <= 1) return array;

    const animations = [];
    selectionSort(array, animations);
    return animations;
}

function selectionSort(array, animations) {
    const len = array.length;
    var i,j;

    for(i=0; i < len; i++) {
        var min_index = i;

        // find min element in remaining unsorted array
        // just swap the colours in terms of animations
        for(j = i+1; j < len; j++) {
            let cur = min_index;
            let next = j;

            // make SECONDARY_COLOR since comparing these two values
            animations.push([cur,next]);

            // if found new index of min element
            if(array[cur] > array[next]) {
                min_index = j;
            }

            // revert elements back to PRIMARY_COLOR
            animations.push([cur,next]);
        }

        // Swap element at min_index w/ element at index = i

        // Signal sequence of animations for ACTUAL SWAP OF ARRAY BARS
        animations.push([-1, -1]);

        let temp = array[i];
        array[i] = array[min_index];
        array[min_index] = temp;

        // make SECONDARY_COLOR since comparing these two values
        animations.push([i,min_index]);
        // push the modified heights
        animations.push([i, array[i]]);
        animations.push([min_index, array[min_index]]);
        // revert elements back to PRIMARY_COLOR
        animations.push([i,min_index]);
    }
}