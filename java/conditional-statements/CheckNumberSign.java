// Program to determine whether a number is positive, negative, or zero.
import java.util.Scanner;

public class CheckNumberSign {
    public static void main(String[] args) {
        int number;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        number = sc.nextInt();
        sc.close();

        if (number == 0)
        {
            System.out.println("Number(" + number + ") is zero.");
        } 
        else  if (number < 0)
        {
            System.out.println("Number(" + number + ") is negative.");
        }
        else
        {
            System.out.println("Number(" + number + ") is positive.");
        }        

    }
}
