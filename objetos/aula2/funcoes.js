const cliente ={
  nome: "João",
  idade: 24,
  email: "joao@Email.com",
  telefone: ["341321321", "31211545"],
  saldo: 200,
  efetuaPagamento: function(valor) {
    if (valor > this.saldo) {
      console.log("Saldfo insuficiente");
    }else{
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

// cliente.efetuaPagamento(10);
cliente.efetuaPagamento(300);