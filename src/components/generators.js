function* sayHiGenerator() {
  yield 'cool';
  console.log('ready');
  yield 'TS';
  yield 'JAVA';
  yield 'Kotlin';
  return 'js';
}

const resultgenerator = sayHiGenerator();
console.log(resultgenerator.next());
console.log(resultgenerator.next());

const resultGeneratorForOf = sayHiGenerator();

for (const iterator of resultGeneratorForOf) {
  console.log(iterator);
}

function* newGenerator() {
  yield 'JS';
  const result = yield 'TS';
  return result;
}
