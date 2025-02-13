import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css";

const TutorialPix = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Usar o PIX</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 6}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é o PIX?</h3>
            <p>O PIX é um sistema de pagamentos que permite enviar e receber dinheiro de forma instantânea.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PIX usa um código chamado chave PIX (CPF, telefone, e-mail ou chave aleatória).</td>
                  <td>Você pode receber dinheiro apenas informando sua chave, sem precisar compartilhar dados bancários.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Como Acessar o PIX no Banco</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abra o aplicativo do seu banco no celular e procure pela opção "PIX".</td>
                  <td>Você verá a tela do PIX, onde poderá escolher se deseja pagar, receber ou transferir dinheiro.</td>
                </tr>
                <tr>
                  <td>Se não encontrar, use a barra de busca e digite "PIX".</td>
                  <td>O aplicativo mostrará um atalho direto para a opção PIX.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Como Fazer um Pagamento com PIX</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escolha "Pagar com PIX" no aplicativo do banco.</td>
                  <td>Você verá opções para pagar via chave PIX, QR Code ou boleto PIX.</td>
                </tr>
                <tr>
                  <td>Digite a chave PIX da pessoa que vai receber o dinheiro.</td>
                  <td>O nome e banco do destinatário aparecerão para confirmação.</td>
                </tr>
                <tr>
                  <td>Escolha o valor e confirme.</td>
                  <td>O banco mostrará um resumo antes de concluir o pagamento.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Como Receber Dinheiro pelo PIX</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No app do banco, vá até "Receber com PIX".</td>
                  <td>Você poderá compartilhar sua chave ou gerar um QR Code.</td>
                </tr>
                <tr>
                  <td>Compartilhe sua chave PIX com quem vai te pagar.</td>
                  <td>A pessoa insere a chave no app dela e faz o pagamento.</td>
                </tr>
                <tr>
                  <td>Gere um QR Code se quiser um pagamento com valor exato.</td>
                  <td>O pagador só precisa escanear e confirmar a transação.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Como Confirmar que o PIX Foi Feito</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Após enviar ou receber um PIX, o app mostrará uma tela de confirmação.</td>
                  <td>Você verá os detalhes da transação, como valor, nome do destinatário e horário do pagamento.</td>
                </tr>
                <tr>
                  <td>Verifique o dinheiro na sua conta acessando o extrato.</td>
                  <td>O PIX cai na conta instantaneamente, sem espera.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 6 && (
          <div className="tutorial-card">
            <h3>Vantagens do PIX</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transferir dinheiro de forma rápida e segura.</td>
                  <td>O dinheiro chega na conta do destinatário em segundos.</td>
                </tr>
                <tr>
                  <td>Disponível todos os dias, inclusive feriados.</td>
                  <td>Pague ou receba dinheiro a qualquer hora.</td>
                </tr>
                <tr>
                  <td>Não precisa de dinheiro em espécie ou cartão.</td>
                  <td>Basta usar o celular para pagamentos e transferências.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorialPix;

