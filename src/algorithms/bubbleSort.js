// Returns an array of the animations
export function getBubbleSortAnimations(array) {
    if (array.length <= 1) return array;

    const animations = [];
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    const len = array.length;
    var i,j;
    for(i = 0; i < len; i++) {
        // last i elements in place
        for(j = 0; j < len - i - 1; j++) {
            let cur = j;
            let next = j+1;

            // make SECONDARY_COLOR since comparing these two values
            animations.push([cur,next]);

            // swap if cur element is greater than next element
            if (array[cur] > array[next]) {
                let temp = array[next];
                array[next] = array[cur];
                array[cur] = temp;

                // push the modified heights
                animations.push([cur, array[cur]]);
                animations.push([next, array[next]]);
            } 
            // cur element not greater
            else {
                // push the UNmodified heights
                animations.push([cur, array[cur]]);
                animations.push([next, array[next]]);
            }

            // revert elements back to PRIMARY_COLOR
            animations.push([cur,next]);
        }
    }
}