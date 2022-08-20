Captação de água da chuva
Aprenda as implementações de JavaScript da pergunta da entrevista de captura de água da chuva.

Uma pergunta comum em entrevistas envolvendo matrizes é o problema de “captura de água da chuva” (também conhecido como problema de “captura de água da chuva”).

O problema
Imagine uma tempestade muito forte sobre uma estrada com muitos buracos e rachaduras. A água da chuva se acumulará nos espaços vazios da estrada, criando poças. Cada poça só pode ser tão alta quanto a estrada ao seu redor, pois qualquer excesso de água simplesmente escorrerá.

O problema de captação de água da chuva pede que você calcule quanta água da chuva ficaria retida nos espaços vazios em um histograma (um gráfico que consiste em uma série de barras). Considere o seguinte histograma:

histograma sem água
Isso pode ser representado em JavaScript como um array preenchido com os valores [4, 2, 1, 3, 0, 1, 2]. Imagine que a água da chuva caiu sobre o histograma e foi coletada entre as barras. Veja como o histograma anterior ficaria cheio de água:

histograma com água
Assim como na estrada, a quantidade de água que pode ser capturada em qualquer espaço não pode ser maior do que os limites ao seu redor. Para resolver o problema, precisamos escrever uma função que receba um array de inteiros e calcule o total de água capturado. Nossa função retornaria 6para o histograma acima. Existem várias maneiras de resolver esse problema, mas vamos nos concentrar em uma implementação ingênua e uma implementação otimizada.

O conceito
A base para todas as soluções para este problema é que a quantidade de água da chuva em qualquer índice é a diferença entre as barras mais baixas e mais altas à esquerda e à direita e a altura do próprio índice:

waterAtIndex = Math.min(highestLeftBound, highestRightBound) - heightOfIndex;
Olhe para o histograma novamente. A quantidade de água no índice 4é 2. Isso ocorre porque seu limite mais alto à esquerda é 3(elemento no índice 3), e seu limite mais alto à direita é 2(elemento no índice 6). O menor desses dois valores é 2, e quando subtraímos a altura do índice de 0, obtemos nossa resposta de 2.

A solução ingênua
A solução ingênua para o problema é:

Percorrer todos os elementos da matriz
Encontre o limite esquerdo mais alto para esse índice
Encontre o limite direito mais alto para esse índice
Pegue o menor desses dois valores
Subtraia a altura desse índice desse mínimo
Adicione a diferença à quantidade total de água
Em JavaScript fica assim:

function naiveSolution(heights) {
  let totalWater = 0;
  for (let i = 1; i < heights.length - 1; i++) {
    let leftBound = 0;
    let rightBound = 0;
    // We only want to look at the elements to the left of i, which are the elements at the lower indices
    for (let j = 0; j <= i; j++) {
      leftBound = Math.max(leftBound, heights[j]);
    }
    // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
    for (let j = i; j < heights.length; j++) {
      rightBound = Math.max(rightBound, heights[j]);
    }
    totalWater += Math.min(leftBound, rightBound) - heights[i];
  }
  return totalWater;
}
Embora esta seja uma solução funcional, ela requer forloops aninhados, o que significa que tem um grande tempo de execução O de O(n^2). Vejamos uma solução com um tempo de execução mais eficiente.

A solução otimizada
A solução anterior tinha um tempo de execução quadrático, mas é possível resolver esse problema a O(n)tempo usando dois ponteiros. Os ponteiros começarão em cada extremidade da matriz e se moverão um em direção ao outro. A abordagem de dois ponteiros é uma abordagem comum para problemas que exigem trabalhar com matrizes, pois permite percorrer a matriz em um único loop e sem a necessidade de criar matrizes de cópia.

Vamos começar criando as seguintes variáveis:

totalWater = 0
leftPointer = 0
rightPointer = heights.length - 1
leftBound = 0
rightBound = 0
leftPointere rightPointercomeçarão no início e no final da matriz, respectivamente, e se moverão um em direção ao outro até se encontrarem. O algoritmo é o seguinte:

while leftPointer < rightPointer
  if the element at leftPointer <= the element at rightPointer
    if the element is larger than leftBound, set leftBound to the element
    add the difference between leftBound and the element at leftPointer to totalWater
    move leftPointer forward by one
  else
    if the element is larger than rightBound, set rightBound to the element
    add the difference between rightBound and the element at rightPointer to totalWater
    move rightPointer back by one

return totalWater
Coding question
Using the pseudocode above, finish the efficientSolution() function. Make sure you run it on the given array first! (If you run into an infinite loop, you can refresh the page to stop it.)

Parabéns! Você criou a solução otimizada para o problema de captação de água da chuva. Esta solução tem uma complexidade de tempo linear porque só percorre o array uma vez. Além disso, tanto esta quanto a solução ingênua têm uma complexidade de espaço constante de O(1). Existem outras soluções que também têm tempo linear, mas têm uma complexidade de espaço linear, como uma solução que usa arrays para acompanhar os limites esquerdo e direito. Como você acha que essa solução funcionaria?

Dica: A abordagem de dois ponteiros
A abordagem de dois pontos é aquela que você pode e deve usar em muitas perguntas da entrevista. Quando você vê um problema que exige que você itere através de uma matriz (ou string), pare um momento e pense se seria possível iterar em seções ao mesmo tempo em vez de em loops separados. Problemas comuns que podem ser resolvidos usando a técnica de dois ponteiros são o problema da soma de dois (encontrar dois números em uma matriz que somam um número especificado) e inverter os caracteres em uma string.
