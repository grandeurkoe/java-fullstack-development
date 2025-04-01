import java.util.Scanner;

public class GetCharacterAtIndex {
    public static void main(String[] args) {
        String string;
        int index;
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter a string: ");
        string = sc.nextLine();

        System.out.print("Please enter the index to find the character in the string: ");
        index = sc.nextInt();

        sc.close();

        int length = string.length();

        if (index < length)
        {
            System.out.println("Original String: " + string);
            System.out.println("Character at Index " + index + ": " + string.charAt(index));
        }
        else
        {
            System.out.println("Error: Index out of range.");
        }
    }
}
