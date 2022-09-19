'use strict'
function chunkArrayInGroups(arr, size) {
    const result = [];
    // if (arr.length < 0) {
    //     return;
    // } else {
    //     result.push(arr.slice(0, size));
    //     chunkArrayInGroups(arr.splice(0, size), size);
    // }

    console.log(result.push(arr.splice(0, size)));
    // console.log(result);
    return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));