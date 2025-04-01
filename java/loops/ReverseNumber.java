// Program to Program to enter a number and print its reverse.

import java.util.Scanner;

public class ReverseNumber {
    public static void main(String[] args) {
        int number, reverse = 0;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter a number to be reversed: ");
        number = sc.nextInt();
        sc.close();

        int length = String.valueOf(number).length() - 1;
        while (number > 0) {
            reverse += (number % 10) * Math.pow(10, length);
            number = number / 10;
            length--;
        }
        System.out.print("The reverse of the entered number is: " + reverse);
    }
}
