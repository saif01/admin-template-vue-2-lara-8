<template>
    <div>
        <div id="sidebar-container" class="sidebar-container">
            <b-nav vertical>
                <div class="d-flex align-items-center text-white my-2">
                    <img src="/all-assets/common/logo/cpb/Admin.png" alt="logo" class="img-fluid admin_logo_sidenav ml-2 mr-3" />
                    <div class="h4 pt-3">Admin</div>
                </div>
                <ul class="list-unstyled">
                    <b-nav-item>
                        <router-link :to="{ name: 'dashboard' }">
                            <li>
                                <i class="ri-dashboard-line mr-3"></i>

                                Dashboard
                            </li>
                        </router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link :to="{ name: '' }" v-b-toggle.collapse-1>
                            <li>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <i class="ri-dashboard-line mr-3"></i>

                                        Dashboard
                                    </div>

                                    <i class="ri-arrow-left-s-line"></i>
                                </div>
                            </li>
                            </router-link>
                    </b-nav-item>

                    <b-collapse id="collapse-1" class="drop-element">
                        <ul class="list-unstyled">
                            <b-nav-item>
                                <router-link :to="{ name: 'home' }">
                                    <li>
                                        <i class="ri-dashboard-line mr-3"></i>

                                        dash
                                    </li>
                                </router-link>
                            </b-nav-item>
                            <b-nav-item v-b-toggle.collapse-2>
                                <li>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i class="
                                                        ri-dashboard-line
                                                        mr-3
                                                    "></i>

                                            Dash2
                                        </div>

                                        <i class="ri-arrow-left-s-line"></i>
                                    </div>
                                </li>
                            </b-nav-item>
                        </ul>
                        <b-collapse id="collapse-2" class="drop-element-2">
                            <ul class="list-unstyled">
                                <b-nav-item>
                                    <router-link :to="{ name: 'home' }">
                                        <li>
                                            <i class="ri-dashboard-linemr-3"></i>

                                            dash
                                        </li>
                                    </router-link>
                                </b-nav-item>
                            </ul>
                        </b-collapse>
                    </b-collapse>

                    <b-nav-item>
                        <router-link :to="{ name: 'form' }">
                                <li>
                                    <i class="ri-information-line mr-3"></i>

                                    Form
                                </li>
                        </router-link>
                    </b-nav-item>

                    <b-nav-item>
                        <router-link :to="{ name: 'table' }">
                            <li>
                                <i class="ri-table-line mr-3"></i>

                                Table
                            </li>
                        </router-link>
                    </b-nav-item>

                    <router-link :to="{ name: 'home' }">
                        <b-nav-item>
                            <li>
                                <i class="ri-dashboard-line mr-3"></i>

                                Dashboard
                            </li>
                        </b-nav-item>
                    </router-link>
                </ul>
            </b-nav>
        </div>
    </div>
</template>

<style scoped>
.admin_logo_sidenav {
    height: 30px;
    width: 30px;
}

.sidebar-container {
    height: 100vh;
    left: 0;
    /* overflow-x: hidden;
    overflow-y: auto;
    text-align: left; */
    background: #44a08d;
    background: -webkit-linear-gradient(to bottom, #093637, #44a08d);
    background: linear-gradient(to bottom, #093637, #44a08d);
}

ul li {
    transition: 0.1s;
    color: #ffffff;
}

ul li:hover {
    background-color: #44a08d;
    /* background-color: #093637; */
    color: white;
    border-radius: 8px;
    margin: 0 0.3rem;
}

a {
    text-decoration: none;
}

i{
    font-size: large;
}

.drop-element {
    margin-left: 1rem;
}
</style>