export async function GET(){const csv='name,phone\nAhmad,0812\n';return new Response(csv,{headers:{'content-type':'text/csv'}});} 
