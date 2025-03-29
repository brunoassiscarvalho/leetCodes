const sortIt = arr =>
  (obj => [...arr].sort((a, b) => obj[a] - obj[b] || b - a))
  (arr.reduce((pre, val) => (pre[val] = -~pre[val], pre), {}));



  const sortIt = ([...arr]) =>
    ((count) => arr.sort((a, b) => count[a] - count[b] || b - a))(
      arr.reduce((acc, v) => ((acc[v] = ++acc[v] || 1), acc), {})
    );