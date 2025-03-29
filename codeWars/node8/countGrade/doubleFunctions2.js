const countGrade = (scores) => 
  (student => ({ S: student(100), A: student(90, 100), B: student(80, 90), C: student(60, 80), D: student(0, 60), X: student(-1) }))
    ((min, max = min + 1) => scores.filter(s => s >= min && s < max).length)