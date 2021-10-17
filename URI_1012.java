import java.util.Locale;
import java.util.Scanner;

public class URI_1012 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		double a = scanner.nextDouble();
		double b = scanner.nextDouble();
		double c = scanner.nextDouble();
		double PI = 3.14159;

		double areaTrianguloRetangulo = ((a * c) / 2);
		double areaCirculo = (PI * (Math.pow(c, 2)));
		double areaTrapezio = (((a + b) * c) / 2);
		double areaQuadrado = Math.pow(b, 2);
		double areaRetangulo = (a * b);

		System.out.printf("TRIANGULO: %3.3f%n", areaTrianguloRetangulo);
		System.out.printf("CIRCULO: %3.3f%n", areaCirculo);
		System.out.printf("TRAPEZIO: %3.3f%n", areaTrapezio);
		System.out.printf("QUADRADO: %3.3f%n", areaQuadrado);
		System.out.printf("RETANGULO: %3.3f%n", areaRetangulo);
		
		scanner.close();

    }
}