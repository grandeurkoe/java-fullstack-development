package basics;

public class ArraysOfStrings {

	public static void main(String[] args) {
		String[] words = new String[3];
		
		words[0] = "Hello";
		words[1] = "to";
		words[2] = "you";
		
		System.out.printf("%s %s %s!", words[0], words[1], words[2]);
		
		String[] fruits = {"Apple", "Banana", "Pear", "Kiwi", "Strawberry"};
		
		// Iterate over an array using for each.
		for(String fruit: fruits) {
			System.out.println(fruit);
		}
		
		// Here we are allocating memory (32 bit) to hold an integer values inside a variable named value.
		int value = 10;
		
		/*
		   Here since we don't know how long the string is, instead we are allocating enough memory so that it can hold a reference(address)
		   of the memory location where the actual string will be stored.
		   The default values for references is null. It means that the reference variable is not pointing anywhere.
		*/
		String text = null;
		System.out.println(text);
		
		// Here texts is a reference variable that point to an array of references. Each of the elements in the String array would be a reference.
		String[] texts = new String[2];
		
		// Here texts[0] is a reference that points to the memory location where "one" is stored.
		texts[0] = "one";
		
		System.out.println(texts[0]);
		System.out.println(texts[1]);

	}

}
