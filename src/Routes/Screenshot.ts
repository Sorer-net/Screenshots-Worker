export default async function Screenshots(url: string): Promise<Response> {
    return new Response(`${url} is where the image is located`);
}