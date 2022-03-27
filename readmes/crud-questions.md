<h1 align="center"> Endpoint (/question/) :question: </h1>

# POST (/question/)
#### Nesse caso é possível cadastrar uma questão passando as seguintes chaves: "statement", "exam".
#### Onde exam era o id da prova aonde vc iria cadastrar a questão.
#### Exemplo:
## Body
```json
{
    "statement": "Quanto é 2+2",
    "exam": 1
}
```

## Return
```json
{
    "data": {
        "statement": "Quanto é 2+2",
        "exam": 1,
        "id": 3
    }
}
```

# GET (/question/)
#### Nesse caso é possível receber todas as questões cadastradas, com todas as informações da cada uma.
#### Exemplo:

## Return
```json
{
    "data": [
        {
            "id": 1,
            "statement": "Qual a maior montanha do mundo?",
            "options": [
                {
                    "id": 4,
                    "key": "a",
                    "value": "Makalu",
                    "correct": false
                },
                {
                    "id": 1,
                    "key": "b",
                    "value": "Monte Everest",
                    "correct": true
                },
                {
                    "id": 2,
                    "key": "c",
                    "value": "K2",
                    "correct": false
                },
                {
                    "id": 3,
                    "key": "d",
                    "value": "Kangchenjunga",
                    "correct": false
                }
            ]
        },...
    ]
}
```

# GET (/question/:id)

#### Nesse caso é possível receber apenas uma questão, sendo ela a de id igual a passada na URL.
#### Exemplo: (No caso do exemplo foi passado o id '2' na URL)

## Return
```json
{
    "data": {
        "id": 2,
        "statement": "Como se traduz a palavra 'nome' para inglês?",
        "options": [
            {
                "id": 8,
                "key": "a",
                "value": "Name",
                "correct": true
            },
            {
                "id": 7,
                "key": "b",
                "value": "Join",
                "correct": false
            },
            {
                "id": 5,
                "key": "c",
                "value": "Cancel",
                "correct": false
            },
            {
                "id": 6,
                "key": "d",
                "value": "Agree",
                "correct": false
            }
        ]
    }
}
```

# UPDATE (/question/:id)
#### Nesse caso é possível atualizar a questão de id igual ao passada na URL, com as informações que você achar necessária.
#### Exemplo: (No caso do exemplo foi passado o id '1' na URL)

## Body
```json
{
    "statement": "Qual das seguintes palavras abaixo é proparoxítona?"
}
```

## Return
```json
{
    "data": {
        "id": 1,
        "statement": "Qual das seguintes palavras abaixo é proparoxítona?"
    }
}
```

# DELETE (/question/:id)
#### Nesse caso a questão de id igual ao passado na URL será deletada.
#### Exemplo: (No caso do exemplo foi passado o id '4' na URL)

## Return
```json
{
    "data": "A questão com o id 4 foi deletada com sucesso"
}
```

