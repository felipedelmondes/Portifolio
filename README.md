# 💼 Portfólio Felipe Delmondes

Um portfólio moderno e responsivo desenvolvido para showcasing de habilidades como Desenvolvedor Full Stack, especializado em tecnologias Microsoft e práticas de DevOps.

![Portfolio Preview](https://via.placeholder.com/800x400/007ACC/FFFFFF?text=Portfolio+Preview)

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com Grid e Flexbox
- **JavaScript (ES6+)** - Interatividade e animações
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia profissional (Inter)

### Principais Stacks em Destaque
- **C#** - Linguagem principal para desenvolvimento backend
- **ASP.NET Core** - Framework para APIs e aplicações web
- **Dapper** - Micro ORM para acesso a dados eficiente
- **Oracle Database** - Banco de dados enterprise
- **MySQL** - Sistema de gerenciamento de banco de dados
- **Docker** - Containerização e deploy
- **Microsoft Azure** - Plataforma cloud
- **Azure DevOps** - CI/CD e gerenciamento de projetos

## ✨ Características

### Design
- ✅ **Responsivo** - Funciona perfeitamente em todos os dispositivos
- ✅ **Moderno** - Interface limpa e profissional
- ✅ **Acessível** - Navegação por teclado e leitores de tela
- ✅ **Performático** - Carregamento rápido e otimizado

### Funcionalidades
- 🎯 **Navegação suave** - Scroll animado entre seções
- 📱 **Menu mobile** - Navegação otimizada para dispositivos móveis
- 🎨 **Animações** - Efeitos visuais sutis e profissionais
- 📧 **Formulário de contato** - Sistema de validação completo
- 🌟 **Efeitos interativos** - Hover effects e micro-interações
- 📊 **Barras de progresso animadas** - Visualização de habilidades
- 🔼 **Botão voltar ao topo** - Navegação facilitada
- 🎮 **Easter egg** - Konami code para desenvolvedores curiosos

### Seções
1. **Hero** - Apresentação pessoal com foto e links sociais
2. **Sobre** - Informações profissionais e estatísticas
3. **Habilidades** - Stack tecnológica com níveis de proficiência
4. **Projetos** - Showcase de trabalhos com tecnologias utilizadas
5. **Contato** - Formulário e informações de contato

## 🛠️ Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git (opcional, para controle de versão)

### Instalação Local

1. **Clone ou baixe o repositório:**
```bash
git clone https://github.com/felipedelmondes/portfolio.git
cd portfolio
```

2. **Abra o arquivo index.html em um navegador:**
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

### Usando um servidor local (recomendado)

#### Com Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Com Node.js (http-server):
```bash
npm install -g http-server
http-server
```

#### Com VS Code:
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

Acesse: `http://localhost:8000` (ou porta especificada)

## 🎨 Personalização

### Informações Pessoais

**1. Dados básicos (index.html):**
```html
<!-- Altere as informações pessoais -->
<h1>Olá, eu sou <span class="text-accent">SEU_NOME</span></h1>
<h2>SEU_TÍTULO_PROFISSIONAL</h2>

<!-- Links sociais -->
<a href="https://github.com/SEU_USUARIO">
<a href="https://linkedin.com/in/SEU_PERFIL">
<a href="mailto:SEU_EMAIL@email.com">
```

**2. Cores e estilo (css/style.css):**
```css
:root {
    --primary-color: #007ACC;    /* Cor principal */
    --accent-color: #FF6B35;     /* Cor de destaque */
    /* Modifique conforme sua identidade visual */
}
```

**3. Habilidades e projetos:**
- Edite as seções de skills no HTML
- Atualize os percentuais de proficiência
- Adicione seus projetos reais
- Substitua os links de placeholder pelos seus repositórios

### Imagens

**Estrutura de assets:**
```
assets/
├── favicon.ico          # Ícone do site
├── profile.jpg          # Sua foto profissional
├── project1.jpg         # Imagem do projeto 1
├── project2.jpg         # Imagem do projeto 2
└── project3.jpg         # Imagem do projeto 3
```

**Dicas para imagens:**
- **Foto de perfil:** 300x300px, formato JPG/PNG
- **Projetos:** 400x200px, formato JPG/WebP
- **Favicon:** 32x32px, formato ICO

### Conteúdo

1. **Sobre:** Adapte o texto para sua experiência
2. **Projetos:** Substitua pelos seus projetos reais
3. **Contato:** Atualize informações de contato
4. **SEO:** Modifique title e meta description

## 📱 Deploy

### GitHub Pages
1. Faça upload para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione branch main/master
4. Acesse: `https://seuusuario.github.io/portfolio`

### Netlify
1. Arraste a pasta do projeto para netlify.com
2. Configure domínio personalizado (opcional)
3. Deploy automático a cada commit

### Vercel
```bash
npm install -g vercel
vercel
```

### Azure Static Web Apps
1. Conecte seu repositório GitHub
2. Configure workflow automático
3. Deploy integrado com Azure DevOps

## 🔧 Otimizações

### Performance
- ✅ Imagens otimizadas e lazy loading
- ✅ CSS e JS minificados (produção)
- ✅ Fonts carregadas de forma eficiente
- ✅ Animações com GPU acceleration

### SEO
- ✅ Meta tags otimizadas
- ✅ Estrutura semântica HTML
- ✅ Schema markup para dados estruturados
- ✅ Sitemap.xml (adicionar se necessário)

### Acessibilidade
- ✅ Contraste adequado
- ✅ Navegação por teclado
- ✅ Alt texts em imagens
- ✅ ARIA labels quando necessário

## 🤝 Contribuição

Sinta-se à vontade para:
- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 🔄 Enviar pull requests
- ⭐ Dar uma estrela no projeto

### Como contribuir:
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Sobre o Desenvolvedor

**Felipe Delmondes**
- 🎯 Desenvolvedor Full Stack especializado em C# e ASP.NET
- ☁️ Entusiasta de Cloud Computing e DevOps
- 🚀 Apaixonado por tecnologia e código limpo

**Conecte-se comigo:**
- 💼 [LinkedIn](https://linkedin.com/in/felipedelmondes)
- 🐙 [GitHub](https://github.com/felipedelmondes)
- 📧 Email: seu-email@email.com

---

## 📚 Próximos Passos

### Funcionalidades Futuras
- [ ] 🌙 Modo escuro/claro
- [ ] 🌐 Internacionalização (PT/EN)
- [ ] 📊 Google Analytics
- [ ] 💬 Sistema de comentários
- [ ] 📝 Blog integrado
- [ ] 🎥 Seção de vídeos/demos
- [ ] 📈 Métricas de desempenho

### Melhorias Técnicas
- [ ] ⚡ Service Worker para cache
- [ ] 📦 Build system (Webpack/Vite)
- [ ] 🧪 Testes automatizados
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🔍 SEO avançado
- [ ] 🎨 Animações mais elaboradas

---

**💡 Dica:** Este portfólio foi desenvolvido com foco em demonstrar habilidades técnicas através do próprio código. Cada linha foi cuidadosamente escrita para refletir as melhores práticas de desenvolvimento frontend.

**🎉 Obrigado por visitar meu portfólio!**

---

*Desenvolvido com ❤️ por Felipe Delmondes - 2024*