package logic;

public class Factorial {
    public static long factorial(long num) {
        if (num < 0) {
            System.out.println("Invalid number.");
            return num;
        } else {
            if (num <= 1) {
                return 1;
            } else {
                return num * factorial(num - 1);
            }
        }
    }
}
