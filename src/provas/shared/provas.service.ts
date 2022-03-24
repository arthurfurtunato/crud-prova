import { Injectable } from '@nestjs/common';
import { Prova } from './prova';

@Injectable()
export class ProvasService {
    provas: Prova[] = [
        { id: 1, name: 'Amarela', description: 'Prova 1', type: 'ONLINE', questions: []},
        { id: 2, name: 'Verde', description: 'Prova 2', type: 'ONLINE', questions: []},
        { id: 3, name: 'Azul', description: 'Prova 3', type: 'ONLINE', questions: []},
        { id: 4, name: 'Bege', description: 'Prova 4', type: 'ONLINE', questions: []},
        { id: 5, name: 'Vermelha', description: 'Prova 5', type: 'ONLINE', questions: []},
    ];

    getAll() {
        return this.provas
    }

    getById(id: number) {
        const prova = this.provas.find((value) => value.id == id);
        return prova;
    }

    create(prova: Prova) {
        let lastId = 0;
        if (this.provas.length > 0) {
            lastId = this.provas[this.provas.length - 1].id;
        }

        prova.id = lastId + 1;
        this.provas.push(prova);

        return prova;
    }

    update(prova: Prova) {
        const provaArray = this.getById(prova.id);
        if (provaArray) {
            provaArray.description = prova.description;
            provaArray.name = prova.name;
            provaArray.type = prova.type;
        }

        return provaArray;
    }

    delete(id: number) {
        const index = this.provas.findIndex((value) => value.id == id);
        this.provas.splice(index, 1);
    }
}
