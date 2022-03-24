import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prova } from './shared/prova';
import { ProvasService } from './shared/provas.service';

@Controller('provas')
export class ProvasController {

    constructor(
        private provaService: ProvasService
    ) {  }
    
    @Get()
    async getAll() : Promise<Prova[]> {
        return this.provaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Prova> {
        return this.provaService.getById(id);
    }

    @Post()
    async create(@Body() prova: Prova) : Promise<Prova> {
        return this.provaService.create(prova)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() prova: Prova) : Promise<Prova> {
        prova.id = id;
        return this.provaService.update(prova)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.provaService.delete(id)
    }

}
