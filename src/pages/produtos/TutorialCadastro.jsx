import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css";

const TutorialCadastro = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Fazer um Cadastro</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 6}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é um Cadastro?</h3>
            <p>Fazer um cadastro significa fornecer suas informações para criar uma conta em um site ou aplicativo.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fornecer dados pessoais</td>
                  <td>O sistema cria sua conta para que você possa acessar serviços.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Preenchendo seu Nome Completo</h3>
            <p>1. No formulário de cadastro, encontre o campo "Nome Completo".</p>
            <p>2. Digite seu nome completo exatamente como está em seus documentos.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escrever seu nome</td>
                  <td>O sistema identificará você corretamente.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Informando seu E-mail</h3>
            <p>1. No campo "E-mail", digite um endereço de e-mail válido.</p>
            <p>2. O e-mail deve ser o mesmo que você usa normalmente, pois será necessário para acessar sua conta.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inserir um e-mail válido</td>
                  <td>Você poderá receber notificações e recuperar sua senha, se necessário.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Escolhendo uma Senha Segura</h3>
            <p>1. No campo "Senha", crie uma senha segura com pelo menos 8 caracteres.</p>
            <p>2. Combine letras maiúsculas, minúsculas, números e símbolos.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Criar uma senha forte</td>
                  <td>Sua conta ficará protegida contra invasões.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Informando Telefone e CPF</h3>
            <p>1. No campo "Telefone", digite seu número com DDD.</p>
            <p>2. No campo "CPF", digite seu número sem pontos ou traços.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fornecer telefone e CPF corretos</td>
                  <td>O sistema poderá validar sua identidade corretamente.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 6 && (
          <div className="tutorial-card">
            <h3>Finalizando o Cadastro</h3>
            <p>1. Após preencher tudo, clique no botão "Cadastrar" ou "Criar Conta".</p>
            <p>2. Você poderá receber um e-mail ou SMS para confirmar seu cadastro.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Confirmar seu cadastro</td>
                  <td>Sua conta será criada e você poderá acessá-la sempre que precisar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorialCadastro;
