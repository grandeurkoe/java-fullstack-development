package basics;

class Machine {
	private String name;
	private int code;
	
	// The name of the constructor must be the same as the class.
	public Machine() {
		// Call constructor from within a constructor.
		this("Sam", 0);
		
		System.out.println("Constructor called!");
		
		// Set initial value for name attribute. Every time you create an object of this class it's default value for name attribute will be Sam.
		// name = "Sam";
		
	}
	
	public Machine(String name) {
		this(name, 0);
		System.out.println("Constructor with parameters called!");
		// this.name = name;
	}
	
	public Machine(String name, int code) {
		System.out.println("Constructor with two parameters called!");
		this.name = name;
		this.code = code;
	}
	
}

public class Constructors {

	public static void main(String[] args) {
		// A constructor is a special method that is called everytime an instance of a class i.e., object is created.

		Machine myMachine = new Machine();
		Machine newMachine = new Machine("Arnie");
		Machine thirdMachine = new Machine("Bertie", 101);
	}

}
