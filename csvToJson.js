const fs = require('fs')
let csv = fs.readFileSync(process.argv[2]).toString(); //read the file and convert from buffer to string

function csvJSON(csv){
    let lines = csv.split("\n"); //tab of every line
    let keys = lines[0].split(","); //Tab of keys "id,firstname ..."
    let result = []; //The result tab

    for(var i=1 ;i < lines.length - 1;i++){
       let obj = {};
       let currentline = lines[i].split(",");

       for(var j=0; j < keys.length;j++){
         obj[keys[j]] = currentline[j];
       }
       result.push(obj);

     }

    return JSON.stringify(result);
}

let json = csvJSON(csv)

 fs.writeFileSync('result.json',json) //put the result into a json file
