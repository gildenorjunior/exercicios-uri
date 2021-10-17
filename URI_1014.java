import java.util.Locale;
import java.util.Scanner;

public class URI_1014 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		int km = scanner.nextInt();
		double litros = scanner.nextDouble();
		double consumo = (km / litros);

		System.out.printf("%.3f km/l%n", consumo);

		scanner.close();

    }
}