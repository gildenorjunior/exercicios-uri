import java.util.Locale;
import java.util.Scanner;

public class URI_1017 {
    public static void main(String[] args) {
        
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);

		double tempoGasto = scanner.nextDouble();
		double velocidadeMedia = scanner.nextDouble();

		double qtdCombustivelGasto = ((tempoGasto * velocidadeMedia) / 12);

		System.out.printf("%.3f%n", qtdCombustivelGasto);

		scanner.close();

    }
}