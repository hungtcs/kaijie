
// setTimeout(() => {
//   console.log('hello');
//   setTimeout(() => {
//     console.log('world');
//   }, 1000);
// }, 1000);

// function timout(str, time) {
//   return new Promise(
//     (resolve, reject) => {
//       setTimeout(() => {
//         console.log(str);
//         resolve(str);
//       }, time);
//     },
//   );
// }

// timout("hello", 1000)
//   .then(() => timout("word", 1000))
//   .then(() => timout("word", 1000));

// let resolved = false;

// timout("hello", 1000)
//   .then(() => {
//     if(resolved){
//       console.log('en');
//     } else {
//       resolved = true;
//     }
//   });
// timout("hello", 1000)
//   .then(() => {
//     if(resolved){
//       console.log('en');
//     } else {
//       resolved = true;
//     }
//   });


// Promise.all([
//   timout("hello", 1000),
//   timout("world", 2000),
// ]).then(([str1, str2]) => {
//   console.log(str1, str2);
// })



function error(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(flag) {
        reject(new Error('手动报错'));
      } else {
        resolve();
      }
    }, 1000);
  });
}

error()
  .then(() => console.log('1'))
  .then(() => error(true))
  .then(() => console.log('2'))
  .catch(err => console.log(`ERROR: `, err.message))
  .then(() => console.log('3'))
  .then(() => error(true))
  .catch(err => {
    throw new Error('ddd')
  })
  .catch(err => console.log(`ERROR: `, err.message))
  .then(() => console.log('4'))


Promise.resolve(1)
  .then(v => console.log(v));

Promise.reject()
  .catch(() => {});

Promise.all
Promise.any
Promise.race
