// Program to reverse an array of integer values.
import java.util.Scanner;

public class ReverseArray {
    public static void main(String[] args) {
        int i, size;
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

        System.out.print("Original Array: [ ");
        for(i = 0; i < size; i++)
        {
            System.out.print(array[i] + " ");
        }
        System.out.print("]");

        System.out.print("\nReversed Array: [ ");
        for(i = (size - 1); i > -1; i--)
        {
            System.out.print(array[i] + " ");
        }
        System.out.print("]");

    }
}
