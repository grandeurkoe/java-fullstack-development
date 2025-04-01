package logic;

public class SimpleInterest {
    public double simpleInterest(double principal, double rate, double time) {
        // Principal amount in rupees.
        // Annual interest rate in percentage.
        // Time in years.
        return (principal * rate * time) / 100;
    }
}
