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
