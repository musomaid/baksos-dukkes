import { z } from 'zod';
export const ok=(data:unknown)=>Response.json({success:true,data});
export const bad=(message:string,status=400)=>Response.json({success:false,message},{status});
export const patientSchema=z.object({nik:z.string().optional(),name:z.string().min(2),age:z.number().int().nonnegative(),birthDate:z.string().optional(),gender:z.string(),address:z.string().optional(),phone:z.string().optional(),mainComplaint:z.string().optional(),category:z.string().optional()});
