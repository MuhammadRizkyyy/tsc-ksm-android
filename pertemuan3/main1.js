let name1 = {
  name: 'Tono',
  age: 20,
  nilai: [90, 85, 88],
};

let name2 = {
  name: 'Tini',
  age: 22,
  nilai: [78, 82, 85],
};

let mergedStudent = {
  name: name1.name + ' dan ' + name2.name,
  age: (name1.age + name2.age) / 2,
  grades: [...name1.nilai, ...name2.nilai],
};

console.log(mergedStudent);
