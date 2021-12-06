<template>
    <div>
        <!-- <router-view></router-view> -->
        <!-- <login-component></login-component> -->
        <div class="d-flex">
            <div class="p-0" :class="{'col-md-4 col-sm-6 sidebar_response':response, 'sidebar_mobile col-md-3 col-lg-2 sidebar_noresponse' :!response}">
                <sidebar-component></sidebar-component>
            </div>
            <div class="p-0" :class="{'col-lg-12 col-md-12 col-sm-6':response, 'col-lg-10 col-md-9 col-sm-12' :!response}" style="overflow-y:scroll;height:100vh;">
                <div class="d-flex flex-column">
                    <div class="col-lg-12 p-0">
                        <navbar-component :response="getResponse"></navbar-component>
                    </div>
                    <div class="col-lg-12 py-3 px-0">
                        <router-view></router-view>
                    </div>
                </div>
                <footer-component></footer-component>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "./Common/sidebar.vue";
import navbar from "./Common/navbar.vue";
import footer from "./Common/footer.vue";
    export default {
        data() {
            return {
                response: false,
            };
        },
        components:{
            "sidebar-component":sidebar,
            "navbar-component":navbar,
            "footer-component":footer,
        },
        methods: {
            getResponse(res) {
                this.response = res;
            },
        },
        watch:{
            $route (to, from){
                const size= window.innerWidth ;
                if(size < 700){
                    document.getElementById("collapseIcon").click();
                }else{
                    
                }
            }
        }
    }
</script>


<style>
.content_right {
    position: fixed;
    top: 80px;
    left: 225px;
}
.content_left {
    position: fixed;
    top: 80px;
    left: 0px;
}
@media (min-width: 300px) and (max-width: 700px) {
    .sidebar_mobile{
        opacity:0;
        position: absolute;
    }
}
@media (min-width: 805px) and (max-width: 2000px) {
    .sidebar_response{
        opacity: 0;
        position: absolute;
    }
    .sidebar_noresponse{
        opacity: 100;
    }
}
</style>