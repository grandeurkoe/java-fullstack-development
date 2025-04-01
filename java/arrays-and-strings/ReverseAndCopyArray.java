// Program that creates a copy of an array by reversing its elements.
import java.util.Scanner;

public class ReverseAndCopyArray {
    public static void main(String[] args) {
        int i, size;
        int j = 0;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter the size of the array: ");
        size = sc.nextInt();

        int array[] = new int[size];
        int reverse_array[] = new int[size];

        System.out.print("Please enter the elements of the array, separated by spaces: ");
        for(i = 0; i < size; i++)
        {
            array[i] = sc.nextInt();
        }

        for(i = (size - 1); i > -1; i--)
        {
            reverse_array[j] = array[i];
            j++;
        }

        System.out.print("Original Array: [ ");
        for(i = 0; i < size; i++)
        {
            System.out.print(array[i] + " ");
        }
        System.out.print("]");

        System.out.print("\nReversed Array: [ ");
        for(i = 0; i < size; i++)
        {
            System.out.print(reverse_array[i] + " ");
        }
        System.out.print("]");
    }
}
