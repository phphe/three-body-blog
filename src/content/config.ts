import { myDayjs } from "@/plugins/dayjs";
import { capitalize, toSlug } from "@/plugins/utils";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z
      .array(z.string())
      .transform((tags) =>
        tags.map((tag) => ({ name: capitalize(tag), slug: toSlug(tag) }))
      ),
    // Transform string to Date object
    pubDate: z.string().or(z.date()).transform(dateTransform),
    updatedDate: z
      .string()
      .optional()
      .transform((val) => (!val ? undefined : dateTransform(val))),
    cover: z.string().optional(),
    coverVisible: z.boolean().optional().default(true),
  }),
});

export const collections = { posts };

function dateTransform(val: string | Date) {
  let r = myDayjs.tz(val, "Asia/Shanghai");
  r = r.tz(myDayjs.tz.guess());
  return new Date(r.toISOString());
}
