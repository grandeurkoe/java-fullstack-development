import java.util.Scanner;

public class MatrixMultiplication {
    public static void main(String[] args) {
        int i, j, matrix1_row, matrix2_row, matrix1_column, matrix2_column, result_product, result_sum = 0;
        @SuppressWarnings("resource")
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of row and columns in matrix1: ");
        matrix1_row = sc.nextInt();
        matrix1_column = sc.nextInt();
        System.out.print("Enter the number of row and columns in matrix2: ");
        matrix2_row = sc.nextInt();
        matrix2_column = sc.nextInt();
    
        if (matrix1_column == matrix2_row)
        {
            int matrix1[][] = new int[matrix1_row][matrix1_column]; 
            int matrix2[][] = new int[matrix2_row][matrix2_column]; 
            int multiplication[][] = new int[matrix1_row][matrix2_column];
    
            System.out.print("Enter the elements of matrix1(" + matrix1_row + "*" + matrix1_column + "): ");
            for(i = 0; i < matrix1_row; i++)
            {
                for(j = 0; j < matrix1_column; j++)
                {
                    matrix1[i][j] = sc.nextInt();
                }
            }
            System.out.print("Enter the elements of matrix2(" + matrix2_row + "*" + matrix2_column + "): ");
            for(i = 0; i < matrix2_row; i++)
            {
                for(j = 0; j < matrix2_column; j++)
                {
                    matrix2[i][j] = sc.nextInt();
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
            System.out.print("matrix1 = ");
            for(i = 0; i < matrix1_row; i++)
            {
                for(j = 0; j < matrix1_column; j++)
                {
                    System.out.print("\t" + matrix1[i][j]);
                }
                System.out.print("\n\t");
            }
            System.out.print("\nmatrix2 = ");
            for(i = 0; i < matrix2_row; i++)
            {
                for(j = 0; j < matrix2_column; j++)
                {
                    System.out.print("\t" + matrix2[i][j]);
                }
                System.out.print("\n\t");
            }
            System.out.print("\nmultiplication = ");
            for(i = 0; i < matrix1_row; i++)
            {
                for(j = 0; j < matrix2_column; j++)
                {
                    System.out.print("\t" + multiplication[i][j] + " ");
                }
                System.out.print("\n\t\t");
            }
        }
        else
        {
            System.out.print("The number of columns of the matrix1 must equal the number of rows of the matrix2.");
        }
    }
}
