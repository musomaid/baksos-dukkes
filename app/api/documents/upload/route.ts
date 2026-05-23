import { put } from '@vercel/blob';import { ok } from '../../_utils';
export async function POST(req:Request){const fd=await req.formData();const file=fd.get('file') as File;const blob=await put(file.name,file,{access:'public'});return ok({url:blob.url})}
