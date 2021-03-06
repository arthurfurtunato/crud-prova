import { Body, ConflictException, Controller, Delete, Get, NotAcceptableException, NotFoundException, Param, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Exam, Question, Option } from "src/models/exam.model"
import { ExamSchema, QuestionSchema, OptionSchema } from "src/schemas/exam.schema"

@Controller('/exam')
export class ExamController {

    constructor(@InjectRepository(Exam) private model: Repository<Exam>) {}

    @Post()
    public async createProva(@Body() body: ExamSchema): Promise<{ exams: Exam }> {
        const provaCreated = await this.model.save(body);
        return { exams: provaCreated }
    }

    @Get()
    public async getAll(): Promise<{ exams: Exam[] }> {
        const list = await this.model.find({relations: ['questions.options']});

        for (let i of list) {
            for (let j of i.questions) {
                j.options.sort(function(a, b) {
                    if (a.key > b.key) {
                        return 1
                    } else if (a.key < b.key) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
        }

        return { exams: list }
    }

    @Get(':id')
    public async getById(@Param('id') id: number): Promise<{ exams: Exam}>{
        const prova = await this.model.findOne({ where: { id }, relations: ['questions.options']})
        
        if (!prova) {
            throw new NotFoundException(`Não Achei uma prova com o id ${id}`);
        }
        

        for (let i of prova.questions) {
            const optionsKeys = ['a', 'b', 'c', 'd']
            let shuffle = i.options.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
            for (let j of shuffle) {
                j.key = optionsKeys.shift()
            }
            i.options.sort(function(a, b) {
                if (a.key > b.key) {
                    return 1
                } else if (a.key < b.key) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        
        return { exams: prova }
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: ExamSchema): Promise<{exams: Exam}> {
        const prova = await this.model.findOne({ where: { id }})

        if (!prova) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { exams: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<{ exams: string}> {
        const prova = await this.model.findOne({ where: { id }})

        if (!prova) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.delete(id)

        return { exams: `A pessoa com o id ${id} foi deletada com sucesso`}
    }
}


@Controller('/question')
export class QuestionController {
    
    constructor(@InjectRepository(Question) private model: Repository<Question>, @InjectRepository(Option) private modelOption: Repository<Option>) {}

    @Post()
    public async createQuestion(@Body() body: QuestionSchema): Promise<{ data: Question }> {
        const questionCreated = body;

        if (!body['exam']) {
            throw new NotFoundException(`A prova precisa existir, para a questão ser cadastrada`)
        }

        const questionInExam = await this.model.save({
            ...questionCreated,
            exam: body['exam'],
        })

        return { data: questionInExam }
    }

    @Get()
    public async getAll(): Promise<{ data: Question[] }> {
        const list = await this.model.find({ relations: ['options']});
        

        // Dentro dos loops acontece o shuffle, para aleatorizar o array, e logo depois as options recebem suas novas options
        // na ordem correta -> 'a', 'b', 'c', e 'd' e após isso é dado o update para o banco de dados.
        for (let i of list) {
            let shuffle = i.options.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
            const optionsKeys = ['a', 'b', 'c', 'd']
            for (let j of shuffle) {
                const ordenado = optionsKeys.shift()
                j.key = ordenado
            }
            i.options.sort(function(a, b) {
                if (a.key > b.key) {
                    return 1
                } else if (a.key < b.key) {
                    return -1
                } else {
                    return 0
                }
            })            
        }

        return { data: list }
    }

    @Get(':id')
    public async getOne(@Param('id') id: number): Promise<{ data: Question }> {
        const oneQuestion = await this.model.findOne({ where: { id }, relations: ['options']})

        if (!oneQuestion) {
            throw new NotFoundException(`Você não pode receber essa questão, pois não existe questão com o id: ${id}`)
        }

        const shuffle = oneQuestion.options.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
        const optionsKeys = ['a', 'b', 'c', 'd']

        // Dentro do loops acontece o shuffle, para aleatorizar o array, e logo depois as options recebem suas novas options
        // na ordem correta -> 'a', 'b', 'c', e 'd' e após isso é dado o update para o banco de dados.
        for (let j of shuffle) {
            const ordenado = optionsKeys.shift()
            j.key = ordenado
        }   

        // Criado para caso no momento das criações das options, as alternativas fiquem desordenadas,
        // seja mostrado na ordem correta [a, b, c, d]
        oneQuestion['options'].sort(function(a, b) {
            if (a.key > b.key) {
                return 1
            } else if (a.key < b.key) {
                return -1
            } else {
                return 0
            }
        })

        return { data: oneQuestion }
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: QuestionSchema): Promise<{data: Question}> {
        const question = await this.model.findOne({ where: { id }, relations: ['options']})

        if (!question) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe questão com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { data: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<{ data: string}> {
        const question = await this.model.findOne({ where: { id }})

        if (!question) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.delete(id)

        return { data: `A questão com o id ${id} foi deletada com sucesso`}
    }
}


@Controller('/option')
export class OptionController {
    
    constructor(@InjectRepository(Option) private model: Repository<Option>, @InjectRepository(Question) private repository: Repository<Question>) {}

    @Post()
    public async createOption(@Body() body: OptionSchema): Promise<{ data: Option }> {
        const optionCreated = body;
        const id = body['question']
        const question = await this.repository.findOne({where: {id}, relations: ['options']})
        let count = 0;

        for (let i of question.options) {
            if (i.correct === false) {
                count++
            }

            if (question.options.length >= 4) {
                throw new NotAcceptableException(`A questão já possui o máximo de alternativas possível por questão`)
            }

            if (i.correct === true && optionCreated['correct'] === true) {
                throw new ConflictException(`Já existe uma alternativa correta, não podem existir duas.`)
            }

            if (count >= 3 && optionCreated['correct'] === false) {
                throw new NotAcceptableException(`A questão não pode ficar com todas as questões falsas.`)
            }

            if (i.key === optionCreated['key']) {
                throw new NotAcceptableException(`A questão não ter 2 alternativas iguais.`)
            }
        }

        if (optionCreated['key'] !== 'a' && optionCreated['key'] !== 'b' && optionCreated['key'] !== 'c' && optionCreated['key'] !== 'd') {
            throw new NotAcceptableException(`A questão só tem alternativas da letra 'a' até a letra'd'`)
        }

        if (!body['question']) {
            throw new NotFoundException(`A questão precisa existir, para a alternativa ser cadastrada`)
        }

        const optionInQuestion = await this.model.save({
            ...optionCreated,
            question: body['question'],
        })

        return { data: optionInQuestion }
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: Option): Promise<{data: Option}> {
        const option = await this.model.findOne({ where: { id }})

        if (!option) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe alternativa com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { data: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<{ data: string}> {
        const option = await this.model.findOne({ where: { id }})

        if (!option) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe alternativa com o id: ${id}`);
        }

        await this.model.delete(id)

        return { data: `A alternativa com o id ${id} foi deletada com sucesso`}
    }
}