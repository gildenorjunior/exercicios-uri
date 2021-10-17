import java.util.Locale;
import java.util.Scanner;

public class URI_1016 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		int valor = (scanner.nextInt() * 2);
		System.out.println(valor + " minutos");

		scanner.close();

    }
}