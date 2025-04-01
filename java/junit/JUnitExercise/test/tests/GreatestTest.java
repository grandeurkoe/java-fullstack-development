package tests;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Greatest;

import static org.junit.jupiter.api.Assertions.*;

class GreatestTest {

    @Test
    @DisplayName("Pass Integer Values")
    void checkIntegerValues() {
        assertAll(
                () -> assertEquals(Integer.MAX_VALUE, Greatest.greatest(1, 2, Integer.MAX_VALUE), "Greatest number is Integer.MAX_VALUE."),
                () -> assertEquals(5, Greatest.greatest(5, Integer.MIN_VALUE, 1), "Greatest Value is 5."),
                () -> assertEquals(-1, Greatest.greatest(-5, -1, -2), "Greatest Value is -1.")
        );
    }

    @Test
    @DisplayName("Pass Negative Values")
    void checkNegativeValues() {
        assertAll(
                () -> assertEquals(0, Greatest.greatest(-5, 0, -2), "Greatest Value is 0."),
                () -> assertNotEquals(-1, Greatest.greatest(-5, -2, 0), "Greatest Values is not -1.")
        );
    }

    @Test
    @DisplayName("Pass Decimal Values")
    void checkDecimalValues() {
        Object a = 2.5;
        Object b = 5;
        Object c = 3;
        if (!(a instanceof Integer) || !(b instanceof Integer) || !(c instanceof Integer)) {
            fail("Expected integers, but received: Double.");
        }
    }

    @Test
    @DisplayName("Pass String Values")
    void checkStringValues() {
        Object a = "2";
        Object b = 5;
        Object c = 3;
        if (!(a instanceof Integer) || !(b instanceof Integer) || !(c instanceof Integer)) {
            fail("Expected integers, but received: String.");
        }
    }
}