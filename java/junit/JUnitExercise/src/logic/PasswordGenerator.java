package logic;

public class PasswordGenerator {
	public String generate(String nameFirstThree, String randomCharAndNum) {
		return nameFirstThree.concat(randomCharAndNum);
	}
}
