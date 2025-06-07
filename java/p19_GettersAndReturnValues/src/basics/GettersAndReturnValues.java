package basics;

class PersonTwo {
	String name;
	int age;
	
	void speak() {
		System.out.printf("Name: %s\nAge: %d", name, age);
	}
	
	int calculateYearsToRetirement() {
		return (65 - age);
	}
	
	// Getter methods
	String getName() {
		return name;
	}
	
	int getAge() {
		return age;
	}
}

public class GettersAndReturnValues {

	public static void main(String[] args) {
		PersonTwo personOne = new PersonTwo();
		personOne.name = "Jane Doe";
		personOne.age = 30;
		personOne.speak();
		
		int yearsLeft = personOne.calculateYearsToRetirement();
		System.out.println("\nYear left until retirement: " + yearsLeft);
		
		System.out.println("\nUsing Getters.");
		String name = personOne.getName();
		int age = personOne.getAge();
		System.out.printf("Name: %s\nAge: %d", name, age);
		
	}

}
