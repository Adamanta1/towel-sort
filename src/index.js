
module.exports = function towelSort (matrix) {
    if (matrix) {
        for (i = 0; i < matrix.length; i += 1) {
            if (i % 2 !== 0) {
                matrix[i] = matrix[i].sort((a, b) => b - a);
            }
        } 
        return matrix.flat();
    }
    return [];
}
