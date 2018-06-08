let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing() {
  if(katzDeli.length === 0) {
    return "There is nobody waiting in line to be served.";
  }
  else {
    katzDeli.
  }
}