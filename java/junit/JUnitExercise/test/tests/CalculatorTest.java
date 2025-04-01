package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Calculator;

import static org.junit.jupiter.api.Assertions.*;
class CalculatorTest {
    Calculator calculator;

    @BeforeEach
    void setCalculator() {
        calculator = new Calculator();
    }

    @Test
    @DisplayName("Pass Integer Values")
    void checkIntegerValues() {
        int num1 = 20;
        int num2 = 2;
        assertAll(
                () -> assertEquals(num1 + num2, calculator.add(num1, num2)),
                () -> assertEquals(num1 - num2, calculator.subtract(num1, num2)),
                () -> assertEquals(num1 * num2, calculator.multiply(num1, num2)),
                () -> assertEquals(num1 / num2, calculator.divide(num1, num2))
        );
    }

    @Test
    @DisplayName("Pass Integer and Decimal Values.")
    void checkDataType() {
        Object num1 = 2;
        Object num2 = 2.5;
        if (!(num1 instanceof Integer)) {
            fail("Expected Integer(num1), but received Double.");
        } else if (!(num2 instanceof Integer)) {
            fail("Expected Integer(num2), but received Double.");
        }
    }

    @Test
    @DisplayName("Divide by Zero")
    void divideByZero() {
        int num1 = 5;
        int num2 = 0;
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(num1, num2);
        });
    }
}