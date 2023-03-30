import { getCollection } from "astro:content";
import * as hp from "helper-js";

export async function getPostsBySlugs(slugs: string[]) {
  let posts = await getCollection("posts", (item) => slugs.includes(item.slug));
  return slugs.map((slug) => {
    let item = posts.find((post) => post.slug === slug);
    if (!item) {
      throw new Error(`Post not found for slug: ${slug}`);
    }
    return item;
  });
}

// by chatGPT
export function toSlug(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // 去掉字符串开头和结尾的空格
  str = str.toLowerCase(); // 将字符串转换为小写
  str = str.replace(/[^\w\s-]/g, ""); // 将非单词字符和空格替换为“-”
  str = str.replace(/[\s_-]+/g, "-"); // 将连续的空格或“-”替换为单个“-”
  return str;
}

// no undefined, boolean. return only string
export const css = (str: string | undefined | boolean) => str ?? "";

export function capitalize(str: string) {
  return str
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(" ");
}
