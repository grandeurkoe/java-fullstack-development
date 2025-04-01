// Program to find the sum and product of all elements of an array.
#include<iostream>
using namespace std;

int main()
{
    int i, sum = 0, product = 1;
    int arr[10];

    cout<<"Enter the elements of the array(10 elements): ";
    for(i = 0; i < 10; i++)
    {
        cin>>arr[i];
        sum += arr[i];
        product *= arr[i];
    }

    cout<<"Sum of all the element in the array: "<<sum;
    cout<<"\nProduct of all the element in the array: "<<product;
    return 0;
}
