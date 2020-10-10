import VueRouter, {RouteConfig} from "vue-router";
import AboutPage from "@/views/AboutPage.vue";
import AnimeListPage from "@/views/AnimeListPage.vue";
import AnimeDetailPage from "@/views/AnimePage.vue";

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: AnimeListPage
    }, {
        path: '/about',
        component: AboutPage
    }, {
        path: '/anime/:id',
        component: AnimeDetailPage
    }
];

const router = new VueRouter({
    routes
});

export default router;
