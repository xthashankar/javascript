var  fruits=[
                {id:1,name:'banana',color:'yellow'},
                {id:2,name:'apple',color:'red'}
            ]
var i,search;
function searchname(fruit,par)
{
  //when i is equal to the length of the string, the condition is false and the loop terminates.
    for (i=0;i<fruit.length;i++)  
    {
        if(fruit[i].name==par)
        {
            return fruit[i];
        }
    }
}
search=searchname(fruits,'apple')
console.log(search);
