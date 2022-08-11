Renderize UI diferente com base em adereços
Incrível! Você passou uma prop de um componente para um componente diferente, acessou essa prop do componente receptor e a renderizou!

Você pode fazer mais do propsque apenas exibi-los. Você também pode usar propspara tomar decisões.

No editor de código, observe a Welcomeclasse do componente.

Você pode dizer this.props.namena linha 5 que Welcomeespera receber uma informação chamada nome . No entanto, Welcomenunca renderiza essa informação! Em vez disso, ele usa as informações para tomar uma decisão.

<Welcome />instâncias renderizarão o texto WELCOME "2" MY WEB SITE BABYYY!!!!!, a menos que o usuário seja Mozart, nesse caso eles renderizarão o mais respeitoso
hello sir it is truly great to meet you
here on the web.

O nome passado não é exibido em nenhum dos casos! O nome é usado para decidir o que será exibido. Esta é uma técnica comum.

Selecione Home.js e observe a Homeclasse do componente. O que será <Welcome />renderizado na tela?

Instruções
1 .
Selecione Saudação.js .

Procure na Greetingfunção de renderização de . Você pode ver que Greetingagora espera dois adereços: namee signedIn.

Observe que nãothis.props.signedIn está localizado dentro de uma instrução. Isso significa que nunca exibirá o valor de . Mas usará esse valor para decidir se deseja exibir uma saudação amigável ou “GO AWAY”.returnGreetingsignedInGreeting

Veja Greetingaté sentir que entende como funciona e abra App.js .

Dentro da Appfunção de renderização de , na linha 12, passe <Greeting />um segundo propde signedIn={false}.

Checkpoint 2 Passed

Dica
No App.js , <Greeting />já está sendo passado um nameprop. Você adicionará outro: signedIn={false}.

2 .
Que rude! Quero dizer, honestamente.

Em App.js , altere o valor de signedInpara <Greeting />exibir uma saudação amigável novamente.
