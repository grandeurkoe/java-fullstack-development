// Program to take the values of the length and breadth of a rectangle from the user and check if it is square or not.
#include<iostream>
using namespace std;

int main()
{
    int length, breadth;
    cout<<"Enter length: ";
    cin>>length;
    cout<<"Enter breadth: ";
    cin>>breadth;
    if (length == breadth)
    {
        cout<<"It is a square.";
    }
    else
    {
        cout<<"It is not a square.";
    }
    return 0;
}