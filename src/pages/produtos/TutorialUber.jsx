import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css"; 

const TutorialUber = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title" style={{ fontSize: '2rem', color: '#004080' }}>Como Usar o Uber - Um Guia Simples</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 5}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>O que é o Uber?</h3>
            <p>O Uber é um serviço de transporte por aplicativo que conecta motoristas e passageiros...</p>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Como Usar o Uber?</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Baixe o aplicativo Uber</td>
                  <td>Crie sua conta e faça o login.</td>
                </tr>
                <tr>
                  <td>2. Insira o destino</td>
                  <td>Escolha o local de chegada e veja as opções de transporte.</td>
                </tr>
                <tr>
                  <td>3. Selecione o tipo de corrida</td>
                  <td>Escolha entre UberX, Uber Comfort, entre outras opções.</td>
                </tr>
                <tr>
                  <td>4. Confirme e peça o carro</td>
                  <td>Veja o motorista e o tempo estimado de chegada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>O que Fazer ao Entrar no Carro?</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Confirmar a placa e o motorista</td>
                  <td>Verifique se o motorista e o carro são os corretos.</td>
                </tr>
                <tr>
                  <td>2. Sentar confortavelmente</td>
                  <td>Relaxe e aproveite a viagem.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Como Pagar a Corrida?</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Escolher a forma de pagamento</td>
                  <td>Você pode pagar com cartão de crédito, débito ou saldo do Uber.</td>
                </tr>
                <tr>
                  <td>2. Confirmar o pagamento</td>
                  <td>O pagamento será processado automaticamente ao final da corrida.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>Como Saber o Valor da Corrida?</h3>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Verificar o valor estimado</td>
                  <td>O aplicativo mostra uma estimativa do valor antes de confirmar a corrida.</td>
                </tr>
                <tr>
                  <td>2. Confirmar o valor final</td>
                  <td>O valor final é mostrado no fim da corrida, mas pode variar um pouco dependendo do tempo e do tráfego.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  );
};

export default TutorialUber;
