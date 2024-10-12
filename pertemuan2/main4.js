let array1 = [1, 4, 7, 2, 8, 9, 3, 0];
let array2 = [34, 6, 87, 2, 9, 0, 3];
let array3 = [-9, 8, 0, 12, 5, 9, 3];

function permainanKecil() {
  console.log('array1');
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 3 == 0) {
      array1[i] = 'hihi';
    }
    console.log(array1[i]);
  }

  console.log('\narray2');
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 3 == 0) {
      array2[i] = 'hihi';
    }
    console.log(array2[i]);
  }

  console.log('\narray3');
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 3 == 0) {
      array3[i] = 'hihi';
    }
    console.log(array3[i]);
  }
}

permainanKecil();
