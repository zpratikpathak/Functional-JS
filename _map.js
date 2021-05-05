// npm install underscore
const _= require('underscore')

_.map([1,2,3,4], function(v,i,list){ //v=items, i=index, list is list
    console.log(v,i,list)
})

_.map([1,2,3,4], function(list){
    console.log(list)
})
