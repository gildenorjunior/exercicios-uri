import java.util.Locale;
import java.util.Scanner;

public class URI_1013 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		int a = scanner.nextInt();
		int b = scanner.nextInt();
		int c = scanner.nextInt();
		
		int maiorAB = (((a + b) +  Math.abs(a - b)) / 2);
		int maiorNumero = (((maiorAB + c) + (Math.abs(maiorAB - c))) / 2);

		System.out.println(maiorNumero + " eh o maior");

		scanner.close();

    }
}