import java.util.Locale;
import java.util.Scanner;

public class URI_1007 {
    public static void main(String[] args) {
        
        int A = 0;
		int B = 0;
		int C = 0;
		int D = 0;
		int DIFERENCA;

		Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);
        A = scanner.nextInt();
        B = scanner.nextInt();
        C = scanner.nextInt();
        D = scanner.nextInt();
        
        DIFERENCA = (A * B - C * D); 
        
        System.out.println("DIFERENCA = " + DIFERENCA);
        
        scanner.close();

    }
}