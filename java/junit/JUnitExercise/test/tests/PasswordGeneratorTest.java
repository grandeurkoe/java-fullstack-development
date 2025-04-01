package tests;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Random;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import logic.PasswordGenerator;

class PasswordGeneratorTest {
	PasswordGenerator generator;
	public String name = "Vishal Kushwaha";
	String nameFirstThree = name.substring(0, 3);
	char[] specialCharacters = {
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
            '{', '}', '[', ']', '|', ':', ';', '\'', '"', '<', '>', ',', '.', '?', '/'
        };
    char[] integers = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};

	
	@BeforeEach
	void setPasswordGenerator() {
		generator = new PasswordGenerator();
	}

	@Test
	void test() {
		StringBuilder builder = new StringBuilder();
		String specialInteger;
		Random random = new Random();
		int numSpecialInteger = random.nextInt(10) + 3;
		int pickSpecialInteger;
		for (int i = 1; i <= numSpecialInteger; i++) {
			pickSpecialInteger = random.nextInt(2);
			if (pickSpecialInteger == 0) {
				builder.append(specialCharacters[random.nextInt(specialCharacters.length)]);
			} else {
				builder.append(integers[random.nextInt(integers.length)]);
			}
		}
		specialInteger = builder.toString();
		String generatedPassword = generator.generate(nameFirstThree, specialInteger);
		System.out.println(generatedPassword);
		assertAll(
				() -> assertEquals(true, generatedPassword.matches("^[A-Z][a-zA-Z]{2}\\d+$"), "Password should start with an uppercase letter followed by two letters and end with one or more digits."),
				() -> assertEquals(true, generatedPassword.matches("^[A-Z][a-zA-Z]{2}[!@#$%^&*()\\-_=+{}\\[\\]\\\\|:;\"'<>,.?/]*$"),  "Password should start with an uppercase letter followed by two letters and may contain special characters."),
				() -> assertEquals(true, generatedPassword.matches("^[A-Z][a-zA-Z]{2}[!@#$%^&*()\\-_=+{}\\[\\]\\\\|:;\"'<>,.?/0-9]*$"), "Password should start with an uppercase letter followed by two letters and may contain special characters or digits.")
		);
	}

}
