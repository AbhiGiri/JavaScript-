//// 1. `indexOf()` - Returns the index of the first occurrence of a specified substring within a string.
const str1 = "Hello, world!";

console.log(str1.indexOf("world"));
// Output: 7


//// 2. `lastIndexOf()` - Returns the index of the last occurrence of a specified substring within a string.
const str2 = "Hello, world!";

console.log(str2.lastIndexOf("o"));
// Output: 8


//// 3. `includes()` - Checks if a substring exists within a string and returns a boolean value.
const str3 = "Hello, world!";

console.log(str3.includes("world"));
// Output: true

console.log(str3.includes("foo"));
// Output: false


//// 4. `startsWith()` - Checks if a string starts with a specified substring and returns a boolean value.
const str4 = "Hello, world!";

console.log(str4.startsWith("Hel"));
// Output: true

console.log(str4.startsWith("foo"));
// Output: false


//// 5. `endsWith()` - Checks if a string ends with a specified substring and returns a boolean value.
const str5 = "Hello, world!";

console.log(str5.endsWith("world!"));
// Output: true

console.log(str5.endsWith("foo"));
// Output: false


//// 6. `search()` - Searches for a pattern or regular expression match within a string and returns the index of the first occurrence.
const str6 = "Hello, world!";

console.log(str6.search("world"));
// Output: 7


//// 7. `match()` - Searches for a pattern or regular expression match within a string and returns an array of the matches.
const str7 = "Hello, world! Hello universe!";

console.log(str7.match(/Hello/g));
// Output: ["Hello", "Hello"]


//// 8. `replace()` - Searches for a pattern or substring within a string and replaces it with a specified value.
const str8 = "Hello, world!";

const replacedStr = str8.replace("world", "universe");

console.log(replacedStr);
// Output: "Hello, universe!"


//// 9. `split()` - Splits a string into an array of substrings based on a specified delimiter or regular expression pattern.
const str9 = "Hello, world!";

const splittedArr = str9.split(", ");

console.log(splittedArr);
// Output: ["Hello", "world!"]


//// 10. `substring()` - Extracts a portion of a string based on specified start and end indexes.
const str10 = "Hello, world!";

const subStr = str10.substring(7, 12);

console.log(subStr);
// Output: "world"


