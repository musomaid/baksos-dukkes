import { ok } from '../../../_utils'; export async function PATCH(req:Request,{params}:{params:{id:string}}){const {status}=await req.json(); return ok({id:params.id,status});}
