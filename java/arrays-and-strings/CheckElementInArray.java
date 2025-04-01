// "Program to test if an array contains a specific value and determine the index of that array element.
import java.util.Scanner;

public class CheckElementInArray {
    public static void main(String[] args) {
        int i, size, check_value, index = -1;
        boolean value_exists = false;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter the size of the array: ");
        size = sc.nextInt();

        int array[] = new int[size];
        
        System.out.print("Please enter the elements of the array, separated by spaces: ");
        for(i = 0; i < size; i++)
        {
            array[i] = sc.nextInt();
        }

        System.out.print("Enter the value you want to check in the array: ");
        check_value = sc.nextInt();

        for(i = 0; i < size; i++)
        {
            if (check_value == array[i])
            {
                index = i;
                value_exists = true;
                break;
            }
        }

        if (value_exists)
        {
            System.out.println("The value " + check_value + " is present in the array at index " + index + ".");
        }
        else
        {
            System.out.println("The value " + check_value + " is not found in the array.");
        }
    }
}
