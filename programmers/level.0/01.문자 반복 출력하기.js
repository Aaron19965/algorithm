// 내 풀이
function solution(my_string, n) {
    // result로 답을 넣어줄 빈 문자열을 선언해줌
    let result = "";
    // 반복문을 돌려서 문자열 하나하나 돌게함
    for (let i = 0; i < my_string.length; i++) {
        // 그리고 이중 반복문을 돌려서 my_string 문자열 한개를 돌 때,
        // n번만큼 my_string[i]를 붙여서 return 해준다
        for (let j = 0; j < n; j++) {
            result += my_string[i];
        }
    }
    return result;
}

// 다른 사람 풀이 분석
function solution(my_string, n) {
    // 1. split('')을 사용해서 문자열을 한개씩 쪼개 배열에 넣어줌
    // reduce : 반복문, acc : 누산기, 반복문 돌리고 난 후 결과를 저장
    // cur: 현재 값
    // 2. reduce(acc, cur => acc + cur)을 통해 누산기에 현재 값을 계속 더해준다
    // repeat: 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
    // 3. cur.repeat((n), '')로 n번만큼 반복해서 붙인 새로운 문자열을 반환해준다
    return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n, ""));
}
