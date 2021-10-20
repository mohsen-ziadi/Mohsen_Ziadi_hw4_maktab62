function Depth(array) {
    if (Array.isArray(array)) {
        let values = []
        for (let index of array) {
            values.push(Depth(index))
        }
        return 1 + Math.max(...values)
    } else {
        return 0
    }
}

console.log(Depth([10, [25, 13], [14, [55]], 2]))
