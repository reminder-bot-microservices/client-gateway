import { Type } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  limit?: number = 10;
}
