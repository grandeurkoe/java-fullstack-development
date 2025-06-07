package basics;

public class Strings {

	public static void main(String[] args) {
		int myInteger = 78;
		
		// Strings are non-primitive data types.
		String myText = "Hello!";
		String mySpace = " ";
		String mySecondText = "Who's there?";
		String question = myText + mySpace + mySecondText;
		
		System.out.println(question);
		
		System.out.println("I'm" + " " + "Vishal!");
		
		System.out.println("The integer is " + myInteger + ".");
	}

}
