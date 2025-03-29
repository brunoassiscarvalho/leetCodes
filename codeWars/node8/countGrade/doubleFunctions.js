const countGrade = scores =>
  (fn => ({S: fn(100), A: fn(90, 100), B: fn(80, 90), C: fn(60, 80), D: fn(0, 60), X: fn(-1)}))
  ((min, max = min + 1) => scores.filter(val => val >= min && val < max).length);