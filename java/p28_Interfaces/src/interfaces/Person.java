package interfaces;

public class Person implements Info{
	// A class can implement as many interface as it wants.
	// But it can only extend one parent class.
	private String name;
	public Person(String name) {
		this.name = name;
	}
	public void greet() {
		System.out.println("Hello there!");
	}
	
	public void showInfo() {
		System.out.println("Person name is: " + name);
	}
}
