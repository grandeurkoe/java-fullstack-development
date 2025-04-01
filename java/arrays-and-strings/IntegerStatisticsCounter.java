// Please provide 20 integer inputs, and this program will count and display the following statistics:

//     The number of positive numbers.
//     The number of negative numbers.
//     The count of odd numbers.
//     The count of even numbers.
//     The number of zeros.

import java.util.Scanner;

public class IntegerStatisticsCounter {
    public static void main(String[] args) {
        int i;
        int count_positive = 0, count_negative = 0, count_odd = 0, count_even = 0, count_zero = 0;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        int array[] = new int[20];
        
        System.out.print("Please enter the elements of the array, separated by spaces: ");
        for(i = 0; i < 20; i++)
        {
            array[i] = sc.nextInt();
            if (array[i] == 0)
            {
                count_zero++;
            }
            if(array[i] > 0)
            {
                count_positive++;
            }
            if(array[i] < 0)
            {
                count_negative++;
            }
            if(array[i] % 2 == 0)
            {
                count_even++;
            }
            else
            {
                count_odd++;
            }
        }

            System.out.print("Original Array: [ ");
            for(i = 0; i < 20; i++)
            {
                System.out.print(array[i] + " ");
            }
            System.out.print("]");

            System.out.println("\nInteger Statistics Counter:");
            System.out.println("Number of positive numbers: " + count_positive);
            System.out.println("Number of negative numbers: " + count_negative);
            System.out.println("Number of odd numbers: " + count_odd);
            System.out.println("Number of even numbers: " + count_even);
            System.out.println("Number of zeros: " + count_zero);
            
    }
}
