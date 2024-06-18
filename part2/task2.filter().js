const getUsersWithEyeColor = (users, color) => {
    const neededUsers = users.filter(user => user.eyeColor === color);
    return neededUsers;
};


const getUsersWithAge = (users, minAge, maxAge) => {
    const neededUsers = users.filter(user => user.age > minAge && user.age < maxAge);
    return neededUsers;
  };

