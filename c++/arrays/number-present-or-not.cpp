/* 
   Program to take 10 integer inputs from the user and store them in an array. 
   Again, ask the user to give a number. 
   Now, tell the user whether that number is present in the array or not.
*/
#include<iostream>
using namespace std;

int main()
{
    int i, arr[10], find_element;
    bool is_found = false;

    cout<<"Enter the elements of the array(10 elements): ";
    for(i = 0; i < 10; i++)
    {
        cin>>arr[i];
    }

    cout<<"Enter the elements you wish to search for: ";
    cin>>find_element;
    for(i = 0; i < 10; i++)
    {
        if (find_element == arr[i])
        {
            is_found = true;
            break;
        }
    }

    if(is_found)
    {
        cout<<"Element \'"<<find_element<<"\' is present in the array.";
    }
    else
    {
        cout<<"Element \'"<<find_element<<"\' is not present in the array.";
    }

    return 0;
}