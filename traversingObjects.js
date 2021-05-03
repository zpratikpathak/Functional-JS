const game = {
    "suspects": [
        {
            name: "Rusty",
            color: "orange"
        },{
            name: "Scarlet",
            color: "Red"
        }
    ]

}

// Destructuring Orange and Red color from objects game
const [color1, color2] = [game.suspects[0].color, game.suspects[1].color]
console.log(color1,color2)

// Altenate Method for destructuring
var [{color: firstcolor}, {color:secondcolor}] = game.suspects
console.log(firstcolor,secondcolor)

// for iterating objects
function traverse(obj) {
    for ( let key in obj ){
        console.log(key)
        console.log(obj[key])
    }
}
traverse(game)

// traversing inner block
function gameLoop(obj){
    for (var i=0; i<obj.suspects.length; i++) {
        for (key in obj.suspects[i]) { // for traversing array object
            console.log(`${key} ${obj.suspects[i][key]}`) // printing value of array object
        }
        console.log()
    }
}
gameLoop(game)

