// 내 풀이
function solution(s1, s2) {
    // 값을 담아줄 result 선언
    let result = 0;
    // 길이가 다르기때문에, 이중 반복문으로 선언
    // s2[i]에 s1 인덱스드를 비교
    for (let i = 0; i < s2.length; i++) {
        for (let j = 0; j < s1.length; j++) {
            // s2[i]와 s1[j]가 같으면 result에 + 1 해주기
            if (s2[i] === s1[j]) {
                result += 1;
            }
        }
    }
    return result;
}

// 다른 사람 풀이 분석
function solution(s1, s2) {
    // filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
    // includes: 배열이 특정 요소를 포함하고 있는지 판별
    // s2에 포함되어있는 s1의 인덱스를 뽑아 새로운 배열을 만들어줌
    let result = s1.filter((x) => s2.includes(x));
    // 그 배열의 길이를 리턴
    return result.length;
}
