// Program to perform matrix multiplication.
#include<iostream>
using namespace std;

int main()
{
    int i, j, matrix1_row, matrix2_row, matrix1_column, matrix2_column, result_product, result_sum = 0;

    cout<<"Enter the number of row and columns in matrix1: ";
    cin>>matrix1_row>>matrix1_column;
    cout<<"Enter the number of row and columns in matrix2: ";
    cin>>matrix2_row>>matrix2_column;

    if (matrix1_column == matrix2_row)
    {
        int matrix1[matrix1_row][matrix1_column], matrix2[matrix2_row][matrix2_column], multiplication[matrix1_row][matrix2_column];

        cout<<"Enter the elements of matrix1("<<matrix1_row<<"*"<<matrix1_column<<"): ";
        for(i = 0; i < matrix1_row; i++)
        {
            for(j = 0; j < matrix1_column; j++)
            {
                cin>>matrix1[i][j];
            }
        }
        cout<<"Enter the elements of matrix2("<<matrix2_row<<"*"<<matrix2_column<<"): ";
        for(i = 0; i < matrix2_row; i++)
        {
            for(j = 0; j < matrix2_column; j++)
            {
                cin>>matrix2[i][j];
            }
        }
        for(i = 0; i < matrix1_row; i++)
        {
            for(j = 0; j < matrix2_column; j++)
            {
                for(int k = 0; k < matrix1_column; k++)
                {
                    result_product = matrix1[i][k] * matrix2[k][j];
                    result_sum += result_product;
                }
                multiplication[i][j] = result_sum;
                result_sum = 0;
            }
        }
        cout<<"matrix1 = ";
        for(i = 0; i < matrix1_row; i++)
        {
            for(j = 0; j < matrix1_column; j++)
            {
                cout<<"\t"<<matrix1[i][j];
            }
            cout<<"\n\t";
        }
        cout<<"\nmatrix2 = ";
        for(i = 0; i < matrix2_row; i++)
        {
            for(j = 0; j < matrix2_column; j++)
            {
                cout<<"\t"<<matrix2[i][j];
            }
            cout<<"\n\t";
        }
        cout<<"\nmultiplication = ";
        for(i = 0; i < matrix1_row; i++)
        {
            for(j = 0; j < matrix2_column; j++)
            {
                cout<<"\t"<<multiplication[i][j]<<" ";
            }
            cout<<"\n\t\t";
        }
    }
    else
    {
        cout<<"The number of columns of the matrix1 must equal the number of rows of the matrix2.";
    }

    return 0;
}