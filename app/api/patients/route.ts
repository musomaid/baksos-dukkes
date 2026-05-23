import { z } from 'zod';import { ok } from '../_utils';
const schema=z.object({name:z.string().min(1),age:z.coerce.number(),gender:z.string()});
export async function GET(){return ok([])}
export async function POST(req:Request){const body=schema.parse(await req.json());return ok(body)}
