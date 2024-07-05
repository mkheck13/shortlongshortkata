// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

// we will want to do a ternary for this as the output could be one of two differnt formats
// either aba or bab
// we will compare to see which one is longer and then have the ternary fire the out output we need
// we don't want anything added, just the inputs in the correct locations
// so if b is of greter length then a we get the return of aba
function solution(a, b){
return (a.length < b.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}