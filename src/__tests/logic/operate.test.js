import operate from '../../logic/operate';

test('Addition', () => {
  expect(operate('2', '3', '+')).toBe('5');
});
test('Subtraction', () => {
  expect(operate('5', '3', '-')).toBe('2');
});

test('Multiplication', () => {
  expect(operate('4', '2', 'x')).toBe('8');
});

test('Division', () => {
  expect(operate('8', '4', '÷')).toBe('2');
});

test('Division by zero', () => {
  expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
});
