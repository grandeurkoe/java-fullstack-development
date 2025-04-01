package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.SimpleInterest;

import static org.junit.jupiter.api.Assertions.*;

class SimpleInterestTest {
    SimpleInterest simpleInterest;

    @BeforeEach
    void setSimpleInterest() {
        simpleInterest = new SimpleInterest();
    }

    @Test
    @DisplayName("Pass Integer Values")
    void checkInteger() {
        assertEquals(2500, simpleInterest.simpleInterest(10_000, 5, 5));
    }

    @Test
    @DisplayName("Pass Decimal Values")
    void checkDecimal() {
        assertEquals(625.03125, simpleInterest.simpleInterest(10_000.5, 2.5, 2.5));
    }
}