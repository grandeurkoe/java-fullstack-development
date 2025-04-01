// Write a program that asks the user to enter positive integers to calculate the count, maximum, minimum, and average, or terminate the process with -1.

#include<iostream>
using namespace std;

int main()
{
    int integer;
    float average;
    int count = 0, minimum = 0, maximum = 0, sum = 0;
    do
    {
        cout<<"Enter a positive integer: ";
        cin>>integer;

        if (integer > 0)
        {
            count++;
            if (integer <= minimum)
            {
                minimum = integer;
            }
            if (integer >= maximum)
            {
                maximum = integer;
            }
            sum = sum + integer;
            average = float(sum) / float(count);
            cout<<"Current positive integer = "<<integer<<endl;
            cout<<"Count = "<<count<<endl;
            cout<<"Minimum = "<<minimum<<endl;
            cout<<"Maximum = "<<maximum<<endl;
            cout<<"Sum = "<<sum<<endl;
            cout<<"Average = "<<average<<endl;
        }
        else
        {
            cout<<"Process Terminated.";
            integer = -1;
        }
    } while (integer != -1);
    
    return 0;
}