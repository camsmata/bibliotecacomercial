# Guia de Configuração — Supabase + Vercel

## Central de Inteligência Comercial | Microsistec

Este guia mostra, passo a passo, como configurar o Supabase para autenticação e fazer o deploy na Vercel.

---

## Parte 1: Configurando o Supabase

### Passo 1 — Criar conta e projeto no Supabase

1. Acesse [https://supabase.com](https://supabase.com) e clique em **Start your project**
2. Faça login com GitHub (ou e-mail)
3. Clique em **New Project**
4. Preencha:
   - **Name**: `microsistec-inteligencia-comercial`
   - **Database Password**: crie uma senha forte e **guarde-a** (anote em local seguro)
   - **Region**: escolha a mais próxima (ex: South America — São Paulo)
   - **Plan**: Free (gratuito) é suficiente
5. Clique em **Create new project** e aguarde (~2 minutos)

### Passo 2 — Criar os usuários no Supabase

1. No painel do Supabase, clique em **Authentication** no menu lateral esquerdo
2. Clique em **Users** e depois em **Add user**
3. Crie o usuário master:
   - **Email**: `camila@microsistec.com.br`
   - **Password**: escolha uma senha forte (ex: `Microsistec@2026!`)
   - **Auto Confirm User**: marque **Sim** (para não precisar de confirmação por e-mail)
4. Repita para o usuário comercial:
   - **Email**: `comercial@microsistec.com.br`
   - **Password**: escolha uma senha forte (ex: `Comercial@2026!`)
   - **Auto Confirm User**: marque **Sim**

### Passo 3 — Obter as credenciais do projeto

1. No painel do Supabase, clique no ícone de engrenagem (**Project Settings**) no canto inferior esquerdo
2. Clique em **API**
3. Você verá duas informações importantes:
   - **Project URL**: algo como `https://xxxxxxxxx.supabase.co`
   - **anon public key**: uma string longa começando com `eyJ...`
4. **Copie ambos** — você vai precisar deles na Vercel

### Passo 4 — (Opcional) Configurar política de senhas

1. Em **Authentication > Policies**, você pode ajustar:
   - Requisitos de senha mínima
   - Habilitar/desabilitar sign-up público (recomendado: **desabilitar** para que apenas você crie usuários)
2. Em **Authentication > Providers**, certifique-se de que **Email** está habilitado

---

## Parte 2: Deploy na Vercel

### Passo 1 — Subir o código para o GitHub

Se o código ainda não está no GitHub:

1. Crie um repositório no GitHub (ex: `microsistec-inteligencia-comercial`)
2. No terminal, na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Central de Inteligência Comercial - Microsistec"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/microsistec-inteligencia-comercial.git
   git push -u origin main
   ```

### Passo 2 — Conectar na Vercel

1. Acesse [https://vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **Add New Project**
3. Selecione o repositório `microsistec-inteligencia-comercial`
4. A Vercel detectará automaticamente o Vite — mantenha as configurações padrão:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (ou `pnpm build`)
   - **Output Directory**: `dist`
5. **NÃO clique em Deploy ainda** — primeiro configure as variáveis de ambiente

### Passo 3 — Configurar variáveis de ambiente na Vercel

1. Na mesma tela de configuração do projeto, desça até **Environment Variables**
2. Adicione as duas variáveis:

   | Key | Value |
   |-----|-------|
   | `VITE_SUPABASE_URL` | `https://xxxxxxxxx.supabase.co` (sua URL do passo 3 da Parte 1) |
   | `VITE_SUPABASE_ANON_KEY` | `eyJ...` (sua anon key do passo 3 da Parte 1) |

3. Certifique-se de que **Production**, **Preview** e **Development** estão todos marcados
4. Clique em **Deploy**

### Passo 4 — Testar o deploy

1. Aguarde o build completar (~1-2 minutos)
2. Acesse a URL gerada (ex: `microsistec-inteligencia-comercial.vercel.app`)
3. Você verá a tela de login
4. Faça login com um dos usuários criados no Supabase:
   - `camila@microsistec.com.br` + senha definida
   - `comercial@microsistec.com.br` + senha definida
5. Pronto! A Central de Inteligência Comercial está no ar

---

## Parte 3: Modo Demonstração (sem Supabase)

Se você ainda não configurou o Supabase, a plataforma funciona em **modo demonstração** com usuários de teste:

| Usuário | E-mail | Senha |
|---------|--------|------|
| Master | `camila@microsistec.com.br` | `Microsistec@2026` |
| Comercial | `comercial@microsistec.com.br` | `Comercial@2026` |

> **Importante**: O modo demonstração armazena a sessão apenas no localStorage do navegador. Para segurança real, configure o Supabase seguindo os passos acima.

---

## Resumo Rápido

```
1. Criar projeto no Supabase → supabase.com
2. Criar 2 usuários em Authentication > Users
3. Copiar Project URL e anon key de Settings > API
4. Subir código para GitHub
5. Conectar repositório na Vercel
6. Adicionar VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY nas Environment Variables
7. Deploy! ✅
```

---

## Suporte

Em caso de dúvidas, consulte:
- [Documentação do Supabase](https://supabase.com/docs)
- [Documentação da Vercel](https://vercel.com/docs)
- [Deploy de projetos Vite na Vercel](https://vercel.com/docs/frameworks/vite)
