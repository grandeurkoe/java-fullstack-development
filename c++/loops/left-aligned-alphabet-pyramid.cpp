/*  

Program to print Left-Aligned Alphabet Pyramid.

A
A B
A B C
A B C D
A B C D E 

*/

#include<iostream>
using namespace std;

int main()
{
    for(int i = 65; i <= 69; i++)
    {
        for(int j = 65; j <= i; j++)
        {
            cout<<char(j)<<" ";
            
        }
        cout<<"\n";
    }
    return 0;
}