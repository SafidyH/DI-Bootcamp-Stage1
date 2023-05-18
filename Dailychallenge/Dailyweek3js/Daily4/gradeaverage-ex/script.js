function calculateAverage(gradesList) {
    const sum = gradesList.reduce((total, grade) => total + grade, 0);
    const average = sum / gradesList.length;
    return average;
  }
  
  function determinePassingStatus(average) {
    console.log("The average grade is:", average.toFixed(2));
    
    if (average >= 65) {
      console.log("Congratulations! You passed the course.");
    } else {
      console.log("Sorry, you failed the course. Please repeat it.");
    }
  }
  
  function findAvg(gradesList) {
    const average = calculateAverage(gradesList);
    determinePassingStatus(average);
  }
  
  const grades = [80, 75, 90, 85];
  findAvg(grades);