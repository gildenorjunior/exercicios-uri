import java.util.Locale;
import java.util.Scanner;

public class URI_1018 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		int notas[] = { 100, 50, 20, 10, 5, 2, 1 };
		int valor = scanner.nextInt();

		System.out.println(valor);

		for (int nota : notas) {
			int qtdNotas = (valor / nota);
			System.out.println(qtdNotas + " nota(s) de R$ " + nota + ",00");
			valor = valor % nota;
		}

		scanner.close();

    }
}