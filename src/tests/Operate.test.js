import operate from '../Logic/Operate';

/* eslint-disable quotes */

test('Test oparations', () => {
  expect(operate(5, 10, "+")).toEqual("15");
  expect(operate(5, 6, "-")).toEqual("-1");
  expect(operate(3, 4, "x")).toEqual("12");
  expect(operate(30, 5, "÷")).toEqual("6");
  expect(operate(30, 0, "÷")).toEqual("Can't divide by 0.");
  expect(operate(5, 4, "%")).toEqual("1");
  expect(operate(5, 0, "%")).toEqual("Can't find modulo as can't divide by 0.");
  expect(() => { operate(5, 7, ";"); }).toThrow();
});
