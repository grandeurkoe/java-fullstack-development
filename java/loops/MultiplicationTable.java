// Program to display the multiplication table of a number.

import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        int number;
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter the number whose multiplication table you wish to generate: ");
        number = sc.nextInt();
        sc.close();
        for (int i = 1; i <= 10; i++)
        {
            System.out.println(number + " * " + i + " = " + (number * i));
        }
    }
}
