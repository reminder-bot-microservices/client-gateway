import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import type { TFiltersRange } from '../types';

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

export class RemindersQueriesDto extends PaginationDto {
  @IsString()
  range?: TFiltersRange = 'week';
}
