let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  let number = katzDeliLine.indexOf(name) + 2;
  return `Welcome, ${name}. You are number ${number} in line.`;
}