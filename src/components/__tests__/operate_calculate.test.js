import '@testing-library/jest-dom/extend-expect';
import calculate from '../../logic/calculate';
import operate from '../../logic/operate';

describe('Functions test', () => {
  test('calculate.js test', () => {
    const initialItems = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: 0, next: null, operation: null },
      );
    } else if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: 0.0, next: null, operation: null },
      );
    } else if (buttonName === '1') {
      expect(calculate(initialItems, buttonName)).toEqual(
        { total: null, next: '1' },
      );
    } else if (buttonName === '=') {
      expect(calculate(initialItems, buttonName)).toEqual({});
    }
  });

  test('operate.js addition test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '+';

    expect(operate(numOne, numTwo, oper)).toBe('3');
  });

  test('operate.js subtraction test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '-';

    expect(operate(numOne, numTwo, oper)).toBe('-1');
  });

  test('operate.js multiplication test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = 'x';

    expect(operate(numOne, numTwo, oper)).toBe('2');
  });

  test('operate.js division test', () => {
    const numOne = '1';
    const numTwo = '2';
    const oper = '÷';

    expect(operate(numOne, numTwo, oper)).toBe('0.5');
  });

  test('operate.js division by 0 test', () => {
    const numOne = '1';
    const numTwo = '0';
    const oper = '÷';

    expect(operate(numOne, numTwo, oper)).toEqual("Can't divide by 0.");
  });

  test('operate.js remainder test', () => {
    const numOne = '5';
    const numTwo = '2';
    const oper = '%';

    expect(operate(numOne, numTwo, oper)).toEqual('1');
  });

  test('operate.js remainder by 0 test', () => {
    const numOne = '1';
    const numTwo = '0';
    const oper = '%';

    expect(operate(numOne, numTwo, oper)).toEqual("Can't find modulo as can't divide by 0.");
  });
});
