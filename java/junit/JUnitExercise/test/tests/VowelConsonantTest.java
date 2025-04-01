package tests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import logic.VowelConsonant;

import static org.junit.jupiter.api.Assertions.*;

class VowelConsonantTest {
    VowelConsonant vowelConsonant;

    @BeforeEach
    void setVowelConsonant(){
        vowelConsonant = new VowelConsonant();
    }

    @ParameterizedTest
    @CsvSource({
            "a, vowel",
            "E, vowel",
            "i, vowel",
            "O, vowel",
            "u, vowel",
            "b, vowel",
            "C, consonant",
            "d, consonant",
            "Z, consonant",
            "1, special character",
            "@, special character"
    })
    public void checkVowelOrConstant(char input, String expected) {
        String actual = vowelConsonant.checkCharacter(input);
        assertEquals(expected, actual, "Expected " + expected +", but received: " + actual + ".");
    }
}