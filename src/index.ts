export {}
import router from "./Routes/Router";
import Screenshots from "./Routes/Screenshot";

router.get("/screenshots/:url", async (ctx) => await Screenshots(ctx.params.url));

addEventListener("fetch", (event) => {
  event.respondWith(router.handle(event));
});