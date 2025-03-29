function roundIt(n) {
  const [left, right] = String(n).split(".")
  if (left.length < right.length) return Math.ceil(n)
  if (left.length > right.length) return Math.floor(n)
  return Math.round(n)

}