import { NextResponse } from 'next/server';
export const ok=(data:any)=>NextResponse.json({success:true,data});
