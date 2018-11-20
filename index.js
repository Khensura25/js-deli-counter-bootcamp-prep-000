function takeANumber( line , name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length } in line.`;
}


function nowServing(line) {
  if  (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
   line.slice(1);
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  
  if (line.length === 0) {
   return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      
    }`The line is cuurently: 1. ${line[0]} `
  }
  
}