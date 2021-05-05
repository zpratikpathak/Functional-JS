// npm install underscore
const _= require('underscore')

_.map([1,2,3,4], function(v,i,list){ //v=items, i=index, list is list
    console.log(v,i,list)
})
// 1 0 [ 1, 2, 3, 4 ]
// 2 1 [ 1, 2, 3, 4 ]
// 3 2 [ 1, 2, 3, 4 ]
// 4 3 [ 1, 2, 3, 4 ]
_.

_.map([1,2,3,4], function(list){
    console.log(list)
})
// 1
// 2
// 3
// 4

//  //test Skill
const weapons = ['candlestick', 'lead pipe', 'revolver'];
const returnWep = (list)=>{
    console.log(list)
}
_.map(weapons,returnWep)

//Alternate Method
const makeBroken = function(item){
    return `broken ${item}`;
  };
const brokenWeapons = _.map(weapons, makeBroken);
console.log(brokenWeapons)
//[ 'broken candlestick', 'broken lead pipe', 'broken revolver' ]
//Note: _.map returns a array