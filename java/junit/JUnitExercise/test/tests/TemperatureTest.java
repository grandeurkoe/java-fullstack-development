package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import logic.Temperature;

import static org.junit.jupiter.api.Assertions.*;

class TemperatureTest {
    Temperature fahrenheitToCelcious;

    @BeforeEach
    void setFahrenheitToCelcious() {
        fahrenheitToCelcious = new Temperature();
    }

    @Test
    @DisplayName("Pass Integer Values")
    void checkInteger() {
        assertEquals(0, fahrenheitToCelcious.convertToCelcius(32));
    }

    @Test
    @DisplayName("Pass Decimal Values")
    void checkDecimal() {
        assertEquals(38, fahrenheitToCelcious.convertToCelcius(100), 0.5);
    }

    @Test
    @DisplayName("Check Fahrenheit Range")
    void checkFahrenheitRange() {
        double fahrenheit = -51;
        if (fahrenheit < -50 || fahrenheit > 200) {
            fail("Expected in range(-50, 200), but received: Out of range.");
        }
    }
}