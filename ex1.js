// =======================
// CLASSE SUBJECT (Sujeito)
// =======================
class Subject {
    constructor() {
      // Lista para armazenar os observadores que querem ser notificados
      this.observers = [];
    }
  
    // Método para adicionar um novo observador à lista
    attach(observer) {
      this.observers.push(observer);
    }
  
    // Método para remover um observador da lista
    detach(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Método para notificar todos os observadores sobre uma mudança
    notify() {
      this.observers.forEach(observer => observer.update(this));
    }
  }
  
  // =======================
  // CLASSE CONCRETESUBJECT (Sujeito Concreto)
  // =======================
  class Editor extends Subject {
    constructor() {
      super();
      // Estado inicial do conteúdo do editor
      this.content = '';
    }
  
    // Método para atualizar o conteúdo do editor
    // Sempre que o conteúdo muda, os observadores são notificados
    setContent(newContent) {
      this.content = newContent;
      this.notify();
    }
  }
  
  // =======================
  // CLASSE OBSERVER (Observador)
  // =======================
  class LogListener {
    // Método que será chamado quando o Subject notificar uma mudança
    update(subject) {
      console.log(`Log: Conteúdo alterado para: ${subject.content}`);
    }
  }
  
  // =======================
  // EXEMPLO DE USO
  // =======================
  
  // Cria uma instância do Editor (ConcreteSubject)
  const editor = new Editor();
  
  // Cria uma instância do LogListener (ConcreteObserver)
  const logger = new LogListener();
  
  // Adiciona o logger como observador do editor
  editor.attach(logger);
  
  // Altera o conteúdo do editor
  // Isso acionará o método notify() e chamará o update() do logger
  editor.setContent("Olá, mundo!");
  
  // Saída esperada no console:
  // Log: Conteúdo alterado para: Olá, mundo!
  