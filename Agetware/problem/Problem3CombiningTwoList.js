function combineLists(list1, list2) {
    let combinedList = [...list1, ...list2];
    combinedList.sort((a, b) => a.positions[0] - b.positions[0]);
    function hasSignificantOverlap(pos1, pos2) {
        const [left1, right1] = pos1;
        const [left2, right2] = pos2;
        const overlap = Math.max(0, Math.min(right1, right2) -Math.max(left1, left2));
        const length1 = right1 - left1;
        const length2 = right2 - left2;
        return overlap > length1 / 2 || overlap > length2 / 2;
    }
    let result = [];
    for (let i = 0; i < combinedList.length; i++) {
        let current = combinedList[i];
        if (result.length > 0 && hasSignificantOverlap(result[result.length - 1].positions, current.positions)) {
            let last = result.pop();
            let newPositions = [
                Math.min(last.positions[0], current.positions[0]),
                Math.max(last.positions[1], current.positions[1])
            ];
            let newValues = [...last.values, ...current.values];
            result.push({ positions: newPositions, values: newValues });
        } else {
            result.push(current);
        }
    }
    return result;
}
let list1 = [
    { positions: [1, 5], values: ["a"] },
    { positions: [10, 15], values: ["b"] }
];
let list2 = [
    { positions: [3, 8], values: ["c"] },
    { positions: [12, 20], values: ["d"] }
];
console.log(combineLists(list1, list2));
