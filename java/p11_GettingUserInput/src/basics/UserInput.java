package basics;

import java.util.Scanner;

public class UserInput {

	public static void main(String[] args) {
		// Create a scanner object.
		Scanner sc = new Scanner(System.in);
		
		// Input prompt on console.
		System.out.print("Enter text: ");
		
		// Wait for the user to enter a line of text.
		String newText = sc.nextLine();
		
		System.out.printf("You entered: %s",  newText);
		sc.close();
	}

}
