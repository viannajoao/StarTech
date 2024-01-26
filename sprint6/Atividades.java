package sprint6;

import java.util.Scanner;

public class Atividades {
  public static void main(String[] args) {

    Scanner leitura = new Scanner(System.in);

    System.out.println("Seja bem-vindo ao Comex\n");

    String name = "Fulano";
    int year = 1980;
    String name2 = "Sicrano";
    int year2 = 2000;

    System.out.println(">>> Listagem dos clientes");
    System.out.println("-------------------------------------");
    System.out.println("Nome: " + name);
    System.out.println("Ano de nascimento: " + year);
    System.out.println("-------------------------------------");
    System.out.println("Nome: " + name);
    System.out.println("Ano de nascimento: " + year);

    int sair = 1;

    while(sair != 0) {
      System.out.println("cadastre um produto:");
      System.out.println("Digite o nome do produto");

      String product = leitura.next();
      System.out.println("Valor do produto");
      double valor = leitura.nextDouble();

      System.out.println("---------------------------------\n");
      System.out.println("Produto: " + product);
      System.out.println("Valor: " + valor + "\n");
      System.out.println("---------------------------------\n");

      System.out.println("Digite 0 para sair ou 1 para continuar comprando");
      sair = leitura.nextInt();


    }

  }
}
