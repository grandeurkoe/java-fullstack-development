package logic;


public class Area {
	public static final double PI = 3.14;

	public double circle(double radius) {
		return PI * radius * radius;
	}
	
	public double rectangle(double length, double breadth) {
		return length * breadth;
	}
	
	public double square(double side) {
		return side * side;
	}
}
