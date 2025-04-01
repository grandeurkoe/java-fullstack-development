// Program to check if a year is a leap year or not.
import java.util.Scanner;

public class CheckLeapYearOrNot {
    public static void main(String[] args) {
        int year;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter year: ");
        year = sc.nextInt();
        sc.close();
        
        if (year % 4 == 0)
        {
            if (year % 100 == 0)
            {
                if (year % 400 == 0)
                {
                    System.out.println("Year " + year + " is a leap year.");
                }
                else
                {
                    System.out.println("Year " + year + " is not a leap year.");
                }
            }
            else
            {
                System.out.println("Year " + year + " is a leap year.");
            }
        }
        else
        {
            System.out.println("Year " + year + " is not a leap year.");
        }
    }
}
