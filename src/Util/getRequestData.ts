export default async function getRequestData(request: Request): Promise<{
    name: string,
    extension: string,
    data: ArrayBuffer,
    formData: FormData
} | null> {
    let formData: FormData;
    try { formData = await request.formData(); } 
    catch { return null; }
    if (!formData.has("file")) return null;
    const file = formData.get("file") as File;
    const [extension] = file.name.split(".").slice(-1);
    const name = file.name;

    return {
        name: name,
        extension: extension,
        data: await file.arrayBuffer(),
        formData: formData
    }
}