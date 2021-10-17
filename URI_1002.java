import java.util.Locale;
import java.util.Scanner;

public class URI_1002 {
    public static void main(String[] args) {
        
        double raio = 0.0;
		double n = 3.14159;
		
		Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        raio = scanner.nextDouble();
        
        double area = n * (raio * raio);
        
        System.out.println(String.format("A=%.4f", area));
        
        scanner.close();

    }
}