function countGrade(scores) {
  const score = x => x >= 0 ? 'DDDDDDCCBAS'[~~(x / 10)] : 'X'
  return scores.reduce((grades, s) => (grades[score(s)] += 1, grades), { S:0, A:0, B:0, C:0, D:0, X:0 })
}