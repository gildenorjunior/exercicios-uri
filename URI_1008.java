import java.util.Locale;
import java.util.Scanner;

public class URI_1008 {
    public static void main(String[] args) {
        
        int idFuncionario;
		int horasTrabalhadas;
		double valorHora;
		double salario;
		
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		idFuncionario = scanner.nextInt();
		horasTrabalhadas = scanner.nextInt();
		valorHora = scanner.nextDouble();
		
		salario = (horasTrabalhadas * valorHora);
		
		System.out.println("NUMBER = " + idFuncionario);
		System.out.println(String.format("SALARY = U$ %.2f", salario));
		
		
		scanner.close();

    }
}