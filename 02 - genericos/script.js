// Challenge base 1: ingresar numero telefonico en un formato especifico a partir de un array

const createPhoneNumber = (numbers) => {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
};

console.log(createPhoneNumber([2, 2, 1, 2, 1, 2, 8, 3, 9, 5]));

//given a string of numbers return the higher and the lower

function highAndLow(numbers) {
  let higher = Number.MIN_SAFE_INTEGER;
  let lower = Number.MAX_SAFE_INTEGER;
  const array = numbers.split(" ");
  array.forEach((num) => {
    if (Number(num) >= higher) {
      higher = num;
    }
    if (Number(num) <= lower) {
      lower = num;
    }
  });
  return `${higher} ${lower}`;
}

// easiest and simpler way
const highAndLow2 = (numbers) => {
  const array = numbers.split(" ");
  return `${Math.max(...array)} ${Math.min(...array)}`;
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow2("1 2 3"));

// how much people liked a status

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

function likes2(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
}

console.log(likes([]));
console.log(likes2([]));
console.log(likes(["Peter"]));
console.log(likes2(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));

// tribonacci

[1, 1, 1, 3, 5, 9, 17, 31, 57, 105];

const tribonacci = (signature, n) => {
  let init = signature[0];
  let init2 = signature[1];
  let init3 = signature[2];
  let next = 0;
  let aDevolver = [];
  aDevolver.push(init);
  aDevolver.push(init2);
  for (let i = 2; i <= n; i++) {
    aDevolver.push(init3);
    next = init + init2 + init3;
    init = init2;
    init2 = init3;
    init3 = next;
  }
  return aDevolver;
};

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log("-------------------------------------------------------");

// next perfect square

function findNextSquare(sq) {
  let next = -1;
  if (Number.isInteger(Math.sqrt(sq))) {
    next = sq + 1;
    console.log(next);
    while (!Number.isInteger(Math.sqrt(next))) {
      next++;
    }
  }
  return next;
}

console.log(findNextSquare(121));
console.log("-------------------------------------------------------");

//  Maximum sum subarray
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/*
bestSum = 0;
actualSum = 0;

looping realArray
  for each element sum it to actualSum and compare if it is greater than bestSum.
    if so, bestSum = actualSum
    if not, actualSum = 0
*/

const maxSequence = (sequence) => {
  let bestSum = 0;
  let actualSum = 0;
  sequence.forEach((num) => {
    actualSum = Math.max(0, actualSum + num);
    bestSum = Math.max(actualSum, bestSum);
  });
  return bestSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("-------------------------------------------------------");

// Order words

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
  const orden = new Map();
  const array = words.split(" ");
  array.forEach((word) => {
    const pal = word.split("");
    let nro = pal.filter(
      (letra) => parseInt(letra) > 0 && parseInt(letra) <= 9
    );
    orden.set(nro, word);
  });
  return [...new Map([...orden].sort((a, b) => a[0] - b[0])).values()].join(
    " "
  );
}

console.log(order("is2 Thi1s T4est 3a"));
console.log("-------------------------------------------------------");

// Queue times
/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times
queueTime([10,2,3,3], 2)
// should return 10
*/

function queueTime(fila, cajeros) {
  let arrayCajas = new Array(cajeros);
  arrayCajas.fill(0);
  fila.forEach((persona) => {
    arrayCajas[arrayCajas.indexOf(Math.min(...arrayCajas))] += persona;
  });
  return Math.max(...arrayCajas);
}

console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
console.log(queueTime([5, 3, 4], 1));
console.log("-------------------------------------------------------");

// Find unique

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

const findUniq = (arr) => {
  const order = arr.slice().sort((a, b) => {
    return b - a;
  });
  if (order[0] != order[1]) {
    return order[0];
  }
  return order.pop();
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 0, 0]));
console.log("-------------------------------------------------------");

// walking tour

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones --
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).
*/

const isValidWalk = (directions) => {
  if (directions.length != 10) {
    return false;
  }
  const dirs = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };
  directions.forEach((block) => {
    dirs[block]++;
  });
  return dirs.n === dirs.s && dirs.w === dirs.e;
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log("-------------------------------------------------------");

// find outlier
// encontrar el par o el impar de una lista de elementos

function findOutlier(integers) {
  const order = integers.slice().sort((a, b) => {
    return (Math.abs(b) % 2) - (Math.abs(a) % 2);
  });
  if (Math.abs(order[0]) % 2 === Math.abs(order[1] % 2)) {
    return order[integers.length - 1];
  } else {
    return order[0];
  }
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(
  findOutlier([
    -120663763, 125130849, -124128827, 99211903, 128733081, -40244815,
    -22664653, -141292801, -95338769, 187840351, -83463957, -90552189,
    175072385, 192854945, -167872233, 146195613, -114540385, -164363193,
    -137823627, -141601797, 151024815, 122418217, -64465739, 38733341, 70462717,
    161027749, -187888417, -32396575, -102549299, -113915853, 68015418,
    37350801, 25123677, 179310417, 197073109, -37694433,
  ])
);
console.log("-------------------------------------------------------");

// rgb to hex converter

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function toHex(n) {
  if (n < 0) {
    return "00";
  }
  if (n > 255) {
    return "FF";
  }
  let hex = n.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
  return (toHex(r) + toHex(g) + toHex(b)).toUpperCase();
}

console.log(rgb(255, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log("-------------------------------------------------------");

// product of consecutive fibonacci numbers
/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

function productFib(prod) {
  let n0 = 0;
  let n1 = 1;
  let n2 = n0 + n1;
  let notFound = true;
  while (notFound) {
    if (n1 * n2 > prod) {
      return [n1, n2, !notFound];
    } else if (n1 * n2 === prod) {
      return [n1, n2, notFound];
    } else {
      n0 = n1;
      n1 = n2;
      n2 += n0;
    }
  }
}

function productFib2(prod) {
  let n0 = 0;
  let n1 = 1;
  while (n0 * n1 < prod) {
    n1 = n0 + n1;
    n0 = n1 - n0;
  }
  return [n0, n1, n0 * n1 === prod];
}

console.log(productFib2(714));
console.log(productFib2(800));