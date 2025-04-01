import java.util.Scanner;

public class MaximumMinimumOfAnArray {
    public static void main(String[] args) {
        int i, size, maximum, minimum;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        size = sc.nextInt();
    
        int arr[] = new int[size];
        System.out.println("Enter the elements of the array(" + size + " elements): ");
        for(i = 0; i < size; i++)
        {
            arr[i] = sc.nextInt();
        }

        if (size % 2 == 0)
        {
            if(arr[0] > arr[1])
            {
                maximum = arr[0];
                minimum = arr[1];
            }
            else
            {
                maximum = arr[1];
                minimum = arr[0];            
            }
            for(i = 2; i < size; i = i + 2)
            {
                if(arr[i] > arr[i + 1])
                {
                    if (arr[i] > maximum)
                    {
                        maximum = arr[i];
                    }
                    if(arr[i + 1] < minimum)
                    {
                        minimum = arr[i + 1];
                    }
                }
                else
                {
                    if (arr[i + 1] > maximum)
                    {
                        maximum = arr[i + 1];
                    }
                    if(arr[i] < minimum)
                    {
                        minimum = arr[i];
                    }                
                }
            }
        }
        else
        {
            maximum = arr[0];
            minimum = arr[0];
            for(i = 1; i < size; i = i + 2)
            {
                if(arr[i] > arr[i + 1])
                {
                    if (arr[i] > maximum)
                    {
                        maximum = arr[i];
                    }
                    if(arr[i + 1] < minimum)
                    {
                        minimum = arr[i + 1];
                    }
                }
                else
                {
                    if (arr[i + 1] > maximum)
                    {
                        maximum = arr[i + 1];
                    }
                    if(arr[i] < minimum)
                    {
                        minimum = arr[i];
                    }                
                }
            }
        }
        System.out.println("Minimum element in the array: " + minimum);
        System.out.println("Maximum element in the array: " + maximum);
    }
}
