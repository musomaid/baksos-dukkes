import { put } from '@vercel/blob';import { ok,bad } from '../../_utils';
export async function POST(req:Request){const form=await req.formData();const file=form.get('file') as File|null; if(!file) return bad('file required'); const blob=await put(file.name,file,{access:'public'}); return ok({url:blob.url,fileName:file.name,fileType:file.type,fileSize:file.size});}
