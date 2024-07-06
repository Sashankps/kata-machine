export default function bs_list(haystack: number[], needle: number): boolean {
    let left: number = 0;
    let right: number = haystack.length - 1;
    while (left <= right) {
        let middle: number = left + Math.floor((right - left) / 2);
        if (haystack[middle] === needle) return true;
        if (haystack[middle] < needle) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
}
