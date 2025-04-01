/*  

Program to print Left-Aligned Alphabet Pyramid.

A
A B
A B C
A B C D
A B C D E 

*/

public class LeftAlignedAlphabetPyramid {
    public static void main(String[] args) {
        for(int i = 65; i <= 69; i++)
        {
            for(int j = 65; j <= i; j++)
            {
                System.out.print((char)(j)+ " ");
            }
            System.out.println();
        }
    }
}