//  Program to check whether two String objects contain the same data, ignoring case considerations.

import java.util.Scanner;

public class CompareString {
    public static void main(String[] args) {
        String string1, string2;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter String 1: ");
        string1 = sc.nextLine();
        System.out.print("Please enter String 2: ");
        string2 = sc.nextLine();

        sc.close();

        System.out.println("String 1 : " + string1);
        System.out.println("String 2 : " + string2);

        if (string1.equalsIgnoreCase(string2))
        {
            System.out.println("String 1 and String 2 are equal, disregarding case considerations.");
        }
        else
        {
            System.out.println("String 1 and String 2 are not equal, disregarding case considerations.");
        }
    }
}
