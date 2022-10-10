function square(num: number): number {
  return num * num
}

square(12)

function greet(person: string = 'Dima'): string {
  return `Hey, ${person}`
}

greet()

function sumNum(num: number, num2: number): number {
  return num * num2
}

sumNum(2, 2);

const numbers = [1, 2, 3];

numbers.forEach(num => {
  return num.toUppercase();
})

function printTwice(msg: string): void {
  console.log(msg)
  return ''
}


function twoFer(person: string = 'you'): string {
  return `One for ${person}, one for me`;
}

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2000))


