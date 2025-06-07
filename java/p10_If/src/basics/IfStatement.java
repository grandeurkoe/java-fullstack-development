package basics;

public class IfStatement {

	public static void main(String[] args) {
		int myInt = 16	;
		
		if(myInt < 10) {
			System.out.println("Number is less than 10!");
		} else if (myInt >= 10 && myInt <= 15) {
			System.out.println("Number is between 10 and 15 inclusive.");
		} else {
			System.out.println("Number is greater than 15.");
		}
	}

}
