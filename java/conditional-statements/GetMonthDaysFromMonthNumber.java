import java.util.Scanner;

public class GetMonthDaysFromMonthNumber {
    public static void main(String[] args) {
        int month_number;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter month number (1 - 12): ");
        month_number = sc.nextInt();
        sc.close();

        switch (month_number) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                System.out.println("Number of Days : 31");
                break;
            case 2:
                System.out.println("Number of Days: 28(common year) or 29(leap year)");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                System.out.println("Number of Days: 30");
                break;        
            default:
                System.out.println("Invalid month number. Please enter a number between 1 and 12.");
                break;
        }
    }
}
