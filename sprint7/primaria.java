package sprint7;

public class primaria {
  public static void main(String[] args) {
    
    Produto produto1 = new Produto("Iphone", "iphone 15 128gb branco", 5800.00, 10);
    Produto produto3 = new Produto("Samsung", "Samsung S12 128gb preto", 3499.99, 50);
    Produto produto2 = new Produto("SmartTV", "Samsung 50 polegadas", 3900, 20);

    Comparacao comparar = new Comparacao(produto3.getNome(), produto1.getNome());
    Comparacao comparar2 = new Comparacao(produto3, produto2);

        System.out.println(comparar);
        System.out.println(comparar2);

        System.out.println(produto1);
  }
  
}
