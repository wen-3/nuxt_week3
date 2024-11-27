export default defineNuxtRouteMiddleware((to, from) => {
    console.log("我每一頁都可以攔截的到=>", to);
});