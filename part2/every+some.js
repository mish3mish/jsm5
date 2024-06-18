const isEveryUserActive = (users) => {
    const neededUsers = users.every(user => user.isActive === true);
    return neededUsers;
};

const isAnyUserActive = (users) => {
    const neededUsers = users.some(user => user.isActive === true);
    return neededUsers;
  };