import java.util.Arrays;
import java.util.Scanner;

public class RemoveDuplicateFromArray {
    public static void main(String[] args) {
        int i, size;
        int j = 1;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);
     
        System.out.print("Please enter the size of the array: ");
        size = sc.nextInt();

        int array[] = new int[size];
        int array_without_duplicate[] = new int[size];

        if (size == 0)
        {
            System.out.print("No elements available in the array.");
        }
        else 
        {
            System.out.print("Please enter the elements of the array, separated by spaces: ");
            for(i = 0; i < size; i++)
            {
                array[i] = sc.nextInt();
            }
            if(size == 1)
            {
                System.out.print("Original Array: [ " + array[0] + " ]");
                System.out.print("\nArray Without Duplicates: [ " + array[0] + " ]");

            }
            else
            {
            // Sort Original Array
                Arrays.sort(array);
                int unique = array[0];
                array_without_duplicate[0] = unique;

                for(i = 1; i < size; i++)
                {
                    if (array[i] != unique)
                    {
                        array_without_duplicate[j++] = array[i];
                        unique = array[i];
                    }
                }
                System.out.print("Sorted Original Array: [ ");
                for(i = 0; i < size; i++)
                {
                    System.out.print(array[i] + " ");
                }
                System.out.print("]");
        
                System.out.print("\nArray Without Duplicates: [ ");
                for(i = 0; i < j; i++)
                {
                    System.out.print(array_without_duplicate[i] + " ");
                }
                System.out.print("]");
            }
        }
    }
}
