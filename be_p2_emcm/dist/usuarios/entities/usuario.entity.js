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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], Usuario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Usuario.prototype, "clave", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Usuario.prototype, "premium", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion', select: false }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaEliminacion", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map