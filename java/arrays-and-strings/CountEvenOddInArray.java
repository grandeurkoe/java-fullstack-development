// A program to find the number of even and odd integers in a given array of integers.
import java.util.Scanner;

public class CountEvenOddInArray {
    public static void main(String[] args) {
        int i, size;
        int count_even = 0, count_odd = 0;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter the size of the array: ");
        size = sc.nextInt();

        int array[] = new int[size];

        System.out.print("Please enter the elements of the array, separated by spaces: ");
        for(i = 0; i < size; i++)
        {
            array[i] = sc.nextInt();
            if (array[i] % 2 == 0)
            {
                count_even++;
            }
            else
            {
                count_odd++;
            }
        }

        System.out.print("Original Array: [ ");
        for(i = 0; i < size; i++)
        {
            System.out.print(array[i] + " ");
        }
        System.out.print("]");
        System.out.println("\nNumber of even integers in array: " + count_even);
        System.out.println("Number of odd integers in array: " + count_odd);

    }
}
