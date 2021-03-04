// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return []
    }
    const sortedArr = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            sortedArr.push(matrix[i].reverse())
        } else {
            sortedArr.push(matrix[i])
        }
    }
    return sortedArr.reduce((prevEl, el) => [...prevEl, ...el], [])
}
