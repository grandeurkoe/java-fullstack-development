// Program to input week number and print week day.
import java.util.Scanner;

public class GetWeekDayFromWeekNumber {
    public static void main(String[] args) {
        int week_number;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter week number (1-7): ");
        week_number = sc.nextInt();
        sc.close();

        switch (week_number) {
            case 1:
                System.out.println("Week Day: Sunday");
                break;
            case 2:
                System.out.println("Week Day: Monday");
                break;  
            case 3:
                System.out.println("Week Day: Tuesday");
                break;  
            case 4:
                System.out.println("Week Day: Wednesday");
                break;   
            case 5:
                System.out.println("Week Day: Thursday");
                break;   
            case 6:
                System.out.println("Week Day: Friday");
                break;   
            case 7:
                System.out.println("Week Day: Saturday");
                break;   
            default:
                System.out.println("Invalid week number. Please enter a number between 1 and 7.");
                break;
        }
    }
}
