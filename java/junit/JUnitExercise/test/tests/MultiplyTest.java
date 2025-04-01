package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Multiply;

import static org.junit.jupiter.api.Assertions.*;

class MultiplyTest {
    Multiply multiply;

    @BeforeEach
    void setMultiply() {
        multiply = new Multiply();
    }

    @Test
    @DisplayName("Pass Test Case and Return to Console")
    void toConsole() {
    	double expected = 2;
    	double actual = multiply.multiply(2, 1);
    	if (expected == actual) {
    		System.out.println("true");
    	} else {
    		System.out.println("false");
    	}
    	assertEquals(expected, actual);
    }
    
    @Test
    @DisplayName("Check Positive Values")
    void checkPositiveValues() {
        assertEquals(4, multiply.multiply(4, 1));
    }

    @Test
    @DisplayName("Check Negative Values")
    void checkNegativeValues() {
        assertAll(
                () -> assertEquals(6, multiply.multiply(-2, -3)),
                () -> assertEquals(-6, multiply.multiply(-2, 3))
        );
    }

    @Test
    @DisplayName("Check Decimal Values")
    void checkDecimalValues() {
        assertEquals(1.56, multiply.multiply(1.2, 1.3));
    }

    @Test
    @DisplayName("Check For Zero")
    void checkForZero() {
        assertEquals(0, multiply.multiply(2, 0));
    }

}