import { Controller, Delete, Get, Post, Put } from "@nestjs/common"

@Controller('/prova')
export class ProvaController {
    @Post()
    public create(): any {
        return { data: 'Create !!!'}
    }

    @Get()
    public getAll(): any {
        return { data: 'Get all !!!'}
    }

    @Get(':id')
    public getById(): any {
        return { data: 'Get by id !!!'}
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