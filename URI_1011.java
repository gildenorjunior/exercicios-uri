import java.util.Locale;
import java.util.Scanner;

public class URI_1011 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

        double PI = 3.14159;
		double raio = scanner.nextDouble();
		double volume = ( 4 / 3.0) * PI * Math.pow(raio, 3);
		
		System.out.printf("VOLUME = %.3f\n", volume);
		
		scanner.close();

    }
}