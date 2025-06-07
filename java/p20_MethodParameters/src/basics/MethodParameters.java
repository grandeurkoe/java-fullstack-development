package basics;

class Robot {
	// Here text is a method parameter.
	public void speak(String input) {
		System.out.println(input);
	}
	
	public void jump(int height) {
		System.out.println("Jumping: " + height + " meters.");
	}
	
	public void move(String direction, int distance) {
		System.out.println("Moving " + distance + " meters to the " + direction + ".");
	}
}

public class MethodParameters {

	public static void main(String[] args) {
		Robot sam = new Robot();
		// Passing arguments to speak() method.
		sam.speak("Hi, I'm Sam!");
		sam.jump(5);
		sam.move("east", 10);
		
		String greeting = "Hello there!";
		sam.speak(greeting);
	}

}
