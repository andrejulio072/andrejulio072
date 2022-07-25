function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function soma(a+b) {
  return a+b;
}

function subtrai(a-b) {
  return a-b;
}

function multiplica(a*b) {
  return a*b;
}
function divide(a/b) {
  return a/b;
}

function  potencia(a**b) {
  return a**b; // a elevado a b = a**b
}

// raiz quadrada
function raiz(a**(1/b)) {
  return a**(1/b);
}

function calcula(a, b, c) {
  return a+b+c;
}
