package basics;

public class StringFormatting {

	public static void main(String[] args) {
		// String in java are immutable;
		// Every time I'm assigning a new string to a reference variable. All the string I previously created are still in the memory.
		// Thus, this is very memory inefficient.
		String info = "";
		info += "My name is Bob.";
		info += " ";
		info += "I am a builder.";
		
		System.out.println(info);
		
		// Efficient way.
		StringBuilder sb = new StringBuilder("");
		// Here, we are actually reassigning values to my StringBuilder object.
		sb.append("My name is Sue.");
		sb.append(" ");
		sb.append("I am a lion trainer");
		System.out.println(sb.toString());
		
		StringBuilder newSb = new StringBuilder();
		newSb.append("My name is Roger.").append(" ").append("I am a skydiver.");
		
		System.out.println(newSb.toString());
		
		// String formatting.
		System.out.println("Here is some text.\tThat was a tab.\nThat was a newline.");
		
		// %d - Integer
		// %s - String
		// %f - Floating point
		// %- - Left align
		// %10 - 10 characters wide.
		System.out.printf("Total cost %-10d; quantity is %d\n", 5 , 120);
		
		// Formatting floating point values.
		// %.2 - Two decimal places
		System.out.printf("Total value: %.2f\n", 5.687);
		System.out.printf("Total value: %-6.1f\n", 343.32432);

	}

}
