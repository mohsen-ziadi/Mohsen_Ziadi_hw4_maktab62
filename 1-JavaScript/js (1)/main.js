let o=["rd","th","nd","st"]
let color=["blue","green","red","black","yellow","orange","Purple",
           "blue","green","red","black","yellow","orange","Purple",
           "blue","green","red","black","yellow","orange","green",
           "red","black","yellow","orange"]

for (var i = 0; i < color.length; i++) {
	if ((i+1)%10==1 && i+1!=11) {
		console.log( `${i+1}${o[3]} choice is ${color[i]}`)
	}else if((i+1)%10==2 && i+1!=2){
		console.log(`${i+1}${o[2]} choice is ${color[i]}`)
	}else if((i+1)%10==3 && i+1==3){
		console.log(`${i+1}${o[0]} choice is ${color[i]}`)
	}else{
		console.log(`${i+1}${o[1]} choice is ${color[i]}`)
	}
}

