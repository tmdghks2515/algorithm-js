// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42862

// [나의 답]
function solution(n, lost, reserve) {
  let answer = 0;

  for (let i=1; i<=n; i++) {
    const lostIdx = lost.indexOf(i)
    const reserveIdx = reserve.indexOf(i)

    if (lostIdx > -1 && reserveIdx > -1) {
      reserve.splice(reserveIdx, 1)
      lost.splice(lostIdx, 1)
    }
  }

  answer = n - lost.length

  for (let i=1; i<=n; i++) {
    const lostIdx = lost.indexOf(i)

    if (lostIdx > -1) {
      const prevIdx = reserve.indexOf(i-1)
      const nextIdx = reserve.indexOf(i+1)
      if (prevIdx > -1) {
        reserve.splice(prevIdx, 1)
        lost.splice(lostIdx, 1)
        answer++
      } else if (nextIdx > -1) {
        reserve.splice(nextIdx, 1)
        lost.splice(lostIdx, 1)
        answer++
      }
    }
  }

  return answer;
}

// [어메이징 답]
function solution2(n, lost, reserve) {
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r-a) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}
