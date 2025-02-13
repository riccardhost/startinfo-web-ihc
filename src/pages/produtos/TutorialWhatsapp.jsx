import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css"; 

const TutorialWhatsapp = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Usar o WhatsApp.</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 6}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é o WhatsApp?</h3>
            <p>O WhatsApp é um aplicativo de mensagens instantâneas que permite enviar mensagens de texto, áudio, fazer chamadas de voz e vídeo, e compartilhar fotos, vídeos, documentos e muito mais.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enviar mensagens</td>
                  <td>Comunicar-se com amigos e familiares em tempo real.</td>
                </tr>
                <tr>
                  <td>Fazer chamadas</td>
                  <td>Realizar chamadas de voz ou vídeo para contatos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Como Usar o WhatsApp?</h3>
            <p>1. Baixe o WhatsApp na Play Store ou App Store.</p>
            <p>2. Abra o aplicativo e cadastre seu número de telefone.</p>
            <p>3. Crie seu perfil adicionando uma foto e nome.</p>
            <p>4. Abra o chat com seus amigos, envie mensagens ou faça chamadas.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Baixar o app</td>
                  <td>Tenha o WhatsApp instalado no seu celular.</td>
                </tr>
                <tr>
                  <td>Cadastrar número</td>
                  <td>Associar o aplicativo ao seu número de telefone.</td>
                </tr>
                <tr>
                  <td>Criar perfil</td>
                  <td>Deixar seu perfil personalizado e visível para os outros.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Como Enviar Mensagens?</h3>
            <p>1. Abra o WhatsApp e escolha o chat da pessoa ou grupo com quem deseja falar.</p>
            <p>2. Digite sua mensagem no campo de texto.</p>
            <p>3. Pressione o ícone de envio (seta ou ícone de enviar) para mandar a mensagem.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escolher chat</td>
                  <td>Selecionar o contato com quem deseja conversar.</td>
                </tr>
                <tr>
                  <td>Escrever mensagem</td>
                  <td>Digitar o conteúdo que você deseja enviar.</td>
                </tr>
                <tr>
                  <td>Clicar em Enviar</td>
                  <td>Transmitir a mensagem para o destinatário escolhido.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Como Fazer Chamadas de Voz ou Vídeo?</h3>
            <p>1. Abra o chat de uma pessoa com quem deseja falar.</p>
            <p>2. Toque no ícone de chamada de voz (telefone) ou vídeo (câmera) no topo da tela.</p>
            <p>3. Aguarde a pessoa atender a sua chamada.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escolher ícone de chamada</td>
                  <td>Decidir entre chamada de voz ou vídeo.</td>
                </tr>
                <tr>
                  <td>Aguardar atendimento</td>
                  <td>Esperar a pessoa atender a sua chamada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Como Compartilhar Fotos, Vídeos e Documentos?</h3>
            <p>1. Abra o chat onde deseja compartilhar o arquivo.</p>
            <p>2. Toque no ícone de anexo (clip) e escolha se deseja enviar uma foto, vídeo, ou documento.</p>
            <p>3. Selecione o arquivo desejado e toque em "Enviar".</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escolher tipo de arquivo</td>
                  <td>Selecionar foto, vídeo ou documento a ser enviado.</td>
                </tr>
                <tr>
                  <td>Clicar em Enviar</td>
                  <td>Enviar o arquivo para o chat escolhido.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 6 && (
          <div className="tutorial-card">
            <h3>Como Organizar e Gerenciar Seus Chats?</h3>
            <p>1. Toque e segure o chat que deseja arquivar ou deletar.</p>
            <p>2. No menu que aparecer, selecione a opção para arquivar ou excluir.</p>
            <p>3. Use a opção de pesquisa para encontrar conversas rapidamente.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arquivar chat</td>
                  <td>Organize chats sem apagá-los, facilitando o acesso posterior.</td>
                </tr>
                <tr>
                  <td>Excluir chat</td>
                  <td>Remova conversas antigas ou desnecessárias.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  );
};

export default TutorialWhatsapp;
