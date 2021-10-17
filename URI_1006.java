import java.util.Locale;
import java.util.Scanner;

public class URI_1006 {
    public static void main(String[] args) {
        
        double A = 0;
		double B = 0;
		double C = 0;
		double pesoA = 2;
		double pesoB = 3;
		double pesoC = 5;
		double SOMA;

		Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        A = scanner.nextDouble();
        B = scanner.nextDouble();
        C = scanner.nextDouble();
        
        SOMA = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / (pesoA + pesoB + pesoC); 
        
        System.out.println(String.format("MEDIA = %.1f", SOMA));
        
        scanner.close();

    }
}