// 내 풀이
function solution(my_string) {
    // 숫자만 넣을 새 배열 result 선언
    let result = [];
    // 숫자의 합을 넣을 answer 선언
    let answer = 0;
    // my_string을 도는 동안
    for (i = 0; i < my_string.length; i++) {
        // 만약 result[i]가 숫자라면, result에 넣어줘. 숫자형으로
        if (!isNaN(my_string[i])) result.push(Number(my_string[i]));
    }
    // 숫자만 넣은 result 배열을 도는 동안
    for (let i = 0; i < result.length; i++) {
        // answer에 넣어줘. 그 모든 합을
        answer += result[i];
    }
    return answer;
}

// 다른 사람 풀이 분석
function solution(my_string) {
    // replaceAll : 모든 일치 항목이 포함된 새 문자열을 반환
    // /[^\d]/g: 숫자만 체크하는 정규식
    // reduce: 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
    // 정규식으로 숫자로만 이루어진 새 문자열을 반환하고, split을 사용해서 한개씩 쪼개줌, map을 사용해서 배열을 돌면서 문자열마다 +를 붙여줘서 문자열을 숫자로 바꿔줌, reduce를 사용해서 배열의 인덱스들을 다 합춘 결과값을 리턴 해준다.
    return my_string
        .replaceAll(/[^\d]/g, "")
        .split("")
        .map((v) => +v)
        .reduce((acc, cur) => acc + cur);
}
