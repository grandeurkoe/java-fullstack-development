/*
Program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
*/

import java.util.Scanner;

public class CalculateGrossSalary {
    public static void main(String[] args) {
        float basic_salary;
        double gross_salary;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter basic salary: ");
        basic_salary = sc.nextFloat();
        sc.close();

        if(basic_salary >= 0 && basic_salary <= 10000)
        {
            gross_salary = basic_salary * 1.2 * 1.9;
            System.out.println("Gross Salary: Rs. " + gross_salary);
        }
        else if(basic_salary > 10000 && basic_salary <= 20000)
        {
            gross_salary = basic_salary * 1.25 * 1.9;
            System.out.println("Gross Salary: Rs. " + gross_salary);
        }
        else if(basic_salary > 20000)
        {
            gross_salary = basic_salary * 1.3 * 1.95;
            System.out.println("Gross Salary: Rs. " + gross_salary);
        }
        else
        {
            System.out.println("Invalid basic salary. Please enter a positive basic salary.");
        }
    }
}
