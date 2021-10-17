import java.util.Locale;
import java.util.Scanner;

public class URI_1009 {
    public static void main(String[] args) {
        
        String nome;
		double salario;
		double totalVendas;
		double comissao;
		
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		nome = scanner.next();
		salario = scanner.nextDouble();
		totalVendas = scanner.nextDouble();
		
		comissao = salario + (totalVendas * 0.15);
		
		System.out.println(String.format("TOTAL = R$ %.2f", comissao));
		
		scanner.close();

    }
}