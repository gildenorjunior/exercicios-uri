import java.util.Scanner;

public class URI_1004 {
    public static void main(String[] args) {
        
        int A = 0;
        int B = 0;
        int PROD;
        
        Scanner scanner = new Scanner(System.in);
        
        A = scanner.nextInt();
        B = scanner.nextInt();
        
        PROD = A * B;
        
        System.out.println("PROD = " + PROD);
        
        scanner.close();

    }
}