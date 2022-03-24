import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Prova } from "src/models/prova.model"
import { ProvaSchema } from "src/schemas/prova.schema"

@Controller('/prova')
export class ProvaController {

    constructor(@InjectRepository(Prova) private model: Repository<Prova>) {}

    @Post()
    public async create(@Body() body: ProvaSchema): Promise<{ data: Prova }> {
        const  provaCreated = await this.model.save(body)
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
        return { data: prova }
    }

    @Put(':id')
    public update(): any {
        return { data: 'Update !!!'}
    }

    @Delete(':id')
    public delete(): any {
        return { data: 'Delete !!!'}
    }
}