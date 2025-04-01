// Program to find the most frequent element in an array of integers.
#include<iostream>
using namespace std;

int main()
{
    int arr[6];
    int i ,j , frequent_element;
    int frequent_count = 0, max_frequent_count = 0;

    cout<<"Enter the elements of the array(6 elements): ";
    for(i = 0; i < 6; i++)
    {
        cin>>arr[i];
    }

    for(i = 0; i < 6; i++)
    {
        for(j = 0; j < 6; j++)
        {
            if(arr[i] == arr[j])
            {
                frequent_count++;
            }
        }
        if (frequent_count > max_frequent_count)
        {
            max_frequent_count = frequent_count;
            frequent_element = arr[i];
        }
        frequent_count = 0;
    }

    cout<<"Most frequent element is "<<frequent_element<<" with a count of "<<max_frequent_count<<".";    
    return 0;
}