const getAverage = (marks) =>
  Math.floor(marks.reduce((x, y) => x + y, 0) / marks.length);
