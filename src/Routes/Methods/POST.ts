import authenticate from "../../Util/authenticate";
import getRequestData from "../../Util/getRequestData";
import generateUuid from "../../Util/generateUuid";
import saveFile from "../../Util/saveFile";

export default async function POST(request: Request): Promise<Response> {
    if (!authenticate(request)) return new Response(null, { status: 401 });
    const file = await getRequestData(request);
    if (!file) return new Response(null, { status: 406 });
    const { extension, data } = file;
    const id = await generateUuid();
    await saveFile(request, id + "." + extension, data);
    return new Response(id, { status: 200 });
}