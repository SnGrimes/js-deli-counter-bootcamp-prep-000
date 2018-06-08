let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}