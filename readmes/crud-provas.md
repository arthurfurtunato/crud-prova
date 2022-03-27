<h1 align="center"> Endpoint (/exam/) :page_facing_up:</h1>

# POST (/exam/)
Nesse caso é possível cadastrar uma nova prova passando as seguintes chaves: "name", "description", "type".<br>
onde o type só pode ser "ONLINE" ou "OFFLINE"

## Body
```json
{
    "name": "Prova Azul",
    "description": "Prova COMPLETA para Turma do 7º ano",
    "type": "OFFLINE"
}
```

## Return 
```json
{
    "exams": {
        "name": "Prova Azul",
        "description": "Prova COMPLETA para Turma do 7º ano",
        "type": "OFFLINE",
        "id": 2
    }
}
```

# GET (/exam/)
Nessa caso são retornada todas as provas <br>
Exemplo:
## Return
```json
{
    "exams": [
        {
            "id": 1,
            "name": "Prova Vermelha",
            "description": "Prova COMPLETA",
            "type": "ONLINE",
            "questions": [
                {
                    "id": 1,
                    "statement": "Qual a maior montanha do mundo?",
                    "options": [
                        {
                            "id": 1,
                            "key": "a",
                            "value": "Monte Everest",
                            "correct": true
                        },
                        {
                            "id": 2,
                            "key": "b",
                            "value": "K2",
                            "correct": false
                        },
                        {
                            "id": 3,
                            "key": "c",
                            "value": "Kangchenjunga",
                            "correct": false
                        },
                        {
                            "id": 4,
                            "key": "d",
                            "value": "Makalu",
                            "correct": false
                        }
                    ]
                },...
            ]
        },...
    ]
}
```

# GET (/exam/:id)

Nesse caso é retornado apenas a prova com o id passado na URL<br>
Exemplo:
## Return
```json
{
    "exams": {
        "id": 1,
        "name": "Prova Vermelha",
        "description": "Prova COMPLETA",
        "type": "ONLINE",
        "questions": [
            {
                "id": 1,
                "statement": "Qual a maior montanha do mundo?",
                "options": [
                    {
                        "id": 3,
                        "key": "a",
                        "value": "Kangchenjunga",
                        "correct": false
                    },
                    {
                        "id": 1,
                        "key": "b",
                        "value": "Monte Everest",
                        "correct": true
                    },
                    {
                        "id": 4,
                        "key": "c",
                        "value": "Makalu",
                        "correct": false
                    },
                    {
                        "id": 2,
                        "key": "d",
                        "value": "K2",
                        "correct": false
                    }
                ]
            },...
        ]
    }
}
```

# UPDATE (/exam/:id)
Nesse caso será atualizada a prova com o id passado na URL, com a informação passada no body.<br>
Exemplo:
## Body
```json
{
    "name": "Prova Lilás",
    "type": "ONLINE"
}
```

## Return
```json
{
    "exams": {
        "id": 1,
        "name": "Prova Lilás",
        "description": "Prova COMPLETA",
        "type": "ONLINE"
    }
}
```

# DELETE (/exam/:id)
Nesse caso será deletada a prova com o id passado na URL.<br>

## Return
```json
{
    "exams": "A pessoa com o id 3 foi deletada com sucesso"
}
```
