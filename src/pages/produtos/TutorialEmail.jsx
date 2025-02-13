import React, { useState } from 'react';
import "../../styles/ModeloTutorial.css"; 

const TutorialEmail = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="tutorial-container">
      <h2 className="tutorial-title">Tutorial Completo: Como Usar o E-mail.</h2>

      <div className="tutorial-content">
        <div className="tutorial-navigation">
          <button onClick={prevStep} disabled={step === 1}>Passo Anterior</button>
          <button onClick={nextStep} disabled={step === 5}>Próximo Passo</button>
        </div>

        {step === 1 && (
          <div className="tutorial-card">
            <h3>O que é o E-mail?</h3>
            <p>O e-mail (correio eletrônico) é uma ferramenta de comunicação digital que permite enviar e receber mensagens através da internet.</p>

            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enviar um e-mail</td>
                  <td>Você pode comunicar-se com qualquer pessoa ao redor do mundo rapidamente.</td>
                </tr>
                <tr>
                  <td>Receber um e-mail</td>
                  <td>Você recebe mensagens de outras pessoas, empresas ou instituições.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 2 && (
          <div className="tutorial-card">
            <h3>Como Usar o E-mail?</h3>
            <p>1. Abra seu cliente de e-mail (Gmail, Outlook, etc.) ou acesse pelo navegador.</p>
            <p>2. Clique em "Novo E-mail" para começar a criar uma nova mensagem.</p>
            <p>3. Adicione o destinatário no campo "Para", insira um assunto relevante e escreva sua mensagem no corpo do e-mail.</p>
            <p>4. Clique em "Enviar" para que o e-mail seja enviado ao destinatário.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adicionar destinatário</td>
                  <td>O e-mail chegará diretamente à pessoa que você escolheu.</td>
                </tr>
                <tr>
                  <td>Clicar em "Enviar"</td>
                  <td>Seu e-mail será enviado e a pessoa o receberá.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 3 && (
          <div className="tutorial-card">
            <h3>Dicas para Escrever um E-mail Eficaz</h3>
            <ul>
              <li><strong>Assunto Claro:</strong> Coloque um título que resuma o conteúdo do e-mail.</li>
              <li><strong>Saudações:</strong> Comece com um cumprimento apropriado, como "Olá [Nome]" ou "Prezado [Nome]".</li>
              <li><strong>Objetividade:</strong> Seja direto e evite informações irrelevantes para não alongar o e-mail.</li>
              <li><strong>Fechamento Formal:</strong> Finalize com uma saudação cortês como "Atenciosamente" ou "Abraços".</li>
            </ul>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Usar um assunto claro</td>
                  <td>A pessoa que recebe o e-mail sabe rapidamente sobre o que é o conteúdo.</td>
                </tr>
                <tr>
                  <td>Ser objetivo</td>
                  <td>A mensagem será mais fácil de entender e não vai cansar quem está lendo.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 4 && (
          <div className="tutorial-card">
            <h3>Como Anexar Arquivos em um E-mail?</h3>
            <p>1. Durante a composição do e-mail, procure pelo ícone de anexo (geralmente um clip).</p>
            <p>2. Clique sobre o ícone e selecione o arquivo que deseja enviar (documentos, imagens, etc.).</p>
            <p>3. Após o upload do arquivo, certifique-se de que ele foi anexado corretamente e depois clique em "Enviar".</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Clicar no ícone de anexo</td>
                  <td>Você pode adicionar um arquivo ao seu e-mail, como fotos ou documentos.</td>
                </tr>
                <tr>
                  <td>Selecionar o arquivo</td>
                  <td>O arquivo será carregado e estará pronto para ser enviado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {step === 5 && (
          <div className="tutorial-card">
            <h3>Como Organizar sua Caixa de Entrada?</h3>
            <p>1. Use pastas para organizar seus e-mails por categoria, como "Trabalho", "Pessoal" ou "Importante".</p>
            <p>2. Marque os e-mails que você considera essenciais com estrelas ou utilize a opção de "Destacar".</p>
            <p>3. Apague e-mails desnecessários regularmente para manter a caixa de entrada limpa e evitar confusão.</p>
            <table className="tutorial-table">
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Organizar e-mails em pastas</td>
                  <td>Facilita encontrar e-mails importantes rapidamente.</td>
                </tr>
                <tr>
                  <td>Apagar e-mails antigos</td>
                  <td>Mantém sua caixa de entrada limpa e organizada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  );
};

export default TutorialEmail;
