function solution(land) {
  let answer = 0;
  const groups = []

  for (let i=0; i<land.length; i++) {
    for (let j=0; j<land[i].length; j++) {
      if (land[i][j] === 0) continue
      let attachedGroups = groups.filter(b => {
        return b.blocks.some(v => (v[0] === j && v[1] === i-1) || (v[0] === j-1 && v[1] === i))
      })
      if (attachedGroups.length === 1) {
        addBlock(i, j, attachedGroups[0])
      } else if (attachedGroups.length > 1) {
        mergeGroups(i, j, attachedGroups, groups)
      } else {
        groups.push({ min: j, max: j, count: 1, blocks: [[j, i]] })
      }
    }
  }
  let answers = []
  for (let i=0; i<land[0].length; i++) {
    const arr1 = groups.filter(v => v.min <= i && v.max >= i)
    const sum = arr1.reduce((acc, v) => {
      return acc + v.count
    }, 0)
    answers.push(
      sum
    )
  }

  return Math.max(...answers)
}

const addBlock = (i, j, group) => {
  group.min = Math.min(j, group.min)
  group.max = Math.max(j, group.max)
  group.count++
  group.blocks.push([j, i])
}

const mergeGroups = (i, j, attachedGroups, groups) => {
  const newBlocks = attachedGroups.flatMap(v => v.blocks)
  newBlocks.add([j, i])
  const is = newBlocks.map(v => v[0])
  const mergedGroup = {
    min: Math.min(is),
    max: Math.max(is),
    blocks: newBlocks
  }

  groups.filter(v => !attachedGroups.includes(v))
  groups.push(mergedGroup)
}


// 덩어리 최 좌측 좌표 + 최 우측 좌표 + 사이즈

const land = [[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]

console.log(solution(land))