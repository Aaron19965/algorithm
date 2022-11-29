// 내 풀이
function solution(array) {
    // array 배열을 오름차순으로 나열한 result 배열을 만듬
    let result = array.sort((a, b) => a - b);
    // 그 배열을 반으로 나눈 숫자 자리에 있는 인덱스를 리턴해줌
    return result[Math.floor(result.length / 2)];
}

// 다른 사람 풀이 분석
// 위 풀이를 한 줄로 표현, Math.floor 대신 parseInt 사용
function solution(array) {
    // ParseInt: 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
    return array.sort((a, b) => a - b)[parseInt(array.length / 2)];
}
