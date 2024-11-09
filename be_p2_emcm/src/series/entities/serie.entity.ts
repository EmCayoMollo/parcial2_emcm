
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 250 })
  titulo: string;

  @Column('varchar', { length: 5000 })
  sinopsis: string;

  @Column('varchar', { length: 100 })
  director: string;

  @Column('integer', { name: 'temporadas' })
  temporadas: number;

  @Column('date', { name: 'fecha_Estreno' })
  fechaEstreno: Date;

  @Column('varchar', { length: 30 })
  tipoClasificasion: string;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion', select: false })
  fechaEliminacion: Date;
}
