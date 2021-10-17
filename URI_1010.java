import java.util.Locale;
import java.util.Scanner;

public class URI_1010 {
    public static void main(String[] args) {
        
        int codPrimeiraPeca;
		int codSegundaPeca;
		int qtdPrimeiraPeca;
		int qtdSegundaPeca;
		double valorPrimeiraPeca;
		double valorSegundaPeca;
		
		double valorAPagar;
		
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		codPrimeiraPeca = scanner.nextInt(); qtdPrimeiraPeca = scanner.nextInt(); valorPrimeiraPeca = scanner.nextDouble();
		
		codSegundaPeca = scanner.nextInt(); qtdSegundaPeca = scanner.nextInt(); valorSegundaPeca = scanner.nextDouble();
		
		valorAPagar = (qtdPrimeiraPeca * valorPrimeiraPeca) + (qtdSegundaPeca * valorSegundaPeca); 
		
		System.out.println(String.format("VALOR A PAGAR: R$ %.2f", valorAPagar));
		
		scanner.close();

    }
}