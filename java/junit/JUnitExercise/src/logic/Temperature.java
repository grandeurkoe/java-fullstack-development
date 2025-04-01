package logic;

public class Temperature {
    public double convertToCelcius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}
