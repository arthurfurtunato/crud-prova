import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Prova, Question, Option } from "src/models/prova.model"
import { ProvaSchema, QuestionSchema, OptionSchema } from "src/schemas/prova.schema"

@Controller('/prova')
export class ProvaController {

    constructor(@InjectRepository(Prova) private model: Repository<Prova>) {}

    @Post()
    public async createProva(@Body() body: ProvaSchema): Promise<{ exams: Prova }> {
        const provaCreated = await this.model.save(body);
        return { exams: provaCreated }
    }

    @Get()
    public async getAll(): Promise<{ exams: Prova[] }> {
        const list = await this.model.find({relations: ['questions.options']});
        return { exams: list }
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<{ exams: Prova }>{
        const prova = await this.model.findOne({ where: { id }, relations: ['questions.options']})
        
        if (!prova) {
            throw new NotFoundException(`Não Achei uma prova com o id ${id}`);
        }
        
        return { exams: prova }
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() body: ProvaSchema): Promise<{exams: Prova}> {
        const prova = await this.model.findOne({ where: { id }})

        if (!prova) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { exams: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<{ exams: string}> {
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

        const questionInProva = await this.model.save({
            ...questionCreated,
            prova: body['prova'],
        })

        return { data: questionInProva }
    }

    @Get()
    public async getAll(): Promise<{ data: Question[] }> {
        const list = await this.model.find({ relations: ['options']});
        return { data: list }
    }

    @Get(':id')
    public async getOne(@Param('id') id: string): Promise<{ data: Question }> {
        const oneQuestion = await this.model.findOne({ where: { id }, relations: ['options']});
        return { data: oneQuestion }
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() body: QuestionSchema): Promise<{data: Question}> {
        const question = await this.model.findOne({ where: { id }, relations: ['options']})

        if (!question) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe questão com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { data: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<{ data: string}> {
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

        const optionInQuestion = await this.model.save({
            ...optionCreated,
            prova: body['question'],
        })

        return { data: optionInQuestion }
    }

    @Get()
    public async getAll(): Promise<{ data: Option[] }> {
        const list = await this.model.find();

        // for (let i in list) {
        //     if (Math.floor(Math.random() * 10))

        //     list[i]['key'] = 
        // }

        return { data: list }
    }

    @Get(':id')
    public async getOne(@Param('id') id: string): Promise<{ data: Option }> {
        const oneOption = await this.model.findOne({ where: { id }});

        if (!oneOption) {
            throw new NotFoundException(`Não achamos nenhuma alternativa com o id ${id}`)
        }

        return { data: oneOption }
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() body: Option): Promise<{data: Option}> {
        const option = await this.model.findOne({ where: { id }})

        if (!option) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe alternativa com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { data: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<{ data: string}> {
        const option = await this.model.findOne({ where: { id }})

        if (!option) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe alternativa com o id: ${id}`);
        }

        await this.model.delete(id)

        return { data: `A alternativa com o id ${id} foi deletada com sucesso`}
    }
}