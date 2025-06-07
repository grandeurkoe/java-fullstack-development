package basics;

public class Arrays {

	public static void main(String[] args) {
		// Reference variable named values.
		int[] values;
		
		// values points to a location that can hold 3 integer values.
		values = new int[3];
		
		// Default values for integer is 0.
		System.out.println("Default value for integer array.");
		System.out.println(values[0]);
		
		// Assign value to the first element of the array.
		values[0] = 10;
		values[1] = 20;
		values[2] = 30;
		
		System.out.println("\nValues after assignment.");
		System.out.println(values[0]);
		System.out.println(values[1]);
		System.out.println(values[2]);
		
		// Iterate over the array.
		System.out.println("\nIterate over array.");
		for (int i = 0; i < values.length; i++) {
			System.out.println(values[i]);
		}
		
		// Alternative way to create an array.
		int[] numbers = {1, 2, 3, 4, 5};
		
		
		// Iterate over the array.
		System.out.println("\nIterate over numbers array.");
		for (int i = 0; i < numbers.length; i++) {
			System.out.println(numbers[i]);
		}
	}

}
