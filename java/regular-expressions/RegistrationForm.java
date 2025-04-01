import java.util.Scanner;
import java.util.regex.Pattern;

class FormBuilder{
    private String name;
    private String date_of_birth;
    private String email;
    private long phone_number;

    public void generate_form()
    {
        Scanner scanner = new Scanner(System.in);
        System.out.println();
        System.out.println("===============================================");
        System.out.println("\t\tRegistration Form");
        System.out.println("===============================================");
        System.out.println("Welcome! Please provide the following details:");
        System.out.print("Name: ");
        name = scanner.nextLine();
        if (Pattern.compile("^[a-zA-Z\\s]{8,50}$").matcher(name).matches())
        {
            System.out.print("Date of Birth(dd-mm-yyy): ");
            date_of_birth = scanner.next();
            if (Pattern.compile("^(0[1-9]|12[0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\\d{2}$").matcher(date_of_birth).matches())
            {
                System.out.print("Email Address: ");
                email = scanner.next();
                if (Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\\.[a-zA-Z]{2,}$").matcher(email).matches())
                {
                    System.out.print("Phone number: ");
                    phone_number = scanner.nextLong();
                    if (Pattern.compile("^[6-9]\\d{9}$").matcher(Long.toString(phone_number)).matches())
                    {
                        System.out.println("Details entered successfully.");  
                        System.out.println("===============================================");
                    }
                    else
                    {
                        System.out.println("Error: Phone number does not match the expected format for Indian numbers.");
                    }
                }
                else
                {
                    System.out.println("Error: Email address does not match the expected format.");
                }
            }
            else{
                System.out.println("Error: Date string does not match the expected format (dd-mm-yyyy).");
            }
        }
        else{
            System.out.println("Error: Name does not match the expected format (8-50 characters, letters and spaces only).");
        }
    }

    public void display_form()
    {
        System.out.println();
        System.out.println("===============================================");
        System.out.println("\tRegistration Form Details");
        System.out.println("===============================================");
        System.out.println("Name: " + name);
        System.out.println("Date of Birth: " + date_of_birth);
        System.out.println("Email Address: " + email);
        System.out.println("Phone number: " + phone_number);
        System.out.println("===============================================");
    }
}

public class RegistrationForm {
    public static void main(String[] args) {
        FormBuilder registration_form = new FormBuilder();
        Scanner scanner = new Scanner(System.in);
        registration_form.generate_form();
        int choice;
        boolean to_continue = true;
        while(to_continue)
        {
            System.out.println();
            System.out.println("===============================================");
            System.out.println("\t\t      Menu");
            System.out.println("===============================================");
            System.out.println("1. Reenter form details");
            System.out.println("2. Show form");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            switch (choice) {
                case 1:
                    registration_form.generate_form();
                    break;
                case 2:
                    registration_form.display_form();
                    break;
                case 3:
                    System.out.println("\nExiting...");
                    to_continue = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
        scanner.close();
    }
}
