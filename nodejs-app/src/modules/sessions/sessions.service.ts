import { Injectable, BadRequestException } from '@nestjs/common';
import { GetSessionDto, ResultGetSession } from './session.dto';
import axios from 'axios';
import { paginate } from '../../shares/pagination';
import { sesssionCache } from '../../shares/cache';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SessionsService {
  async getSessions(filter?: GetSessionDto): Promise<ResultGetSession> {
    const valueQueries = plainToClass(GetSessionDto, filter);
    const errors = await validate(valueQueries);
    if (errors.length)
      throw new BadRequestException(Object.values(errors[0].constraints));

    const { limit, page, short_title, status } = filter;

    let sessionValues = sesssionCache.get('sessions');
    if (!sessionValues) {
      const { data } = await axios.get(
        'https://api.entrylevel.net/test/sessions',
      );
      sessionValues = data;
      sesssionCache.set('sessions', data);
    }

    if (short_title && status) {
      const sessions = sessionValues?.filter(
        (session) =>
          session.program[0].short_title === short_title &&
          session.status === status.toUpperCase(),
      );
      return paginate(sessions, page, limit);
    }

    if (short_title) {
      const sessions = sessionValues?.filter(
        (session) => session.program[0].short_title === short_title,
      );
      return paginate(sessions, page, limit);
    }

    if (status) {
      const sessions = sessionValues?.filter(
        (session) => session.status === status.toUpperCase(),
      );
      return paginate(sessions, page, limit);
    }
    return paginate(sessionValues, page, limit);
  }
}
