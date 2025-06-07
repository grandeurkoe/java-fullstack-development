package access.specifier;

public class App {

	public static void main(String[] args) {
		Plant plant = new Plant();
		System.out.println(plant.name);
		System.out.println(plant.ID);
		
		// Can't access because type is private.
		// System.out.println(plant.type);
	}

}
