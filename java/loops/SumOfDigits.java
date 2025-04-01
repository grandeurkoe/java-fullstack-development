// Program to calculate the sum of digits of a number.
import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        int number, sum_digit = 0;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter a number to calculate the sum of its digits: ");
        number = sc.nextInt();
        sc.close();

        while (number > 0) {
            sum_digit += number % 10;
            number = number / 10;
        }
        System.out.println("The sum of the digits of the entered number is: " + sum_digit);
    }
}
