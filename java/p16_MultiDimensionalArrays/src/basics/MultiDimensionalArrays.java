package basics;

public class MultiDimensionalArrays {

	public static void main(String[] args) {
		// One Dimensional Array.
		int[] oneD = {1, 2, 3, 4 ,5};
		
		System.out.println("Iterate over one dimensinal array.");
		for(int element: oneD) {
			System.out.printf("%d ", element);
		}
		
		int[][] multiD = {
				{1, 2, 3},
				{4, 5, 6},
				{7, 8, 9}
		};
		
		System.out.println("\nFetching elements from 2D array.");
		System.out.printf("multiD[1, 1]: %d", multiD[1][1]);
		
		String[][] texts = new String[2][3];
		texts[0][1] = "zero one";
		System.out.printf("\ntexts[0][1]: %s", texts[0][1]);
		
		System.out.println("\nIterate over 2D array.");
		for(int row = 0; row < multiD.length; row++) {
			for(int col = 0; col < multiD[row].length; col++) {
				System.out.printf("%d\t", multiD[row][col]);
			}
			System.out.println();
		}
		
		String[][] words = new String[2][];
		System.out.println(words[0]);
		
		words[0] = new String[3];
		words[0][1] = "zero one";
		System.out.printf("words[0][1]: %s", words[0][1]);
	}

}
