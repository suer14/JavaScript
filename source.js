let writeOutput = function(text)
{
    document.write(`<h2>${text}</h2>`);

}

writeOutput("Done!");

let truncateString = function(str,num)
{
    if(str.length <= num)
    {
        return str;
    }

    return str.slice(0,num)+'...';

}
document.write(truncateString("Hoje está um dia feioso.",23));

document.write(truncateString("Hoje está um dia feioso",10));

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); 
 }
 
 document.write(titleCase("hoje está muito chuvoso"));