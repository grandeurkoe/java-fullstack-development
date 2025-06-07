package basics;

public class Variables {
	public static void main(String[] args) {
		// Variable declaration.
		int firstNumber;
		
		// Variable initialization.
		firstNumber = 25;
		
		// Variable declaration and initialization on the same line.
		int secondNumber = 35;
		
		/*
		 * In Java, there are 8 primitive types of variables.
		 * data type ~ size ~ range ~ default values
		 * byte ~ 8 bit (1 byte) ~ -128 to 127 ~ 0
		 * short ~ 16 bit ~ -32768 to 32767 ~ 0
		 * int ~ 32 bit ~ -2^31 to 2^31 - 1 ~ 0
		 * long ~ 64 bit ~ -2^63 to 2^63 - 1 ~ 0L
		 * float ~ 32 bit ~ approximately 6-7 digits ~ 0.0f
		 * double ~ 64 bit ~ approximately 15 digits ~ 0.0d
		 * char ~ 16 bit ~ 0 to 65535 ~ \u0000
		 * boolean ~ JVM dependent ~ true or false ~ false
		 */
		
		// If you don't put  an f at the end of a floating point number then it is treated as a double.
		double thirdNumber = 3.26789;
		float fourthNumber = 326.85f;
		
		char firstCharacter = 'y';
		
		boolean firstBool = true;
		
		System.out.println(firstNumber);
		System.out.println(secondNumber);
		System.out.println(thirdNumber);
		System.out.println(fourthNumber);
		System.out.println(firstCharacter);
		System.out.println(firstBool);
	}
}
