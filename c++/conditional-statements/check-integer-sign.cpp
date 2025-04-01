// Program to determine whether an integer is positive, negative, or zero.
#include<iostream>
using namespace std;

int main()
{
    int number;
    cout<<"Enter a number: ";
    cin>>number;
    if (number == 0)
    {
        cout<<"Integer("<<number<<") is zero.";
    } 
    else  if (number < 0)
    {
        cout<<"Integer("<<number<<") is negative.";

    }
    else
    {
        cout<<"Integer("<<number<<") is positive.";

    }
    return 0;
}