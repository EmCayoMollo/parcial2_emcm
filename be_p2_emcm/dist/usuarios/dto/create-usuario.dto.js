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
exports.CreateUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUsuarioDto {
}
exports.CreateUsuarioDto = CreateUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo usuario es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo usuario debe ser de tipo cadena' }),
    (0, class_validator_1.MaxLength)(15, {
        message: 'El campo usuario no debe ser mayor a 15 caracteres',
    }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo email es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo email debe ser de tipo cadena' }),
    (0, class_validator_1.MaxLength)(50, {
        message: 'El campo email no debe ser mayor a 50 caracteres',
    }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo rol es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo rol debe ser de tipo cadena' }),
    (0, class_validator_1.MaxLength)(15, {
        message: 'El campo rol no debe ser mayor a 15 caracteres',
    }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "rol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo premium debe estar definido' }),
    (0, class_validator_1.IsBooleanString)({ message: 'El campo premium debe ser de tipo lógico' }),
    __metadata("design:type", Boolean)
], CreateUsuarioDto.prototype, "premium", void 0);
//# sourceMappingURL=create-usuario.dto.js.map