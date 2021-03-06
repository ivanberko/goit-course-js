
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => new Promise((resolve) => {
  setTimeout(
    () => resolve(
      allUsers.map((user) => (user.name === userName ? { ...user, active: !user.active } : user)),
    ),
    3000,
  );
});

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
