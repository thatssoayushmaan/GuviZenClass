var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 return Object.assign(...arr.map( ([key,val]) => ({[key]: val})));
}
console.log(fromListToObject(arr));
