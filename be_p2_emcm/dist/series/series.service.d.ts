import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';
export declare class SeriesService {
    private seriesRepository;
    constructor(seriesRepository: Repository<Serie>);
    create(createSerieDto: CreateSerieDto): Promise<Serie>;
    findAll(): Promise<Serie[]>;
    findOne(id: number): Promise<Serie>;
    update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie>;
    remove(id: number): Promise<Serie>;
}
