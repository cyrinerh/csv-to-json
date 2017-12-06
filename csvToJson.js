const fs = require('fs')
let csv = fs.readFileSync(process.argv[2]).toString();
function csvJSON(csv){
  let lines = csv.split("\n");
  let keys = lines[0].split(",");
  let result = [];

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
fs.writeFileSync('result.json',result)
console.log(csvJSON(csv))
