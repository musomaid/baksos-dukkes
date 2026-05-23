export async function GET(){return new Response('name,age\n', {headers:{'content-type':'text/csv'}})}
