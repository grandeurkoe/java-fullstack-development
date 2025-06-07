package basics;

import java.util.Scanner;

public class Switch {

	public static void main(String[] args) {
		String command;
		Scanner sc = new Scanner(System.in);

		System.out.print("Enter a command: ");
		command = sc.nextLine();

		switch (command) {
		case "start":
			System.out.println("Machine started!");
			break;
		case "stop":
			System.out.println("Machine stopped!");
			break;
		default:
			System.out.println("Invalid command!");
		}
		
		sc.close();
	}

}
