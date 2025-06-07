package basics;

// Classes are blueprint or template for creating objects.
class Person {
	/*
	 * Classes can contain
	 * 1. Data (Class variables or instance variables, attributes or data members) - Defines the state of an object.
	 * 2. Subroutines(methods) - Define the behavior of an object.
	 */
	
	String name;
	int age;
	
	void speak() {
		System.out.printf("Name: %s \nAge: %d", name, age);
	}
	
	void sayHello() {
		System.out.println("\nHello there!");
	}
}

public class ClassesAndObjects {

	// main() function is a subroutine of the class.
	public static void main(String[] args) {
		// personOne is a variable that references a Person object. The new keyword is used to create an object of class Person.
		Person personOne = new Person();
		personOne.name = "Jane Doe";
		personOne.age = 28;
		
		Person personTwo = new Person();
		personTwo.name = "Smith Jones";
		personTwo.age = 30;
		
		System.out.println("First Person Details: ");
		personOne.speak();
		personOne.sayHello();
		
		System.out.println("\n\nSecond Person Details: ");
		personTwo.speak();
		personTwo.sayHello();
	}

}
