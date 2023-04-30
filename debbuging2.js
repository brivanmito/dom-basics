function gpaPoints(grade) {
    let gpaPoints = 0;
    switch (grade) {
      case "A":
        gpaPoints = 4;
      // break removed
      case "B":
        gpaPoints = 3;
        break;
      case "C":
        gpaPoints = 2;
      default:
        gpaPoints = -1;
    }
    return gpaPoints;
  }
  
  gpaPoints("A"); // returns 3!
  gpaPoints("B"); // also returns 3
  gpaPoints("C"); // returns -1!
  gpaPoints("X"); // returns -1