// Program to count and print all the duplicates in the input string.

import java.util.Arrays;
import java.util.Scanner;

public class CountAndPrintDuplicates {
    public static void main(String[] args) {
        String string;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter a string: ");
        string = sc.nextLine();

        sc.close();

        int length = string.length();
        char string_to_char[] = new char[length];
        string_to_char = string.toCharArray();

        Arrays.sort(string_to_char);

        char current_char = string_to_char[0];
        int count = 0;

        System.out.println("Original String: " + string);
        System.out.println("The duplicate characters and their counts are: ");
        for(int i = 0; i < length; i++)
        {
            if (string_to_char[i] != current_char)
            {
                if (count != 1)
                {
                    System.out.println("\'" + current_char + "\' appears " + count + " times.");
                }
                current_char = string_to_char[i];
                count = 0;
                ++count;
            }
            else
            {
                current_char = string_to_char[i];
                ++count;
            }
        }
        if (count != 1)
        {
            System.out.println("\'" + current_char + "\' appears " + count + " times.");
        }    }
}
