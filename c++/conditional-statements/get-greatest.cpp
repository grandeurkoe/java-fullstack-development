// Program to take two integer values from the user and print the greatest among them.
#include<iostream>
using namespace std;

int main()
{
    int number1, number2;
    cout<<"Enter first number: ";
    cin>>number1;
    cout<<"Enter second number: ";
    cin>>number2;
    if (number1 == number2)
    {
        cout<<"The values for both entered numbers are the same, i.e., "<<number1<<".";
    }
    else if(number1 > number2)
    {
        cout<<"The value of the first number is greater than the second, i.e., "<<number1<<".";
    }
    else
    {
        cout<<"The value of the second number is greater than the first, i.e., "<<number2<<".";

    }
    return 0;
}