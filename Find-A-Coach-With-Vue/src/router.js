import {createRouter, createWebHistory} from "vue-router";

import CoachDetail from "@/pages/coaches/CoachDetail";
import CoachesRegistration from "@/pages/coaches/CoachesRegistration";
import CoachesList from "@/pages/coaches/CoachesList";
import ContactCoaches from "@/pages/requests/ContactCoaches";
import RequestReceived from "@/pages/requests/RequestReceived";
import NotFound from "@/pages/NotFound";

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            children: [
                {path: '/contact', component: ContactCoaches}
            ]
        },
        {path: '/register', component: CoachesRegistration},
        {path: '/requests', component: RequestReceived},
        {path: '/:notFound(.*)', component: NotFound},

    ],

});

export default router;