// current time
let t = Date.now();

// function
async function Sleep(millis) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });

  return p;
}

// promise
Sleep(100).then(() => console.log(Date.now() - t));

// Output: 100
// console.log(Date.now() - (t - 100));
