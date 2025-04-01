// Program to display the first n terms of the Fibonacci series.
#include<iostream>
using namespace std;

int main()
{
    int n;
    cout<<"How many terms of the fibonacci series do you wish to generate? ";
    cin>>n;
    int num1 = 0, num2 = 1;
    int temp;
    cout<<"First "<<n<<" terms of the Fibonacci Series -> ";
    for(int i = 1; i <= n; i++)
    {
        cout<<num1<<" ";
        temp = num1;
        num1 = num2;
        num2 = temp + num1;
    }
    return 0;
}