import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { Status } from '../../shares/index';
import { Transform } from 'class-transformer';

export class GetSessionDto {
  @IsOptional()
  @Transform((val) => {
    return val && val.value && typeof val.value === 'string'
      ? val.value.trim()
      : val.value;
  })
  @ApiProperty({
    type: String,
    description: 'short_title',
    required: false,
  })
  short_title?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'status',
    required: false,
  })
  @IsEnum(Status, {
    message: `status Invalid property value ${Object.values(Status).join(
      ', ',
    )}`,
    each: true,
  })
  @Transform((val) => {
    return val && val.value && typeof val.value === 'string'
      ? val.value.trim()
      : val.value;
  })
  status?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'page',
    required: false,
  })
  page?: number;

  @ApiProperty({
    type: String,
    description: 'limit',
    required: false,
  })
  @IsOptional()
  limit?: number;
}

interface Program {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
}

export class Sessions {
  id: string;
  name: string;
  status: Status;
  start_date: Date;
  end_date: Date;
  program: Program[];
}

export class ResultGetSession {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Sessions[];
}
