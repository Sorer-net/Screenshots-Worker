const generateUuid = () => {
    let string: string = "00000000-0000-0000-0000-000000000000";
    let sArray = string.split('');
    for (let iteration = 0; iteration < string.length; iteration++) {
        if (sArray[iteration] === '-') iteration++;
        sArray[iteration] = Math.floor(Math.random() * 15).toString(16);
    }
    return sArray.join('');
}
export default async function generateValidUuid() {
    while (true) {
        const uuid = generateUuid();
        const object = await BUCKET.get(uuid);
        if (!object) return uuid;
    }
}