const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
    }

    // Variables
    const pi = 3.142;
    let name = 'Elsie';
    let age = 219;
    let present = false;
    console.log(name);
    

    // Objects
    const car = {
        numberPlate: 'GR-345-24',
        model: 'Bentley',
        color: 'black',
        weight: 50,
        weightUnit: 'KG',
        owner: {
            name: 'Elsie',
            driver: {
                name: 'Karl'
            }
        }

    }
    console.log(car.numberPlate);
    console.log(car.owner.driver.name);
    console.log(car);

    car.owner.driver.name = 'Eliza';
    console.log(car.owner.driver.name);

    // Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 50,
    shares: 20,
    retweets: 50
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[0];
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // if/Else
  if(today.getHours() >= 16) {
    console.log('class has ended');
  } else{
    console.log('class is in session');
  }
  
  // For Loop
  for(let i = 0; i <= 9; i++){
    console.log('notify friends!', i);
  }
  
  // Functions
// Defining functions
function login(username, password) {
  if(username == 'elsie' && password =='1234') {
     return 'User is logged in!';
  }  else if (username!='elsie') {
    return 'Invalid username'
  } else if(password!=1234) {
    return 'Invalid password'
  }  else {
    return 'Invalid username or password';
  }
 }
 //  Invoking functions
 login('elsie', '1234');
 
 // Basic Arithmetic
 12 + 34;
 45 - 16;
 7  * 12;
 78 / 4;
 12 % 5
 
 // Comparison operators
 2 === 2;
 3 !== 2;
 3 !== 3;
 
 // Built-in Math Functions
 Math.round(37/24);
 Math.floor(37/24) ;
 Math.ceil(37/24) ;
 Math.random();
 Math.max(78, 12, 98, 14, 89, 13 );
 
 // Order of operations
 1 * 2 + 3 - 4 / 2 + 2**2;  
 
 // Handling user inputs
 1200+ Number('250')
 
  
  
  
