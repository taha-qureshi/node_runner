// const readline = require('readline');
// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);
// process.stdin.on('keypress', (str, key) => {
//   if (key && key.name === 'c') {
//     process.exit();
//   } else if (key && key.name == 'enter') {
//     console.log('enter pressed')
//     console.log()
//   }  else {
//     process.stdout.write(`${str}`);
//   }
// });
// console.log('Press any key...');

console.log(process.argv[2])