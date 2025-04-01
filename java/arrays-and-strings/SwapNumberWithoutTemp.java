// Program to swap two numbers without using a third variable.

import java.util.Scanner;

public class SwapNumberWithoutTemp {
    public static void main(String[] args) {
        int first, second;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        first = sc.nextInt();
        System.out.print("Enter second number: ");
        second = sc.nextInt();
        sc.close();

        System.out.println("Before Swap: ");
        System.out.println("first = " + first);
        System.out.println("second = " + second);

        first = first + second;
        second = first - second;
        first = first - second;

        System.out.println("After Swap: ");
        System.out.println("first = " + first);
        System.out.println("second = " + second);
    }
}
