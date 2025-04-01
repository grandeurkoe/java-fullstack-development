// Program to check whether an entered character is lowercase (a to z) or uppercase (A to Z).
#include<iostream>
using namespace std;

int main()
{
    char check_char;
    cout<<"Enter a character: ";
    cin>>check_char;

    if (check_char >= 'a' && check_char <= 'z')
    {
        cout<<"Character \'"<<check_char<<"\' is lowercase.";
    }
    else if (check_char >= 'A' && check_char <= 'Z')
    {
        cout<<"Character \'"<<check_char<<"\' is uppercase.";
    }
    else
    {
        cout<<"Character \'"<<check_char<<"\' is not an alphabetical character.";
    }
    return 0;
}