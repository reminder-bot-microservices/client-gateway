import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateReminderDto {
  @IsString()
  title: string;

  @IsDate()
  @Type(() => Date)
  date_to_remind: Date;

  @IsNumber({ allowNaN: false })
  @IsPositive()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  early_reminder?: number;

  @IsOptional()
  @IsArray()
  repeat_on?: string[];

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsString()
  description?: string;
}
