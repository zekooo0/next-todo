import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.',
  }),
  body: z.string().optional(),
  priority: z.string(),
  completed: z.boolean().default(false).optional(),
});
