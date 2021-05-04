// npm install underscore
const _= require('underscore')

var rooms = ['observatory','ballroom', 'library'];
var logger = function(val){
  console.log(val);
};
_.each(rooms, logger);

// Looping through suspects object using _.each

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
// Tradition Form
_.each(game.suspects, function(obj){
    // console.log(obj)
    _.each(obj, function(val){
        console.log(val)
    })
})

//Form 2
_.each(game.suspects, (obj)=>{
    console.log(obj)
})

//Form 3 . on the way 🏃‍♂️
// list = game.suspects
// _.each = function(list,obj){
//     console.log(obj)

// }