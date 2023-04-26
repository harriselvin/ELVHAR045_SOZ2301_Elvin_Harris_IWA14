const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = () => {
  console.log('parameter')
  console.log('parameter')
}

function hello () {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

hello()
hello()