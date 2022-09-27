export function markUpSelect(arr, current) {
  return arr
    .map(({ cc, rate, txt }) => {
      if (cc === current) {
        return `<option class="option" value="${rate}" selected>${cc}</option>`;
      }
      return `<option class="option" value="${rate}">${cc}</option>`;
    })
    .join('');
}
