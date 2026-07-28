process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';
process.stdin.on('data', d => inputData += d);
process.stdin.on('end', () => {
    const lines = inputData.split('\n').map(l => l.trim());

    // Typical format:
    // line 0: n (size of array)
    // line 1: space-separated array elements
    // line 2: target
    const n = parseInt(lines[0]);
    const nums = lines[1].split(' ').map(Number);
    const target = parseInt(lines[2]);

    const result = twoSumTwoPointer(nums, target);
    console.log(result.join(' '));
});

function twoSumTwoPointer(nums, target) {
    // Step 1: pair each value with its original index, then sort by value
    const indexed = nums.map((val, idx) => [val, idx]);
    indexed.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = indexed.length - 1;

    while (left < right) {
        const sum = indexed[left][0] + indexed[right][0];

        if (sum === target) {
            // Return original indices, smaller index first (common expected format)
            const i = indexed[left][1];
            const j = indexed[right][1];
            return i < j ? [i, j] : [j, i];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1]; // no pair found
}