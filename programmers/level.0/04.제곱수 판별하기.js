// 내 풀이
function solution(n) {
    // sqrt:  숫자의 제곱근을 반환
    // result에 n의 제곱근을 넣어줌
    let result = Math.sqrt(n);
    // result의 제곱이 n과 같으면 1, 아니면 2 리턴
    // 근데 그냥 result * result하니까 테스트코드 2개 통과안됨 개빢
    // 잰님이랑 얘기해보니 소수점이 무한으로 간거같아서 floor처리 해주니까 넘어감 헤헤
    return Math.floor(result) * Math.floor(result) === n ? 1 : 2;
}

// 다른 사람 풀이 분석
function solution(n) {
    // Number.isInteger: 주어진 값이 정수인지 판별
    // n의 제곱근이 정수면 1, 아니면 2
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
