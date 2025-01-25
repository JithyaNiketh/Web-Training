import java.util.Scanner;

public class Q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter First Number: ");
        int a = sc.nextInt();
        System.out.print("Enter Second Number: ");
        int b = sc.nextInt();
        System.out.println("Enter Third Number: ");
        int c = sc.nextInt();

        if (a>b && a>c){
            System.out.println(a + " is the greatest number");
        }

        if (b>a && b>c){
            System.out.println(b + " is the greatest number");
        }

        if (c>a && c>b){
            System.out.println(c + " is the greatest number");
        }

        sc.close();
    }
}
