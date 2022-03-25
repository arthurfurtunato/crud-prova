import { BadRequestException, Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Exam, Question, Option } from "src/models/prova.model"
import { ProvaSchema, QuestionSchema, OptionSchema } from "src/schemas/prova.schema"

@Controller('/exam')
export class ExamController {

    constructor(@InjectRepository(Exam) private model: Repository<Exam>) {}

    @Post()
    public async createProva(@Body() body: ProvaSchema): Promise<{ exams: Exam }> {
        const provaCreated = await this.model.save(body);
        return { exams: provaCreated }
    }

    @Get()
    public async getAll(): Promise<{ exams: Exam[] }> {
        const list = await this.model.find({relations: ['questions.options']});
        return { exams: list }
    }

    @Get(':id')
    public async getById(@Param('id') id: number): Promise<{ exams: Exam}>{
        const prova = await this.model.findOne({ where: { id }, relations: ['questions.options']})
        
        if (!prova) {
            throw new NotFoundException(`Não Achei uma prova com o id ${id}`);
        }
        
        return { exams: prova }
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: ProvaSchema): Promise<{exams: Exam}> {
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
    
    constructor(@InjectRepository(Question) private model: Repository<Question>) {}

    @Post()
    public async createQuestion(@Body() body: QuestionSchema): Promise<{ data: Question }> {
        const questionCreated = body;

        if (!body['prova']) {
            throw new NotFoundException(`A prova precisa existir, para a questão ser cadastrada`)
        }

        const questionInExam = await this.model.save({
            ...questionCreated,
            prova: body['prova'],
        })

        return { data: questionInExam }
    }

    @Get()
    public async getAll(): Promise<{ data: Question[] }> {
        const list = await this.model.find({ relations: ['options']});

        console.log(list[0]['options'][0]['key'])

        return { data: list }
    }

    @Get(':id')
    public async getOne(@Param('id') id: number): Promise<{ data: Question }> {
        const oneQuestion = await this.model.findOne({ where: { id }, relations: ['options']});

        // Criado para caso no momento das criações das options, as alternativas fiquem com o id errado,
        // seja mostrado na ordem correta [a, b, c, d]
        const questionOrdenado = oneQuestion['options'].sort(function(a, b) {
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
    
    constructor(@InjectRepository(Option) private model: Repository<Option>) {}

    @Post()
    public async createQuestion(@Body() body: OptionSchema): Promise<{ data: Option }> {
        const optionCreated = body;

        if (!body['question']) {
            throw new NotFoundException(`A questão precisa existir, para a alternativa ser cadastrada`)
        }

        // if (Question.length >= 4){
        //     throw new ConflictException(`tal tal`)
        // }

        console.log(Question)

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