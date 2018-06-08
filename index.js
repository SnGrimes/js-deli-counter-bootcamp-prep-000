let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeli) {
  let name = '';
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    name = katzDeli.shift();
    return `Currently serving ${name}.`;
  }
}