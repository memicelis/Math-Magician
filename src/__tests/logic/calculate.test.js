import calculate from '../../logic/calculate.js';

describe('calculate function', () => {
  it('should handle AC(All Clear) button correctly', () => {
    const result = calculate({ total: '5', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle the "." button', () => {
    const result = calculate(
      { total: '123', next: '456', operation: '+' },
      '.'
    );
    expect(result).toEqual({ total: '123', next: '456.', operation: '+' });
  });

  it('should handle the "+/-" button', () => {
    const result = calculate(
      { total: null, next: '456', operation: null },
      '+/-'
    );
    expect(result).toEqual({ total: null, next: '-456', operation: null });
  });
});
