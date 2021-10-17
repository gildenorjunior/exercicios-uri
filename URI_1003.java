import java.util.Scanner;

public class URI_1003 {
    public static void main(String[] args) {
        
        int A = 0;
        int B = 0;
        int SOMA = 0;
 
        Scanner scanner = new Scanner(System.in);
        
        A = scanner.nextInt();
        B = scanner.nextInt();
        
        SOMA = A + B;
        
        System.out.println("SOMA = " + SOMA);
        
        scanner.close();

    }
}