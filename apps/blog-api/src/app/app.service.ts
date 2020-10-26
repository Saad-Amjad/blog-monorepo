import { Injectable } from '@nestjs/common';
import { Blog } from '@blog-monorepo/shared';

@Injectable()
export class AppService {
  getData(): Blog[] {
    return [{ title: 'New Blog Title 1 ' }, { title: 'New Blog Title 2' }];
  }
}

