// Program to find the sum of n natural numbers.
#include<iostream>
using namespace std;

int main()
{
    int n, sum = 0;
    cout<<"Enter n: ";
    cin>>n;
    if (n >= 0)
    {
        for(int i = 1; i <= n; i++)
        {
            sum = sum + i;
        }
        cout<<"Sum of the first "<<n<<" natural numbers: "<<sum;  
    }
    else
    {
        cout<<"Value of n cannot be less than 0.";
    }
    return 0;
}