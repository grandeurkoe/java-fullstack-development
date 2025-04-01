// Program to build a simple calculator using a switch statement.
#include<iostream>
using namespace std;

int main()
{
    int number1, number2;
    char sign;
    cout<<"Enter first numbers: ";
    cin>>number1;
    cout<<"Enter second numbers: ";
    cin>>number2;
    cout<<"Pick an operator(+, -, *, /, %): ";
    cin>>sign;

    switch (sign)
    {
    case '+':
    {
        cout<<number1<<" + "<<number2<<" = "<<number1 + number2;
        break;
    }
    case '-':
    {
        cout<<number1<<" - "<<number2<<" = "<<number1 - number2;
        break;
    }
    case '*':
    {
        cout<<number1<<" * "<<number2<<" = "<<number1 * number2;
        break;
    }
    case '/':
    {
        if (number2 == 0)
        {
            cout<<"Can't divide by zero.";
        }
        else
        {
        cout<<number1<<" / "<<number2<<" = "<<float(number1) / float(number2);
        }
        break;
    }
    case '%':
    {
        if (number2 == 0)
        {
            cout<<"Can't divide by zero.";
        }
        else
        {
        cout<<number1<<" % "<<number2<<" = "<<number1 % number2;
        }
        break;
    }
    default:
        cout<<"Invalid operator!";
        break;
    }

    return 0;
}