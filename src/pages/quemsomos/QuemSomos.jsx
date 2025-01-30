

import ReactMarkdown from "react-markdown"; // Importando a biblioteca para renderizar Markdown
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/QuemSomos.css';

// Importe os componentes Header e Footer
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

// O conteúdo do projeto em formato Markdown
const markdownContent = `
#

É um projeto focado no **Letramento Digital para Idosos**, com o objetivo de promover a inclusão digital e melhorar a qualidade de vida dessa população. Através deste projeto, buscamos ensinar aos idosos como utilizar a tecnologia de maneira segura e eficiente, permitindo que se conectem com o mundo digital e acessem uma variedade de serviços e recursos.

## Objetivos do Projeto 🎯

- **Promoção da Inclusão Digital** 📱: Ensinar aos idosos como utilizar dispositivos digitais (computadores, smartphones e tablets), além de navegar na internet, usar e-mails, redes sociais e acessar serviços online.
  
- **Desenvolvimento de Habilidades Digitais** 💻: Capacitar os idosos para o uso de ferramentas essenciais como aplicativos de mensagens (WhatsApp), videoconferências (Zoom, Skype), E-commerce, entre outros.

- **Empoderamento e Independência** 🌟: Oferecer aos idosos mais autonomia, permitindo-lhes acessar serviços como bancos online, consultas médicas, e fazer compras pela internet.

- **Prevenção da Exclusão Social** 👫: Combater o isolamento social proporcionando uma forma de os idosos se manterem conectados com amigos, familiares e a comunidade.

- **Desenvolvimento de Cursos e Capacitações** 📚: Criar workshops e tutoriais que abordem o uso seguro da internet, com foco em evitar golpes e manter os idosos informados e seguros no ambiente digital.

## Estrutura do Projeto 🛠️

### 1. **Cursos e Oficinas 📖**

- **Curso Básico**: Ensino de habilidades como ligar dispositivos, navegar na internet, utilizar e-mails e redes sociais.
- **Curso Intermediário**: Capacitação sobre aplicativos de comunicação, como WhatsApp e Zoom, além de dicas sobre segurança digital.

### 2. **Mentoria e Apoio Individualizado 🤝**

- Sessões de apoio individual ou em grupo para solucionar dúvidas específicas dos participantes, proporcionando uma aprendizagem personalizada.

### 3. **Material Didático 📝**

- Desenvolvimento de guias e vídeos tutoriais com explicações claras e simples, utilizando imagens para facilitar o aprendizado.

### 4. **Apoio Psicológico e Social ❤️**

- Oferecer suporte emocional para que os idosos se sintam seguros e confiantes ao aprender novas habilidades tecnológicas.

## Benefícios do Letramento Digital para Idosos 🌐

- **Autonomia** 💪: Os idosos poderão realizar atividades cotidianas, como pagar contas ou buscar informações, de maneira independente.
- **Saúde e Bem-Estar** 🏥: Acesso à telemedicina, informações sobre saúde e contato com profissionais da área.
- **Conexão Social** 🌍: A possibilidade de manter contato com familiares e amigos através de plataformas digitais.
- **Segurança** 🔒: Maior conhecimento sobre segurança online, evitando golpes e fraudes.

## Como Contribuir 🤗

Contribuições são bem-vindas! Se você deseja colaborar com o projeto, siga as etapas abaixo:

1. **Fork o repositório** 🍴.
2. **Crie uma branch** para a sua feature (\`git checkout -b nova-feature\`).
3. **Faça suas alterações** ✏️.
4. **Commit suas mudanças** (\`git commit -m 'Adiciona nova funcionalidade'\`).
5. **Envie suas alterações** (\`git push origin nova-feature\`).
6. Abra um **pull request** 🔀.

## Licença 📄

Distribuído sob a licença MIT. Veja \`LICENSE\` para mais informações.
`;

export default function QuemSomos() {

    const location = useLocation();
  
    useEffect(() => {
      // Verifica se há um hash na URL (se for direcionado para uma âncora)
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1)); // Remove o # e encontra o id
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave até o elemento
        }
      }
    }, [location]);
  
  return (

    <>

      {/* Componente - NAVBAR */}
      <Navbar/>

      <div className="container-somos" id="projeto">

        <div className="AppGit">

          <div className="AppGit-header">

            <h1> Projeto Start Info </h1>

          </div>

          <div className="AppGit-content">

            {/* Renderizando conteúdo Markdown */}
            <ReactMarkdown>{markdownContent}</ReactMarkdown>

          </div>

        </div>

      </div>

      {/* Adicionando o componente Footer */}
      <Footer />
    
    </>

  );
  
}
