var  fruits=[
                {id:1,name:'banana',color:'yellow'},
                {id:2,name:'apple',color:'red'}
            ]

var i,search;
//making function to search the fruit and passing the parameter
function searchname(fruit,par)
{
    for (i=0;i<fruit.length;i++)  //when i is equal to the length of the string, the condition is false and the loop terminates.
    {
        if(fruit[i].name==par)
        {
            return fruit[i];
        }
    }
}
//it search the fruit with its id name & color
search=searchname(fruits,'apple')
console.log(search);