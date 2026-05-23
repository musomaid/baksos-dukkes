import { ok } from '../../_utils'; export async function GET(_:Request,{params}:{params:{id:string}}){return ok({id:params.id});}
