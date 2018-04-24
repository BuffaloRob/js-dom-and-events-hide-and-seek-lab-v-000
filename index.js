function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list')
  for (let i=0; i<rank.length; i++) {
    rank[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0]
  }
  return node
}