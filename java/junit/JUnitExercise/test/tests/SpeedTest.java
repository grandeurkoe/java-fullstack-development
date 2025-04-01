package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Speed;

import static org.junit.jupiter.api.Assertions.*;

class SpeedTest {
    Speed speed;

    @BeforeEach
    void setSpeed() {
        speed = new Speed();
    }

    @Test
    @DisplayName("Pass Integer Values")
    void checkInteger() {
        assertEquals(20, speed.speed(100, 5));
    }

    @Test
    @DisplayName("Pass Decimal Values")
    void checkDecimal() {
        assertEquals(10.2, speed.speed(25.5, 2.5));
    }
}