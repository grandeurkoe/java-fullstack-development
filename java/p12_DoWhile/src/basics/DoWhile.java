package basics;

import java.util.Scanner;

public class DoWhile {

	public static void main(String[] args) {
		int myNumber;
		Scanner sc = new Scanner(System.in);
		
		do {
			System.out.print("Enter a number: ");
			myNumber = sc.nextInt();
		} while(myNumber != 5);
		
		sc.close();
	}

}
