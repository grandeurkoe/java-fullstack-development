// Program to find the power of a number using a for loop.
import java.util.Scanner;

public class PowerOfANumber {
    public static void main(String[] args) {
        int exponent;
        float base, power = 1;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter the base number: ");
        base = sc.nextFloat();
        System.out.print("Please enter the exponent: ");
        exponent = sc.nextInt();
        sc.close();

        for(int i = 1; i <= exponent; i++)
        {
            power *= base;
        }

        System.out.println("The result of raising " + base + " to the power of " + exponent + " is: " + power);
    }
}
