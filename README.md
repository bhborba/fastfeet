# FastFeet

## :rocket: Sobre o app

A aplicação desenvolvida é um app para uma transportadora fictícia, o FastFeet.

### **Um pouco sobre as ferramentas**

- Aplicação criada utilizando Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL);

### **Funcionalidades**

Abaixo estão descritas as funcionalidades adicionadas na aplicação:

### **1. Autenticação**

Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

- A autenticação deve ser feita utilizando JWT.
- Realiza a validação dos dados de entrada;

### 2. Gestão de destinatários

Permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, e esses devem ter o **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.

O cadastro de destinatários só pode ser feito por administradores autenticados na aplicação.

O destinatário não pode se autenticar no sistema, ou seja, não possui senha.

### **3. Gestão de entregadores**

Permita que o administrador possa cadastrar entregadores para a plataforma, o entregador deve possuir os seguintes campos:

- id (id do entregador)
- name (nome do entregador);
- avatar_id (foto do entregador);
- email (email do entregador)
- created_at;
- updated_at;
- active;

Crie rotas para listagem/cadastro/atualização/remoção de entregadores;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação. Para manter o registro dos entregadores, a rota de delete apenas inativa o entregador no app, não o remove definitivamente.

