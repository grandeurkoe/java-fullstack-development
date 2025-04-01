import java.util.Scanner;

public class CommonElementBetweenArray {
    public static void main(String[] args) {
        int i, j, size1, size2, size3;
        int k = 0;
        boolean element_exist = false;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Please enter the size of the array1: ");
        size1 = sc.nextInt();
        System.out.print("Please enter the size of the array2: ");
        size2 = sc.nextInt();

        String array1[] = new String[size1];
        String array2[] = new String[size2];
        if (size1 > size2)
        {
            size3 = size1;
        }
        else
        {
            size3 = size2;
        }

        String common[] = new String[size3];

        System.out.print("Please enter the elements of the array1, separated by spaces: ");
        for(i = 0; i < size1; i++)
        {
            array1[i] = sc.next();
        }
        System.out.print("Please enter the elements of the array2, separated by spaces: ");
        for(i = 0; i < size2; i++)
        {
            array2[i] = sc.next();
        }

        for(i = 0; i < size1; i++)
        {
            for(j = 0; j < size2; j++)
            {
                if (array1[i].equals(array2[j]))
                {
                    for (String element: common)
                    {
                        if (array1[i].equals(element))
                        {
                            element_exist = true;
                            break;
                        }
                    }
                    if (!element_exist)
                    {
                        common[k++] = array1[i];
                    }
                }
            }
            element_exist = false;
        }

        System.out.print("Array1: [ ");
        for(i = 0; i < size1; i++)
        {
            System.out.print(array1[i] + " ");
        }
        System.out.print("]");
        System.out.print("\nArray2: [ ");
        for(i = 0; i < size2; i++)
        {
            System.out.print(array2[i] + " ");
        }
        System.out.print("]");
        System.out.print("\nCommon: [ ");
        for(i = 0; i < k; i++)
        {
            System.out.print(common[i] + " ");
        }
        System.out.print("]");
    }
}
