# 🌸 Wiki Touhou — Documentação do Projeto

> Enciclopédia digital do **Touhou Project**, feita em HTML, CSS e JavaScript.
> **Repositório:** https://github.com/PetrusTF1/wiki-touhou
> **Site em produção:** https://wiki-touhou.vercel.app

> ⚠️ O projeto foi desenvolvido com foco em **desktop (PC)** e pode não estar totalmente otimizado para dispositivos móveis.

---

## 1. Visão geral

A **Wiki Touhou** centraliza informações sobre a série de jogos *bullet hell* criada por ZUN, em um formato de wiki moderna, com foco em:

- Clareza
- Navegação intuitiva
- Design leve e rápido

### Objetivos

- Reunir informações sobre **personagens**, **jogos**, **músicas** e **livros** da franquia
- Manter uma estrutura de páginas organizada e escalável
- Permitir a expansão contínua do conteúdo

---

## 2. Tecnologias

| Camada | Tecnologia | Uso |
|---|---|---|
| Estrutura | HTML5 | Páginas semânticas |
| Estilo | CSS3 | Layout e identidade visual |
| Interatividade | JavaScript (ES6+) | Manipulação dinâmica de conteúdo |
| Hospedagem | Vercel | Deploy do site estático |
| Mídia | Imagens e vídeo (`.mp4`) | Fundo animado e ilustrações |

---

## 3. Páginas do site

Páginas identificadas no site em produção:

| Página | Arquivo | Descrição |
|---|---|---|
| Início | `index.html` | Menu principal com vídeo de fundo e acesso às seções |
| Personagens | `personagem.html` | Informações sobre os personagens |
| Jogos | `jogos.html` | Dados sobre os jogos da franquia |
| Música | `musica.html` | Conteúdo sobre as trilhas sonoras |
| Livros | `Livro.html` | Livros relacionados ao universo Touhou |
| PC-98 | `pc98.html` | Jogos da era PC-98 |
| Configurações | `Configuracoes.html` | Preferências do site |
| Feedback | `feedback.html` | Envio de comentários e sugestões |
| Doação | `Donation.html` | Apoio ao projeto |

### Navegação

```
Início
├── Barra superior: Configurações · Feedback · PC-98 · Donation
└── Cards principais: Personagem · Jogos · Música · Livro
```

---

## 4. Estrutura de arquivos

O repositório contém, na raiz, as pastas `.vscode/` e `html/`, além de `.gitattributes` e `README.md`.

O README atual descreve a estrutura abaixo, que é a **organização pretendida**:

```
wiki-touhou/
├── assets/   # Imagens, ícones e recursos visuais
├── css/      # Estilos da aplicação
├── js/       # Scripts e funcionalidades
└── pages/    # Páginas da wiki
```

No site publicado, as imagens seguem este padrão de pastas:

```
img/
├── img.cenario/     # Cenários, vídeo de fundo (cenario01.mp4) e banners
├── img.personagem/  # Imagens por personagem (ex.: img.reimu/)
├── img.jogos/       # Capas e imagens dos jogos
└── img.livro/       # Capas dos livros
```

> 📝 **A confirmar:** a estrutura real do repositório (conteúdo da pasta `html/`) difere do README. Vale atualizar uma das duas para que fiquem consistentes.

---

## 5. Como executar localmente

Por ser um site estático, não há build nem dependências.

```bash
# 1. Clonar o repositório
git clone https://github.com/PetrusTF1/wiki-touhou.git
cd wiki-touhou

# 2. Abrir o projeto
# Opção A: abrir o arquivo index.html diretamente no navegador
# Opção B (recomendada): servidor local, por exemplo com Python
python -m http.server 8000
# acesse http://localhost:8000
```

Com o VS Code, também é possível usar a extensão **Live Server** (o repositório já possui a pasta `.vscode/`).

---

## 6. Deploy

O site é publicado na **Vercel** (`wiki-touhou.vercel.app`).

1. Conecte o repositório do GitHub à Vercel
2. Framework preset: **Other** (site estático)
3. Build command: nenhum
4. Output directory: raiz do projeto (ou a pasta que contém o `index.html`)
5. A cada `push` na branch `main`, o deploy é refeito automaticamente

---

## 7. Como adicionar conteúdo

### Novo personagem

1. Adicione as imagens em `img/img.personagem/img.<nome>/`
2. Inclua a entrada em `personagem.html`, seguindo o padrão dos personagens existentes
3. Teste localmente e faça o commit

### Novo jogo

1. Adicione a capa em `img/img.jogos/`
2. Inclua a entrada em `jogos.html`

### Nova página

1. Crie o `.html` seguindo o layout das páginas existentes
2. Adicione o link no menu ou card correspondente
3. Mantenha o padrão de nomes dos arquivos

---

## 8. Convenções sugeridas

- **Commits:** mensagens curtas e descritivas (ex.: `feat: adiciona página de Marisa`)
- **Nomes de arquivo:** padronizar capitalização (hoje há `personagem.html` e `Livro.html`, por exemplo). Recomenda-se usar sempre minúsculas, pois servidores Linux como o da Vercel diferenciam maiúsculas de minúsculas
- **Imagens:** otimizar antes de enviar (WebP ou PNG comprimido) para manter o site leve
- **Idioma:** conteúdo em português (BR)

---

## 9. Limitações conhecidas

- Layout não otimizado para dispositivos móveis
- Estrutura de pastas do README não corresponde à organização real do repositório
- Sem testes automatizados (projeto estático)

---

## 10. Roadmap sugerido

- [ ] Tornar o layout responsivo (mobile)
- [ ] Barra de busca entre personagens, jogos e músicas
- [ ] Separar o conteúdo em dados (ex.: JSON) para facilitar a expansão
- [ ] Adicionar licença ao repositório
- [ ] Criar `CONTRIBUTING.md` com o guia para colaboradores

---

## 11. Contribuição

1. Faça um *fork* do repositório
2. Crie uma branch: `git checkout -b feature/minha-melhoria`
3. Faça o commit: `git commit -m "feat: minha melhoria"`
4. Envie: `git push origin feature/minha-melhoria`
5. Abra um *Pull Request*

---

## 12. Créditos e aviso legal

- **Autor do projeto:** [PetrusTF1](https://github.com/PetrusTF1)
- **Touhou Project** é uma criação de **ZUN** (Team Shanghai Alice). Este é um projeto de fãs, sem fins oficiais, e não possui afiliação com o criador.
- Os personagens, imagens e demais materiais da franquia pertencem aos seus respectivos detentores.
