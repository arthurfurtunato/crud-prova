import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Prova, Question } from "src/models/prova.model"
import { ProvaSchema, QuestionSchema } from "src/schemas/prova.schema"

@Controller('/prova')
export class ProvaController {

    constructor(@InjectRepository(Prova) private model: Repository<Prova>) {}

    @Post()
    public async createProva(@Body() body: ProvaSchema): Promise<{ data: Prova }> {
        const provaCreated = await this.model.save(body);
        return { data: provaCreated }
    }

    @Get()
    public async getAll(): Promise<{ data: Prova[] }> {
        const list = await this.model.find();
        return { data: list }
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<{ data: Prova }>{
        const prova = await this.model.findOne({ where: { id }})
        
        if (!prova) {
            throw new NotFoundException(`Não Achei uma prova com o id ${id}`);
        }
        
        return { data: prova }
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() body: ProvaSchema): Promise<{data: Prova}> {
        const prova = await this.model.findOne({ where: { id }})

        if (!prova) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.update({ id }, body);

        return { data: await this.model.findOne({ where: { id }}) }
    }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<{ data: string}> {
        const prova = await this.model.findOne({ where: { id }})

        if (!prova) {
            throw new NotFoundException(`Você não pode atualizar, pois não existe prova com o id: ${id}`);
        }

        await this.model.delete(id)

        return { data: `A pessoa com o id ${id} foi deletada com sucesso`}
    }
}

@Controller('/question')
export class QuestionController {
    
    constructor(@InjectRepository(Question) private model: Repository<Question>) {}

    @Post()
    public async createQuestion(@Body() body: QuestionSchema): Promise<{ data: Question }> {
        const questionCreated = await this.model.save(body);
        return { data: questionCreated }
    }

    @Get()
    public async getAll(): Promise<{ data: Question[] }> {
        const list = await this.model.find();
        return { data: list }
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() body: QuestionSchema): Promise<{data: Question}> {
        const question = await this.model.findOne({ where: { id }})

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

        return { data: `A pessoa com o id ${id} foi deletada com sucesso`}
    }
}