// Program to display the multiplication table of a number.
#include<iostream>
using namespace std;

int main()
{
    int number;
    cout<<"Enter the number whose multiplication table you wish to generate: ";
    cin>>number;
    for (int i = 1; i <= 10; i++)
    {
        cout<<number<<" * "<<i<<" = "<<number * i<<endl;
    }
    return 0;
}