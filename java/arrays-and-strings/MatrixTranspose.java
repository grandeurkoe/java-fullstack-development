import java.util.Scanner;

public class MatrixTranspose {
    public static void main(String[] args) {
        int i , j, row, column;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of row and columns in matrix: ");
        row = sc.nextInt();
        column = sc.nextInt();
    
        int matrix[][] = new int[row][column]; 
        int transpose[][] = new int[column][row];

        System.out.print("Enter the elements of matrix1(" + row + "*" + column + "): ");
        for(i = 0; i < row; i++)
        {
            for(j = 0; j < column; j++)
            {
                matrix[i][j] = sc.nextInt();
            }
        }
    
        for(i = 0; i < row; i++)
        {
            for(j = 0; j < column; j++)
            {
                transpose[j][i] = matrix[i][j];
            }
        }
    
        System.out.print("matrix = ");
        for(i = 0; i < row; i++)
        {
            for(j = 0; j < column; j++)
            {
                System.out.print("\t" + matrix[i][j]);
            }
            System.out.print("\n\t");
        }
        
        System.out.print("\ntranspose = ");
        for(i = 0; i < column; i++)
        {
            for(j = 0; j < row; j++)
            {
                System.out.print("\t" + transpose[i][j]);
            }
            System.out.print("\n\t");
        }
    }
}
