import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css";

const TutorialSalvarContatos = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Salvar Contatos no Celular</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 5}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é um Contato?</h3>
            <p>Um contato é um registro salvo no seu celular com informações de uma pessoa, como nome e número de telefone.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salvar um número</td>
                  <td>Facilita o acesso rápido à pessoa sem precisar digitar o número novamente.</td>
                </tr>
                <tr>
                  <td>Adicionar informações extras</td>
                  <td>Ajuda a identificar a pessoa, como empresa ou e-mail.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Como Salvar um Contato?</h3>
            <p>1. Abra o aplicativo "Contatos" ou "Telefone" no seu celular.</p>
            <p>2. Toque no botão de adicionar novo contato (geralmente um ícone de +).</p>
            <p>3. Digite o nome da pessoa e o número de telefone.</p>
            <p>4. Toque em "Salvar" para concluir.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abrir o aplicativo de contatos</td>
                  <td>Pode visualizar e gerenciar todos os seus contatos.</td>
                </tr>
                <tr>
                  <td>Adicionar nome e número</td>
                  <td>Ajuda a reconhecer a pessoa facilmente.</td>
                </tr>
                <tr>
                  <td>Salvar o contato</td>
                  <td>O contato será armazenado e poderá ser encontrado rapidamente.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Como Salvar um Contato a Partir do WhatsApp?</h3>
            <p>1. Abra o WhatsApp e vá até a conversa da pessoa que deseja salvar.</p>
            <p>2. Toque no número no topo da tela.</p>
            <p>3. Selecione "Adicionar aos contatos" e insira o nome.</p>
            <p>4. Toque em "Salvar".</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abrir o chat do WhatsApp</td>
                  <td>Permite salvar o número diretamente do aplicativo.</td>
                </tr>
                <tr>
                  <td>Adicionar aos contatos</td>
                  <td>O número será salvo no seu telefone e aparecerá no WhatsApp.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Como Editar um Contato?</h3>
            <p>1. Abra a lista de contatos do seu celular.</p>
            <p>2. Busque o contato que deseja modificar.</p>
            <p>3. Toque na opção "Editar".</p>
            <p>4. Altere as informações e toque em "Salvar".</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Buscar o contato</td>
                  <td>Encontrar a pessoa na sua lista de contatos.</td>
                </tr>
                <tr>
                  <td>Editar informações</td>
                  <td>Corrigir ou adicionar mais detalhes ao contato.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Como Excluir um Contato?</h3>
            <p>1. Abra a lista de contatos no seu celular.</p>
            <p>2. Toque e segure o contato que deseja remover.</p>
            <p>3. Escolha a opção "Excluir".</p>
            <p>4. Confirme a exclusão.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Segurar o contato</td>
                  <td>Aparecem opções para gerenciar o contato.</td>
                </tr>
                <tr>
                  <td>Confirmar exclusão</td>
                  <td>O contato será removido da sua lista.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default TutorialSalvarContatos;
