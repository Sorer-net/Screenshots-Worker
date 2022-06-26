export {}
import router from "./Routes/Router";
import GET from "./Routes/Methods/GET";
import POST from "./Routes/Methods/POST";

router.get("/screenshots/:url", async (ctx) => await GET(ctx.params.url));
router.post("/screenshots/", async (ctx) => await POST(ctx.request));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event));
});