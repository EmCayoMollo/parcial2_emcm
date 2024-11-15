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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const typeorm_1 = require("typeorm");
let Serie = class Serie {
};
exports.Serie = Serie;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Serie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Serie.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 5000 }),
    __metadata("design:type", String)
], Serie.prototype, "sinopsis", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], Serie.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'temporadas' }),
    __metadata("design:type", Number)
], Serie.prototype, "temporadas", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_Estreno' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaEstreno", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 30 }),
    __metadata("design:type", String)
], Serie.prototype, "tipoClasificasion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion', select: false }),
    __metadata("design:type", Date)
], Serie.prototype, "fechaEliminacion", void 0);
exports.Serie = Serie = __decorate([
    (0, typeorm_1.Entity)('series')
], Serie);
//# sourceMappingURL=serie.entity.js.map