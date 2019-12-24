
var a,b,chr;

function pattern(pattern)
{
    for(a=1;a<=5;a++)
    {
        for(b=5;b>=a;b--)
        {
            chr=chr+("*");
        }
            console.log(chr);
            chr=' ';
    }
}
pattern();