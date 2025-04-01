// Program to perform matrix transpose.
#include<iostream>
using namespace std;

int main()
{
    int i , j, row, column;
    cout<<"Enter the number of row and columns in matrix: ";
    cin>>row>>column;

    int matrix[row][column], transpose[column][row];

    cout<<"Enter the elements of matrix1("<<row<<"*"<<column<<"): ";
    for(i = 0; i < row; i++)
    {
        for(j = 0; j < column; j++)
        {
            cin>>matrix[i][j];
        }
    }

    for(i = 0; i < row; i++)
    {
        for(j = 0; j < column; j++)
        {
            transpose[j][i] = matrix[i][j];
        }
    }

    cout<<"matrix = ";
    for(i = 0; i < row; i++)
    {
        for(j = 0; j < column; j++)
        {
            cout<<"\t"<<matrix[i][j];
        }
        cout<<"\n\t";
    }
    cout<<"\ntranspose = ";
    for(i = 0; i < column; i++)
    {
        for(j = 0; j < row; j++)
        {
            cout<<"\t"<<transpose[i][j];
        }
        cout<<"\n\t";
    }
    return 0;
}