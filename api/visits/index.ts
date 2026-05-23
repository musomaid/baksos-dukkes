import { ok } from '../_utils';export async function GET(){return ok([]);} export async function POST(req:Request){return ok(await req.json());}
