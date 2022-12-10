// 내 풀이
function solution(hp) {
    const a = 5
    const b = 3
    const c = 1
    let result = 0
    
  result = parseInt(hp / a)
  hp = hp - result * a
  // console.log(hp) // 3 남음
  // console.log(result) // 나누기 4
  
  result = result + parseInt(hp / b)
  hp = hp - (b * parseInt(hp / b))
  // console.log(hp) // 0 남음
  // console.log(result) // 나누기 4 + 1
  
  result = result + parseInt(hp / c)
  return result
}

// 다른 사람 풀이 분석
function solution(hp) {
    // hp를 5로 나눈 값 + hp를 5로 나눠서 나온 나머지 값에 3을 나눈 값 + hp를 5로 나눠서 나온 나머지 값을 3으로 나누고 나온 나머지 값
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}