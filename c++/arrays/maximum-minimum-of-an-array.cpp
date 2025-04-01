// Program for Maximum and minimum of an array using the minimum number of comparisons.
#include<iostream>
using namespace std;

int main()
{
    int i, size, maximum, minimum;
    cout<<"Enter the size of the array: ";
    cin>>size;

    int arr[size];
    cout<<"Enter the elements of the array("<<size<<" elements): ";
    for(i = 0; i < size; i++)
    {
        cin>>arr[i];
    }

    if (size % 2 == 0)
    {
        if(arr[0] > arr[1])
        {
            maximum = arr[0];
            minimum = arr[1];
        }
        else
        {
            maximum = arr[1];
            minimum = arr[0];            
        }
        for(i = 2; i < size; i = i + 2)
        {
            if(arr[i] > arr[i + 1])
            {
                if (arr[i] > maximum)
                {
                    maximum = arr[i];
                }
                if(arr[i + 1] < minimum)
                {
                    minimum = arr[i + 1];
                }
            }
            else
            {
                if (arr[i + 1] > maximum)
                {
                    maximum = arr[i + 1];
                }
                if(arr[i] < minimum)
                {
                    minimum = arr[i];
                }                
            }
        }
    }
    else
    {
        maximum = arr[0];
        minimum = arr[0];
        for(i = 1; i < size; i = i + 2)
        {
            if(arr[i] > arr[i + 1])
            {
                if (arr[i] > maximum)
                {
                    maximum = arr[i];
                }
                if(arr[i + 1] < minimum)
                {
                    minimum = arr[i + 1];
                }
            }
            else
            {
                if (arr[i + 1] > maximum)
                {
                    maximum = arr[i + 1];
                }
                if(arr[i] < minimum)
                {
                    minimum = arr[i];
                }                
            }
        }
    }
    cout<<"Minimum element in the array: "<<minimum;
    cout<<"\nMaximum element in the array: "<<maximum;
    return 0;
}