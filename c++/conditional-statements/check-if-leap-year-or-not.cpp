// Program to check if a year is a leap year or not.
#include<iostream>
using namespace std;

int main()
{
    int year;
    cout<<"Enter year: ";
    cin>>year;
    if (year % 4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                cout<<"Year "<<year<<" is a leap year.";
            }
            else
            {
                cout<<"Year "<<year<<" is not a leap year.";
            }
        }
        else
        {
            cout<<"Year "<<year<<" is a leap year.";
        }
    }
    else
    {
        cout<<"Year "<<year<<" is not a leap year.";
    }
    return 0;
}