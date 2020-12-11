const string: string = 'lars';

const reverseArray = (array: any[]): any[] => {
  const reversedArray: any[] = [];

  for (let i = array.length - 1; i !== -1; --i) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
};

const checkIfArraysEqual = (arrayFirst: any[], arraySecond: any[]): boolean => {
  if (arrayFirst === arraySecond) return true;
  if (arrayFirst == null || arraySecond == null) return false;
  if (arrayFirst.length !== arraySecond.length) return false;

  for (let i: number = 0; i < arrayFirst.length; i++) {
    if (arrayFirst[i] !== arraySecond[i]) return false;
  }

  return true;
};

const isPalimdroom = (string: string): boolean => {
  const array: string[] = string.split('');

  if (array.length % 2 === 0) {
    const a = array.splice(0, array.length / 2);
    const b = reverseArray(array.splice(array.length / 2 - 1));
    if (checkIfArraysEqual(a, b)) return true;
  } else if (array.length % 2 === 1) {
    array.splice(Math.round(array.length / 2 - 1), 0);
    const a = array.splice(0, array.length / 2);
    const b = reverseArray(array.splice(array.length / 2));
    if (checkIfArraysEqual(a, b)) return true;
  }

  return false;
};

console.log(isPalimdroom(string));
