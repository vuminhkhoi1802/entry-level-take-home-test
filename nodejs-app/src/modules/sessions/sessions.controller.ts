import { Controller, Get, Query } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { GetSessionDto } from './session.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionSerive: SessionsService) {}
  @Get()
  @ApiOperation({ summary: 'get sessions' })
  @ApiResponse({ status: 200, description: 'Get sessions success' })
  getSession(@Query() filter?: GetSessionDto) {
    return this.sessionSerive.getSessions(filter);
  }
}
