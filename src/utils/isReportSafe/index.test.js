import isReportSafe  from ".";

test('Increasing within max diff', () => {
  expect(
    isReportSafe([1, 2, 3, 4, 5], 1)
  ).toBe(true);

  expect(
    isReportSafe([1, 3, 5, 7, 9], 2)
  ).toBe(true);
});

test('Increasing beyond max diff', () => {
  expect(
    isReportSafe([1, 4, 7, 10], 2)
  ).toBe(false);

  expect(
    isReportSafe([4, 8, 10], 2)
  ).toBe(false);
});


test('decreasing within max diff', () => {
  expect(
    isReportSafe([5, 4, 3, 2,  1], 3)
  ).toBe(true);

  expect(
    isReportSafe([9, 4, 1], 6)
  ).toBe(true);
});

test('decreasing beyond max diff', () => {
   expect(
    isReportSafe([6, 3,  1], 1)
  ).toBe(false);

  expect(
    isReportSafe([9, 4, 1], 2)
  ).toBe(false);
});

test('not increasing nor decreasing', () => {
  expect(
    isReportSafe([1,1,1], 9)
  ).toBe(false);

  expect(
    isReportSafe([9,9,9], 9)
  ).toBe(false);
});

test('increasing then decreasing', () => {
  expect(
    isReportSafe([1, 2, 1], 9)
  ).toBe(false);

  expect(
    isReportSafe([5, 9, 7], 9)
  ).toBe(false);
});

test('decreasing then increasing', () => {
  expect(
    isReportSafe([8, 2, 4], 9)
  ).toBe(false);

  expect(
    isReportSafe([5, 4, 7], 9)
  ).toBe(false);
});

test('decreasing then same value', () => {
  expect(
    isReportSafe([8, 2, 2, 4], 9)
  ).toBe(false);

  expect(
    isReportSafe([5, 4, 4, 7], 9)
  ).toBe(false);
});

test('increasing then same value', () => {
  expect(
    isReportSafe([8, 9, 9], 9)
  ).toBe(false);

  expect(
    isReportSafe([5, 6, 6, 7], 9)
  ).toBe(false);
});