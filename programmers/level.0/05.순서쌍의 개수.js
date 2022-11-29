// 내 풀이
function solution(n) {
    // 결과를 넣어줄 result 선언
    let result = 0;
    // n번까지 반복문을 돌릴 때,
    for (let i = 1; i <= n; i++) {
        // 만약 n이 i로 딱 나눠지면 result +1
        if (n % i === 0) result++;
    }
    return result;
}

// 다른 사람 풀이 분석
function solution(n) {
    // 결과를 넣어줄 result 선언
    let result = 0;
    // n번의 제곱근까지 반복문을 돌릴 때,
    for (let i = 1; i < Math.sqrt(n); i++) {
        // 만약 n이 i로 딱 나눠지면 result +2(제곱이니까)
        if (n % i === 0) result += 2;
    }
    console.log(result);
    // n의 제곱근이 정수라면(마지막 100 * 1까지), result에 + 1한 값, 아니면 그냥 result
    return Number.isInteger(Math.sqrt(n)) ? result + 1 : result;
}
