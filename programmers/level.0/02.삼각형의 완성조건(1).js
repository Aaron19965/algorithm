// 내 풀이
function solution(sides) {
    // result에 오름차순으로 정렬한 배열 넣어주기
    let result = sides.sort((a, b) => a - b);
    // 만약 0번째, 1번째 인덱스를 더한 값이 2번째 인덱스보다 크면 1 리턴, 아니면 2 리턴
    if (result[0] + result[1] > result[2]) return 1;
    else return 2;
}

// 다른 사람 풀이 분석
function solution(sides) {
    // result에 오름차순으로 정렬한 배열 넣어주기
    let result = sides.sort((a, b) => a - b);
    // 0번째, 1번째 인덱스를 더한 값이 2번째 인덱스보다 크면 1 리턴, 아니면 2 리턴을 삼항연산자로 표현
    return result[0] + result[1] > result[2] ? 1 : 2;
}
