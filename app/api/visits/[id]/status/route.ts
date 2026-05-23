import { ok } from '../../../_utils';export async function PATCH(req:Request,{params}:{params:{id:string}}){return ok({id:params.id,...await req.json()})}
