function solution(bandage, health, attacks) {
  let currentDu = 0
  let currTime = 0
  let currHealth = health

  while (currHealth > 0 && attacks.length > 0) {
    currTime++
    if (attacks[0][0] - currTime === 0) { // 공격이다!
      currHealth -= attacks[0][1]
      attacks.shift()
      currentDu = 0
    } else {
      currHealth = Math.min(health, currHealth + bandage[1])
      currentDu++
      if (currentDu === bandage[0]) {
        currHealth = Math.min(health, currHealth + bandage[2])
        currentDu = 0
      }
    }
  }

  return currHealth > 0 ? currHealth : -1
}

console.log(solution([1, 1, 1],	5,	[[1, 2], [3, 2]]))