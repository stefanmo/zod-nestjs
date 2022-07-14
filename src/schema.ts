import { extendApi } from '@anatine/zod-openapi';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const Cat = z.object({
  name: z.string(),
  age: z.number(),
  breed: z.string(),
});

export const RedCat = Cat.extend({
  color: z.literal('red'),
});

export const BlueCat = Cat.extend({
  color: z.literal('blue'),
});

export const DistinctCat = z.discriminatedUnion('color', [RedCat, BlueCat]);

export const CatZ = extendApi(DistinctCat, {
  title: 'Cat',
  description: 'A cat',
});

export class CatDto extends createZodDto(CatZ) {}
