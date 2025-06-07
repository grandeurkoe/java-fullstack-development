package access.specifier;

public class Plant {
	// Can be accessed from anywhere in the program.
	// This is bad practice.
	public String name;
	
	// Acceptable practice -- it's final.
	public final static int ID = 8;
	
	// Can only be accessed from within the class.
	private String type;
	
	protected String size;
	
	// No access specifier.
	int height;
	
	public Plant() {
		name = "Freddy";
		type = "plant";
		size = "medium";
		height = 10;
	}
}
