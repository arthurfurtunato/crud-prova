<h1 align="center"> Endpoint (/option/) :question: </h1>

### Esse Endpoint foi criado para adicionar as opções em cada questão, podendo ter apenas as alternativas: 'a', 'b', 'c' ou 'd'.
### Passando por várias validações para que simule os mais preciso possível uma questão de prova real.

# POST (/option/)
#### Nesse caso será criado uma alternativa da questão, onde terá que ser passada as seguintes chaves: 'key', 'value', 'correct' e 'question'.
#### Onde 'question' será o id da questão aonde essa alternativa será cadastrada.
#### Exemplo:

## Body
```json
{
    "key": "d",
    "value": "infinito",
    "correct": false,
    "question": 3
}
```

## Return
```json
{
    "data": {
        "key": "d",
        "value": "infinito",
        "correct": false,
        "question": 3,
        "id": 12
    }
}
```

# DELETE (/option/:id)
#### Será deletada a alternativa de id igual a que foi inforamda na URL.
#### Exemplo: (No exemplo foi passado o id de valor 1)

## Return
```json
{
    "data": "A alternativa com o id 1 foi deletada com sucesso"
}
```

# UPDATE (/option/:id)
#### Nesse caso será atualizada a opção que tiver id igual ao passado na URL
#### Exemplo: (No exemplo foi passado o id de valor 2)

## Body
```json
{
    "value": "infinito"
}
```

## Return
```json
{
    "data": {
        "id": 2,
        "key": "b",
        "value": "infinito",
        "correct": false
    }
}
```
