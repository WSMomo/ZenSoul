export function formatNumber(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}
