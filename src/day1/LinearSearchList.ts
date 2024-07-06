export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    // haystack.forEach( (element : number) => {
    //     if(element === needle) return true;
    // })
    // return false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) return true;
    }
    return false;
}
``;
