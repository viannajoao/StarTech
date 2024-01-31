package sprint7;

import java.util.ArrayList;
import java.util.List;

public class Produto {
  private String nome;
  private String descricao;
  private double preco;
  private int quantidade;

  private List<Produto> produtos;

  public Produto(String name, String descricao, double preco, int quantidade) {
    this.nome = name;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.produtos = new ArrayList<>();

  }

  public double getPreco() {
    return this.preco;
  }

  public String getNome() {
    return nome;
  }

  public String getDescricao() {
    return descricao;
  }

  public int getQuantidade() {
    return quantidade;
  }

  public String toString(Produto c) {
    return ">> Dados do produto:\n" + "nome= " + c.getNome() + '\n' +
        "descricao= " + c.getDescricao() + '\n' +
        '}';
  }
}
