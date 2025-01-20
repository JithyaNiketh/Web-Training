import java.util.Scanner;

public class Q1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if (n%2==0){
            System.out.println("divisible by 2");
        }

        else if (n%3==0){
            System.out.println("divisible by 3");
        }

        else if (n%6==0){
            System.out.println("divisible by 2 and 3");
        }

        sc.close();
    }
}