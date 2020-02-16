# FastFeet

## :rocket: Sobre o app

A aplicação desenvolvida é um app para uma transportadora fictícia, o FastFeet.

### **Um pouco sobre as ferramentas**

- Aplicação criada utilizando Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL);
- Mongoose (MongoDB)
- Nodemailer
- Handlebars

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

### **4. Gestão de encomendas**

Apesar do entregador estar cadastrado, ele não é independente dentro da plataforma, e você deve cadastrar encomendas para os entregadores.

Nessa funcionalidade criaremos um cadastro de encomendas por entregador, a encomenda possui os campos:

- id (id da entrega)
- recipient_id (referência ao destinatário);
- deliveryman_id (referência ao entregador);
- signature_id (referência à uma assinatura do destinatário, que será uma imagem);
- product (nome do produto a ser entregue);
- canceled_at (data de cancelamento, se cancelada);
- start_date (data de retirada do produto);
- end_date (data final da entrega);
- created_at;
- updated_at;

A **data de início** deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h.

A **data de término** da entrega deve ser cadastrada quando o entregador finalizar a entrega:

Os campos **recipient_id** e **deliveryman_id** devem ser cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda é **cadastrada** para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

Crie rotas para listagem/cadastro/atualização/remoção de encomendas;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.
