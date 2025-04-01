// Program to determine whether a number is even or odd.
import java.util.Scanner;

public class CheckEvenOrOdd {
    public static void main(String[] args) {
        int number;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        number = sc.nextInt();
        sc.close();

        if (number % 2 == 0)
        {
            System.out.println("Number(" + number + ") is even.");
        }
        else
        {
            System.out.println("Number(" + number + ") is odd.");
        }
    }
}
