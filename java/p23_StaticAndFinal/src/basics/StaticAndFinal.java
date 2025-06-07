package basics;

class Thing {
	public String name;
	
	//Static variables or class variables belong to a class and no object will have it's own unique copy.
	public static String description;
	
	// To make a variable constant use the final keyword. You can't reassign values to constant variables. 
	public final static int LUCKY_NUMBER = 7;
	
	public static int count = 0;
	
	public int id;
	
	public Thing() {
		count++;
		id = count;

	}
	
	public void showName() {
		//  Instance method can access static variables.
		System.out.println(id);
		System.out.println(name);
		System.out.println(description);
	}
	
	public static void showInfo() {
		// Static method can access static variables.
		// Static method can't access instance variables.
		System.out.println(description);
	}
}

public class StaticAndFinal {

	public static void main(String[] args) {
		
		System.out.println("Before creating object count is: " + Thing.count);
		
		// Since static variables belong to a class.
		Thing.description = "I am a thing!";
		Thing thingOne = new Thing();
		Thing thingTwo = new Thing();
		
		thingOne.name = "Bob";
		thingTwo.name = "Sue";
		
		thingOne.showName();
		thingTwo.showName();
		Thing.showInfo();
		
		// Constants in java are represented using UPPERCASE letters.
		System.out.println(Thing.LUCKY_NUMBER);
		
		System.out.println("After creating object count is: " + Thing.count);
	}

}
