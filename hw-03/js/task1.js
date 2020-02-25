
console.log('TASK1------------------------');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const showObject = (objKeys) => {
  for (const key of objKeys) {
    console.log(`${key}: ${user[key]}`);
  }
};

showObject(Object.keys(user));
