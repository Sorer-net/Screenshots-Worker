export {}
import router from "./Routes/Router";
import GET from "./Routes/Methods/GET";

router.get("/screenshots/:url", async (ctx) => await GET(ctx.params.url));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event));
});