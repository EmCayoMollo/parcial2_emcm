"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serie_entity_1 = require("./entities/serie.entity");
const typeorm_2 = require("typeorm");
let SeriesService = class SeriesService {
    constructor(seriesRepository) {
        this.seriesRepository = seriesRepository;
    }
    async create(createSerieDto) {
        const existe = await this.seriesRepository.findOneBy({
            titulo: createSerieDto.titulo.trim(),
            sinopsis: createSerieDto.sinopsis.trim(),
            director: createSerieDto.director.trim(),
            temporadas: createSerieDto.temporadas,
        });
        if (existe)
            throw new common_1.ConflictException('La serie ya existe');
        const serie = new serie_entity_1.Serie();
        serie.titulo = createSerieDto.titulo.trim();
        serie.sinopsis = createSerieDto.sinopsis.trim();
        serie.director = createSerieDto.director.trim();
        serie.temporadas = createSerieDto.temporadas;
        serie.fechaEstreno = createSerieDto.fechaEstreno;
        return this.seriesRepository.save(serie);
    }
    async findAll() {
        return this.seriesRepository.find();
    }
    async findOne(id) {
        const serie = await this.seriesRepository.findOneBy({ id });
        if (!serie)
            throw new common_1.NotFoundException('La serie no existe');
        return serie;
    }
    async update(id, updateSerieDto) {
        const serie = await this.findOne(id);
        serie.titulo = updateSerieDto.titulo.trim();
        serie.sinopsis = updateSerieDto.sinopsis.trim();
        serie.director = updateSerieDto.director.trim();
        serie.temporadas = updateSerieDto.temporadas;
        serie.fechaEstreno = updateSerieDto.fechaEstreno;
        const serieUpdate = Object.assign(serie, updateSerieDto);
        return this.seriesRepository.save(serieUpdate);
    }
    async remove(id) {
        const serie = await this.findOne(id);
        return this.seriesRepository.softRemove(serie);
    }
};
exports.SeriesService = SeriesService;
exports.SeriesService = SeriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serie_entity_1.Serie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeriesService);
//# sourceMappingURL=series.service.js.map