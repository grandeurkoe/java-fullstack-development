package inheritance;

public class Car extends Machine{

	// @Override checks if you are actually overriding a parent method. Triggers an error if the method doesn't exist in parent class.
	@Override
	public void start() {
		System.out.println("Car started!");
	}

	public void wipedWindShield() {
		System.out.println("Wiped windshield!");
	}
	
	public void showInfo() {
		System.out.println(name);
	}
}
