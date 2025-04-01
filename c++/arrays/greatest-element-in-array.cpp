// Program to find the largest of the three elements in an array.
#include<iostream>
using namespace std;

int main()
{
    int arr[3];
    int i;

    cout<<"Enter the elements of the array(3 elements): ";
    for(i = 0; i < 3; i++)
    {
        cin>>arr[i];
    }

    int max = arr[0];

    for(i = 1; i < 3; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }

    cout<<"Largest element of the array: "<<max;
    return 0;
}