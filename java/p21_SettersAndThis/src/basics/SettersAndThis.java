package basics;

class Frog {
	private String name;
	private int age;
	
	public String getName() {
		return name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public void setInfo( String name, int age) {
		setName(name);
		setAge(age);
	}
}

public class SettersAndThis {

	public static void main(String[] args) {
		Frog firstFrog = new Frog();
		firstFrog.setName("Harry");
		firstFrog.setAge(5);
		System.out.println(firstFrog.getName());
		System.out.println(firstFrog.getAge());
	}

}
