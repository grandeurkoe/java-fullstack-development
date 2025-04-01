package logic;

public class VowelConsonant {
    public String checkCharacter(char character) {
        if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' ||
                character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {
            return "vowel";
        } else if (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
            return "consonant";
        } else {
            return "special character";
        }
    }
}
