class ContaBancaria {
  constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo(){
    return this._saldo;
  }

  set saldo(valor){
    return this._saldo = valor;
  }

  sacar(valor){
    if(valor > this._saldo){
      return 'operação negada'
    }
    this._saldo = this._saldo - valor;
      return this._saldo;
  }

  depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class contaPoupanca extends ContaBancaria{
  constructor(agencia, numero){
    super(agencia,numero);
    this.tipo = 'poupanca';
  }
}

class contaUniversitaria extends ContaBancaria {
  constructor(agencia, numero){
    super(agencia, numero);
    this.tipo = 'Universitaria';
  }
  sacar(valor){
  if(valor > 500){
    return 'operação negada!'
  }
  this._saldo = this._saldo - valor;
  }
}

