export default async function Screenshots(url: string): Promise<Response> {
    const object = await BUCKET.get(url);
    if (!object) return new Response(null, { status: 404 });
    return new Response(object.body);
}