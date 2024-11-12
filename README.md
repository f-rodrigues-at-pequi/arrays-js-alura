ARRAYS ALURA<a name="TOP"></a>
===================
- - - - 
| Aprendizado    | Novidade? | Aprendi? |
|----------------|-----------|----------|
| Carregar o projeto base que será usado no treinamento. | Não       | Sim      |
| Realizar uma requisição para pegar todos os livros da API de exemplo. | Não       | Sim      |
| Entender que o método `forEach` é semelhante ao `for` antigo, executando a mesma função de maneira mais elegante. | Sim       | Revisar      |
| Exibir os livros da API manipulando o DOM através do método `forEach`. | Sim       | Revisar      |

## Insights
  - ```javascript
      let arr = [4,3,2,1];
      arr.forEach((elemento,indice) => console.log(`elemento:${elemento}, indice:${indice}`))

    Teríamos o mesmo resultado no console com o seguinte código:

    for (let i = 0; i < arr.length; i++) {
        console.log(`elemento:${arr[i]}, indice:${[i]}`)
    }

    Ao executar o código acima, a saída no console será:

    elemento:4, indice:0
    elemento:3, indice:1
    elemento:2, indice:2
    elemento:1, indice:3
  
    ```
  
- - - -

### Aula 2 ###    

| Aprendizado | Novidade? | Aprendi? |
|-------------|-----------|----------|
| Aprender que o método `map` executa uma função para cada elemento do array e devolve um novo array como resultado. | Sim       | Sim      |
| Aplicar um desconto através do método `map` nos preços de cada livro do projeto e entender a diferença entre os métodos `forEach` e `map`.  | Sim       | Sim      |


## Insights
  - O método map invoca a função passada por argumento para cada elemento do array e devolve um novo Array como resultado.


E essa é a principal diferença entre os métodos map e forEach. Sendo assim, o forEach manipula os dados reais de um array e o map cria um novo array.
- - - -

### Aula 3 ###    

| Aprendizado            | Novidade? | Aprendi? |
|------------------------|-----------|----------|
| Realizar testes na documentação oficial do JavaScript para entender como o método `filter` funciona.| Sim       | Sim      |
| Atribuir um evento de clique ao botão para filtrar os livros por categoria através do `filter`.     | Sim       | Revisar      |
| Exibir os livros filtrados por categoria e que estejam disponíveis.                                 | Sim       | Revisar      |

## Insights
  - 
    ``` javascript
        let salaDeJavaScript = filtraEstudantesPorCurso('JavaScript')
        console.log(salaDeJavaScript)
        
        function filtraEstudantesPorCurso(nomeDoCurso) {
            return estudantes.filter(alunos => alunos.curso == nomeDoCurso)
        }
      ```
  Certo! Dessa forma podemos filtrar os estudantes por curso, passando o nome do curso como parâmetro.
  Neste exemplo, estamos filtrando os estudantes do curso de JavaScript e a saída do console será
  -
    `
       console.log(estudantes.filter(estudante => estudante.curso == 'JavaScript'))
    `
- - - -

### Aula 4 ###    

| Aprendizado     | Novidade? | Aprendi? |
|-----------------|-----------|----------|
| Aprender como funciona o método de ordenação de array `sort`.  | Sim    | Sim  |
| Ordenar os livros da aplicação por preço.   | Sim       | Sim      |
| Melhorar a experiência do usuário da aplicação, aplicando uma opacidade nos livros indisponíveis. | Sim   | Sim    |

## Insights
  -
  ```javascript
    let n = [3, 0 , 2, 1, 10, 100];
    console.log(n.sort())       
    
    let p = ['Zequinha', 'anna', 'fábio', 'caio', 'Anna', 'lucas']
    console.log(p.sort())
  ```
  ```javascript
    [ 0, 1, 10, 100, 2, 3 ]
    [ 'Anna', 'Zequinha', 'anna', 'caio', 'fábio', 'lucas' ]
  ```
  O método sort converte elementos em strings e realiza a comparação ordenando de acordo com a pontuação de código Unicode. 
  Observe que método sort coloca o 10 e o 100 antes de 2 porque a string “10” vem antes de “2” ao fazer uma comparação de strings.
  O mesmo acontece na ordenação da variável p onde as letras maiusculas são ordenadas primeiros que as letras minúsculas.

- - - -

### Aula 5 ###    

| Aprendizado            | Novidade? | Aprendi? |
|------------------------|-----------|----------|
| Manipular o DOM para exibir a seção de valor total dos livros disponíveis apenas quando o botão de filtrar livros disponíveis é clicado.                            | Sim       | Sim      |
| Utilizar o método `reduce` para calcular o valor total de todos os livros disponíveis.                                                                              | Sim       | Sim      |
