// returns an array of the animations
export function getBubbleSortAnimations(array) {
    if (array.length <= 1) return array;

    const animations = [];
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(mainArray, animations) {
    const len = mainArray.length;
    var i,j;
    for(i = 0; i < len; i++) {
        // last i elements in place
        for(j = 0; j < len - i - 1; j++) {
            let cur = j;
            let next = j+1;

            // make SECONDARY_COLOR since checking these two values
            animations.push([cur,next]);

            // swap if cur element is greater than next element
            if (mainArray[cur] > mainArray[next]) {
                let temp = mainArray[next];
                mainArray[next] = mainArray[cur];
                mainArray[cur] = temp;

                // push the modified heights
                animations.push([cur, mainArray[cur]]);
                animations.push([next, mainArray[next]]);
            } 
            // cur element not greater
            else {
                // push the UNmodified heights
                animations.push([cur, mainArray[cur]]);
                animations.push([next, mainArray[next]]);
            }

            // revert elements back to PRIMARY_COLOR
            animations.push([cur,next]);
        }
    }
}