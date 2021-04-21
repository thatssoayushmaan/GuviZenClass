var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
 // your code here
 return Object.entries(obj)
}

console.log(convertListToObject(obj))
