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
exports.CreateSerieDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSerieDto {
}
exports.CreateSerieDto = CreateSerieDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo titulo es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo titulo debe ser de tipo cadena' }),
    (0, class_validator_1.MaxLength)(250, {
        message: 'El campo nombre no debe ser mayor a 250 caracteres',
    }),
    __metadata("design:type", String)
], CreateSerieDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo sinopsis es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo sinopsis debe ser tipo cadena' }),
    (0, class_validator_1.MaxLength)(5000, {
        message: 'El campo sinopsis no de ser mayor a 30 caracteres',
    }),
    __metadata("design:type", String)
], CreateSerieDto.prototype, "sinopsis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo director es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo director debe ser tipo cadena' }),
    (0, class_validator_1.MaxLength)(100, {
        message: 'El campo director no de ser mayor a 30 caracteres',
    }),
    __metadata("design:type", String)
], CreateSerieDto.prototype, "director", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo teporadas es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo temporadas debe ser tipo cadena' }),
    __metadata("design:type", Number)
], CreateSerieDto.prototype, "temporadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo fechaEstreno debe estar definido' }),
    (0, class_validator_1.IsDateString)({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' }),
    __metadata("design:type", Date)
], CreateSerieDto.prototype, "fechaEstreno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo tipo es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo tipo debe ser tipo cadena' }),
    (0, class_validator_1.MaxLength)(30, {
        message: 'El campo director no de ser mayor a 30 caracteres',
    }),
    __metadata("design:type", String)
], CreateSerieDto.prototype, "tipoClasificasion", void 0);
//# sourceMappingURL=create-serie.dto.js.map