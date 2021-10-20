var str=prompt(`enter string:`);
var str2;
str2=str.split("").reverse().join("");
if (str===str2) {
	console.log(true)
}else{
	console.log(false)
}