const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout() -- use 1000 units for time parameter

function allTheCookies(cookies) {
  setTimeout(() => {
    let x = '';
    cookies.forEach((i) => {
      x += i.name;
      x += ' ';
      document.body.innerHTML = x;
    });
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.

// Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list

function promise(cookie) {
  x = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cookie.name) {
        cookies.push(cookie);
        resolve();
      } else {
        reject(`No cookies created`);
      }
    }, 2000);
  });
  return x;
}

// Progression 6: call function using `.then`

// promise(newCookie)
//   .then((message) => {
//     allTheCookies(cookies);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// Progression 7: creating a new async function
async function asyncPromise() {
  try {
    await promise(newCookie);
    allTheCookies(cookies);
  } catch (error) {
    console.error(error.message);
  }
}

// calling the new async function
asyncPromise();
