// Program to obtain the length of a provided string (without utilizing the length property).

import java.util.Scanner;

public class CalculateLengthOfString {
    public static void main(String[] args) {
        String string;
        int length = 0;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter a string: ");
        string = sc.nextLine();

        sc.close();

        for(@SuppressWarnings("unused") char each_char: string.toCharArray())
        {
            length++;
        }

        System.out.println("Original String: " + string);
        System.out.println("Length of the given string: " + length);
    }
}
