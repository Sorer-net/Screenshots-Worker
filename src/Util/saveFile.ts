export default async function saveFile(request: Request, id: string, data: ArrayBuffer): Promise<void> {
    await BUCKET.put(id, data);
    const ip = request.cf!;
    await fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `Uploaded: \`${id}\`\n`
            + `IP: ||${request.headers.get("cf-connecting-ip")}|| (||${ip.city}||, ||${ip.country}||, AS||${ip.asn}||)\`\n`
            + `Link: ${request.url + id}`
        })
    });
}