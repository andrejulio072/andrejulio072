Dicas de ferramentas e títulos
Além de fornecer texto âncora descritivo, às vezes é útil fornecer contexto adicional para explicar os links. Esse contexto pode ser particularmente útil quando um link contém ou consiste em uma imagem, ícone ou outro elemento não textual.

Contexto adicional pode ser fornecido como texto usando o atributo HTMLtitle . Embora o titleatributo possa ser fornecido a qualquer elemento HTML, geralmente é extremamente útil como contexto adicional ou texto de orientação para elementos clicáveis.

A maioria dos navegadores exibirá o texto de um titleatributo como uma dica de ferramenta , ou seja, quando um usuário passar o cursor sobre um elemento, o texto aparecerá em uma pequena caixa próxima ao cursor.

Para adicionar dicas de ferramentas a um elemento clicável como um link, adicione-o como titleatributo.

<p>
  <a href="https://www.codecademy.com" title="Codecademy is an online learning platform">Codecademy</a> is the best place to learn to code!
</p>
Passe o mouse sobre a palavra “Codecademy” abaixo para ver esse comportamento em ação!

Codecademy é o melhor lugar para aprender a codificar!

OBSERVAÇÃO : O titleatributo é a maneira interna do HTML de criar dicas de ferramentas, mas é conhecido por causar vários problemas de acessibilidade . Os desenvolvedores criaram várias maneiras de criar dicas de ferramentas mais acessíveis, mas isso geralmente requer o uso de CSS e JavaScript, que estão fora do escopo desta lição. Ao criar dicas de ferramentas na natureza, você deve pesquisar maneiras de torná-las acessíveis para todos.

Instruções
1 .
Vamos adicionar algumas informações esclarecedoras aos links por meio de dicas de ferramentas e do titleatributo. Em index.html , você pode encontrar três links no texto da primeira pergunta que dizem “corrida”, “natação” e “bicicleta”. Adicione um titleatributo a cada um desses links para descrevê-los.
