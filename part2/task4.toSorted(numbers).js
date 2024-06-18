const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a,b) => a - b);

const descendingReleaseDates = releaseDates.toSorted((a,b) => b - a);