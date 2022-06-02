import calculate from '../Logic/Calculate';

/* eslint-disable quotes */

test('testing calculate', () => {
  expect(calculate({ total: 3, next: 5, operation: '+' }, '=')).toEqual({ next: null, operation: null, total: "8" });
  expect(calculate({ total: 4, next: 2, operation: '-' }, '=')).toEqual({ next: null, operation: null, total: "2" });
});
