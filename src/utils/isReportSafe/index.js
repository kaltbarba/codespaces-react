export default (report, maxDiff) => {
  let reportDirection = 0;

  for (let i = 0; i < report.length - 1; i++) {
    const currentDiff = report[i + 1] - report[i];
    const currentDirection = Math.sign(currentDiff);

    if (currentDirection === 0 || Math.abs(currentDiff) > maxDiff) {
      return false
    }
    
    if (reportDirection === 0) {
        reportDirection = currentDirection
    } else if (reportDirection !== currentDirection) {
      return false
    }
  }
  
  return true
};
