package interfaces;

public class App {

	public static void main(String[] args) {
		Machine machine = new Machine();
		machine.start();
		
		Person person = new Person("Bob");
		person.greet();
		
		// I can do this because Machine implements Info.
		Info info = new Machine();
		
		// The only method it can access is the method defined in the interface.
		info.showInfo();
		
		Info infoTwo = person;
		person.showInfo();
		
		outputInfo(machine);
		outputInfo(person);
	}
	
	private static void outputInfo(Info info) {
		info.showInfo();
	}

}
