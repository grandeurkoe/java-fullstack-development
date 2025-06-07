package inheritance;

public class App {
	// final keywords on a class prevents it from being inherited from. Example, you can't extend String class.

	public static void main(String[] args) {
		Machine newMachine = new Machine();
		newMachine.start();
		newMachine.stop();
		
		Car newCar = new Car();
		newCar.start();
		newCar.wipedWindShield();
		newCar.showInfo();
		newCar.stop();
	}

}
