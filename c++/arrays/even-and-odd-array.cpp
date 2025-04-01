// Program to separate even and odd numbers in an array of integers.
#include<iostream>
using namespace std;

int main()
{
    int arr[10], even[10], odd[10];
    int i, even_index = 0, odd_index = 0;

    cout<<"Enter the elements of the array(10 elements): ";
    for(i = 0; i < 10; i++)
    {
        cin>>arr[i];
    }

    for(i = 0; i < 10; i++)
    {
        if (arr[i] % 2 == 0)
        {
            even[even_index] = arr[i];
            even_index++;
        }
        else
        {
            odd[odd_index] = arr[i];
            odd_index++;
        }
    }
    
    cout<<"Original Array: [ ";
    for(i = 0; i < 10; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<"]";
    cout<<"\nEven Array: [ ";
    for(i = 0; i < even_index; i++)
    {
        cout<<even[i]<<" ";
    }
    cout<<"]";
    cout<<"\nOdd Array: [ ";
    for(i = 0; i < odd_index; i++)
    {
        cout<<odd[i]<<" ";
    }
    cout<<"]";
    return 0;
}