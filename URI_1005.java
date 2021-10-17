import java.util.Locale;
import java.util.Scanner;

public class URI_1005 {
    public static void main(String[] args) {
        
        double A = 0;
		double B = 0;
		double pesoA = 3.5;
		double pesoB = 7.5;
		double SOMA;

		Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        A = scanner.nextDouble();
        B = scanner.nextDouble();
        
        SOMA = ((A * pesoA) + (B * pesoB)) / (pesoA + pesoB); 
        
        System.out.println(String.format("MEDIA = %.5f", SOMA));
        
        scanner.close();

    }
}