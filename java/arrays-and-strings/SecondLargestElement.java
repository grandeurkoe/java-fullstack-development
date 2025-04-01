import java.util.Arrays;
import java.util.Scanner;

public class SecondLargestElement {
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

        Arrays.sort(array);

        System.out.println("\nThe second largest element in the array is: " + array[array.length - 2]);
    }
}
