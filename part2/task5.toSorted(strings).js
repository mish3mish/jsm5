const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
  ];
  
  const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
  
  const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));