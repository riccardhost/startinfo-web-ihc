import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css";

const TutorialLogin = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Fazer Login</h2>
      
      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 5}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é o Login?</h3>
            <p>O login é o processo de acessar uma conta em um site ou aplicativo, utilizando um nome de usuário (ou e-mail) e uma senha.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Acessar um site ou app</td>
                  <td>Você verá a tela de login onde pode inserir suas informações.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Passo 1: Acesse a Página de Login</h3>
            <p>1. Abra o site ou aplicativo onde deseja fazer login.</p>
            <p>2. Procure pelo botão ou campo que diz "Entrar" ou "Login" e clique nele.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Encontrar a página de login</td>
                  <td>Você será direcionado para uma tela onde poderá inserir seu e-mail e senha.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Passo 2: Insira Suas Informações</h3>
            <p>1. No campo "E-mail" ou "Nome de usuário", digite o e-mail cadastrado.</p>
            <p>2. No campo "Senha", digite sua senha correta.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Digitar e-mail e senha</td>
                  <td>O sistema verifica se os dados estão corretos para liberar o acesso.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Passo 3: Confirme e Faça Login</h3>
            <p>1. Após preencher os campos, clique no botão "Entrar" ou "Login".</p>
            <p>2. Se as informações estiverem corretas, você será direcionado para sua conta.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clicar em "Entrar"</td>
                  <td>Se os dados estiverem corretos, você acessará sua conta.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>O que Fazer se Esquecer a Senha?</h3>
            <p>1. Na tela de login, clique em "Esqueci minha senha".</p>
            <p>2. Siga as instruções para redefinir sua senha por e-mail.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Redefinir senha</td>
                  <td>Você receberá um link para criar uma nova senha e acessar sua conta.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorialLogin;
