# Vanilla.JS with Nomad Coder Nico

- 모든 것의 시작은 데이터 타입이다.
- 데이터 타입은 자바스크립트가 이해할 수 있는 데이터의 종류들이다.
- Number, "string" or 'string', Boolean... 등등등
- 자바스크립터를 통해 데이터를 variable(변수)에 저장할 수 있는데 이는 두 가지 방법이 있다.

1.  const a = 5;
    console.log(a);
2.  let isJijiFat = true;
    isJijiFat = false;
    \*const와 let의 차이는 데이터를 업데이트 할 수 있느냐 없는냐이다.
    항상 규칙을 기억해야한다. 항상 const사용하되 가끔씩 필요하다면 let을 사용한다.
    절대 절대로 var를 사용해서는 안된다.
    이유는 즉슨, var는 프로그래머의 의도를 유추하기 어렵게 만들기 때문 (협업이 어려워짐.)

- 데이터 타입에 대해서 배우고나서는 어떻게 데이터를 더 나은 방법으로 정리 할 수 있는지
- 때때로 하나의 variable 안에 많은 수의 데이터를 가지고 싶을 수 있는데 이럴 때는 Array를 사용
- 가장 좋은 예시 중 하나는 한 주의 요일을 저장 하는 것

1.  const days = ["mon", "tue", "tue", "thu", "fri", "sat"];

- 컴퓨터는 항상 0부터 시작한다.

1.  console.log(days[4]); => "fri"

- Array는 데이터값을 변경할 수 있다.

1.  days[2] = "wed";
2.  console.log(days) => mon, tue, wed, thu, fri, sat

- Array는 데이터 값을 추가할 수도 있다.

1.  days.push("sun"); => mon, tue, wed, thu, fri, sat, sun
