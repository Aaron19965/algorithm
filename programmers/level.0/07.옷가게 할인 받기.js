// 내 풀이
function solution(price) {
    // 50만원 이상이면 price에서 price 1/5를 뺀 가격을 리턴
    if (price >= 500000) return Math.floor(price - price / 5);
    // 30만원 이상이면 price에서 price 1/10를 뺀 가격을 리턴
    else if (price >= 300000) return Math.floor(price - price * 0.1);
    // 10만원 이상이면 price에서 price 5/100를 뺀 가격을 리턴
    else if (price >= 100000) return Math.floor(price - price * 0.05);
    // 그 외(10만원 미만)에는 그냥 price 리턴
    else return price;
}

// 다른 사람 풀이 분석
function solution(price) {
    // Math.floor 대신 parseInt 사용
    // price의 80프로
    if (price >= 500000) return parseInt(price * (1 - 0.2));
    // price의 90프로
    else if (price >= 300000) return parseInt(price * (1 - 0.1));
    // price의 95프로
    else if (price >= 100000) return parseInt(price * (1 - 0.05));
    // 나머진 그냥 price
    else return price;
}
