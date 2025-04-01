package tests;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Factorial;

import static org.junit.jupiter.api.Assertions.*;

class FactorialTest {
    @Test
    @DisplayName("Pass Natural Number")
    void checkNaturalNumber() {
        assertEquals(120, Factorial.factorial(5), "5! = 120");
    }
    @Test
    @DisplayName("Return a Large Value")
    void checkLargeNaturalNumber() {
        assertEquals(479_001_600, Factorial.factorial(12), "12! = 479001600");
    }
    @Test
    @DisplayName("Check Boundary Value")
    void checkBoundaryValue() {
        assertEquals(1, Factorial.factorial(0), "O! = 1");
    }

    @Test
    @DisplayName("Pass Negative Number")
    void checkNegativeNumber() {
        long factorialResult = Factorial.factorial(-2);
        String resultMessage = "";
        if (factorialResult < 0) {
            resultMessage += "Invalid Number(" + factorialResult + ")";
        }
        assertEquals("Invalid Number(" + factorialResult + ")", resultMessage);
    }

    @Test
    @DisplayName("Pass Decimal Number")
    void checkDecimalNumber() {
        Object num = 2.5;
        if (!(num instanceof Long)) {
            fail("Expected Long, but received: Double.");
        }
    }
}