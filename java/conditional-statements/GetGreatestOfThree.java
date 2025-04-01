// Program to find the maximum of three numbers.
import java.util.Scanner;

class GetGreatestOfThree
{
    public static void main(String[] args) {
        int num1, num2, num3;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        num1 = sc.nextInt();
        System.out.print("Enter the second number: ");
        num2 = sc.nextInt();
        System.out.print("Enter the third number: ");
        num3 = sc.nextInt();

        sc.close();

        if (num1 == num2 && num2 == num3)
        {
            System.out.println("Greatest number = " + num1);
        }
        else if(num1 == num2)
        {
            if (num1 > num3)
            {
                System.out.println("Greatest number = " + num1);
            }
            else
            {
                System.out.println("Greatest number = " + num3);
            }
        }
        else if(num2 == num3)
        {
            if (num1 > num2)
            {
                System.out.println("Greatest number = " + num1);
            }
            else
            {
                System.out.println("Greatest number = " + num2);
            }
        }
        else if(num1 == num3)
        {
            if (num1 > num2)
            {
                System.out.println("Greatest number = " + num1);
            }
            else
            {
                System.out.println("Greatest number = " + num2);

            }
        }
        else
        {
            if(num1 > num2)
            {
                if(num2 > num3)
                {
                    System.out.println("Greatest number = " + num1);
                }
                else
                {
                    if(num1 > num3)
                    {
                        System.out.println("Greatest number = " + num1);
                    }
                    else
                    {
                        System.out.println("Greatest number = " + num3);

                    }
                }
            }
            else if(num2 > num3)
            {
                if(num3 > num1)
                {
                    System.out.println("Greatest number = " + num2);
                }
                else
                {
                    if(num2 > num1)
                    {
                        System.out.println("Greatest number = " + num2);
                    }
                    else
                    {
                        System.out.println("Greatest number = " + num1);

                    }
                }            }
            else
            {
                System.out.println("Greatest number = " + num3);

            }
        }

    }
}