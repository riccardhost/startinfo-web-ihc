import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css";

const TutorialIfood = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Usar e Pedir no iFood</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 5}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é o iFood?</h3>
            <p>O iFood é um aplicativo que permite pedir comida de restaurantes próximos e receber a entrega no seu endereço.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baixar o aplicativo</td>
                  <td>Instale o iFood no seu celular para começar a usá-lo.</td>
                </tr>
                <tr>
                  <td>Criar uma conta</td>
                  <td>Registre-se no iFood para salvar seus pedidos e informações de pagamento.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Como Criar uma Conta?</h3>
            <p>1. Abra o iFood e toque em "Criar Conta".</p>
            <p>2. Insira seu nome completo, e-mail, telefone e senha.</p>
            <p>3. Confirme o código enviado por SMS ou e-mail.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inserir seus dados</td>
                  <td>Seu perfil será criado para acessar o iFood.</td>
                </tr>
                <tr>
                  <td>Confirmar código</td>
                  <td>O iFood verificará sua identidade para manter sua conta segura.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Como Escolher um Restaurante e um Prato?</h3>
            <p>1. No aplicativo, use a barra de pesquisa para encontrar um restaurante ou prato específico.</p>
            <p>2. Navegue pelas opções disponíveis e escolha o que deseja.</p>
            <p>3. Adicione ao carrinho para continuar.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pesquisar restaurante</td>
                  <td>Veja todos os restaurantes disponíveis na sua região.</td>
                </tr>
                <tr>
                  <td>Escolher prato</td>
                  <td>Selecione o que deseja comer e veja detalhes como ingredientes e preço.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Como Finalizar o Pedido?</h3>
            <p>1. No carrinho, confira os itens e selecione "Finalizar Pedido".</p>
            <p>2. Escolha o endereço de entrega e forma de pagamento.</p>
            <p>3. Confirme a compra e aguarde a entrega.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revisar pedido</td>
                  <td>Verifique se tudo está correto antes de pagar.</td>
                </tr>
                <tr>
                  <td>Escolher pagamento</td>
                  <td>Selecione entre cartão, boleto ou pagamento na entrega.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Como Acompanhar a Entrega?</h3>
            <p>1. Após confirmar o pedido, vá até a aba "Meus Pedidos".</p>
            <p>2. Veja o status do pedido e acompanhe a localização do entregador.</p>
            <p>3. Quando o entregador chegar, receba sua comida e aproveite!</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Acompanhar pedido</td>
                  <td>Saiba exatamente quando sua comida será entregue.</td>
                </tr>
                <tr>
                  <td>Receber pedido</td>
                  <td>O entregador chegará no local informado para finalizar a entrega.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorialIfood;
