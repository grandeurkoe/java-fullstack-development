// Program to perform matrix addition.
#include<iostream>
using namespace std;

int main()
{
    int i, j, matrix1[3][3], matrix2[3][3], sum[3][3];
    
    cout<<"Enter the elements of matrix1(3*3): ";
    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            cin>>matrix1[i][j];
        }
    }
    cout<<"Enter the elements of matrix2(3*3): ";
    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            cin>>matrix2[i][j];
        }
    }

    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            sum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    for(i = 0; i < 3; i++)
    {
        for(j = 0; j < 3; j++)
        {
            cout<<"\t"<<matrix1[i][j]<<" ";
        }
        if (i == 1)
        {
            cout<<"  + ";
        }
        for(j = 0; j < 3; j++)
        {
            cout<<"\t"<<matrix2[i][j]<<" ";
        }
        if (i == 1)
        {
            cout<<"  = ";
        }
        for(j = 0; j < 3; j++)
        {
            cout<<"\t"<<matrix1[i][j]<<" ";
        }
        cout<<"\n";
    }

}