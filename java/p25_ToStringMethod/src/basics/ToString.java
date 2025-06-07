package basics;

class Cat {
	private String name;
	private int id;
	
	public Cat (String name, int id) {
		this.name = name;
		this.id = id;
	}
	public String toString() {
		return String.format("%-4d: %s", id , name);
//		StringBuilder sb = new StringBuilder();
//		sb.append(id).append(" ").append(name);
//		return sb.toString();
	}
	
}

public class ToString {

	public static void main(String[] args) {
		Cat catOne = new Cat("Bob", 7);
		Cat catTwo = new Cat("Andros", 5);

		
		// toString() methods is very helpful in debugging your program.
		System.out.println(catOne);
		System.out.println(catTwo);

	}

}
