export default function authenticate(request: Request): boolean {
    return request.headers.get("Authorization") === KEY;
}