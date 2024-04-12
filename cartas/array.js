var nipes = ['♥' , '♦' , '♣' ,'♠' ]
var faces = ['A' , '2' , '3' , '4', '5' , '6' , '7' , '8' , '9' , '10' , 'j' , 'Q' ,'k']
var nipe = nipes[Math.floor(Math.random() * 4)]
var face = faces[Math.floor(Math.random() * faces.length)]


document.write(face + nipe)