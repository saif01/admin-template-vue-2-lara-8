<template>
    <div>
        <div class="area">
            <div class="d-flex justify-content-center align-items-center  blink">
                <img src="/all-assets/common/logo/cpb/cpbit.png" alt="header-logo" class="img-fluid header__logo">
                <div class="h3 font-weight-bold text-dark">CPB-IT Dashboard</div>
            </div>
            <div>
                <div class="bg_image_logo">
                    <img src="/all-assets/common/logo/cpb/cpbit.png" alt="background">
                </div>
                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <div
                        class="card responsive_gap col-lg-6 col-12 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li>
                                    <p class="user"><img src="/all-assets/common/icon/user-section.png" alt="background"
                                            class="img-fluid rotate_icon" style="height:120px"></p>
                                </li>
                                <li class="h3 mt-3 pt-3 text-center font-weight-bold">User</li>
                            </ul>
                        </router-link>

                    </div>
                    <div
                        class="card responsive_gap col-lg-6 col-12 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/admindashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li>
                                    <p class="admin"><img src="/all-assets/common/icon/admin-section.png" alt="background"
                                            class="img-fluid rotate_icon" style="height:120px"></p>
                                </li>
                                <li class="h3 mt-3 pt-3 text-center font-weight-bold">Admin</li>
                            </ul>
                        </router-link>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <div
                        class="card col-lg-6 col-12 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/" class="text-decoration-none text-dark">
                            <ul>
                                <li>
                                    <p class="logout"><img src="/all-assets/common/icon/logout.png" alt="background"
                                            class="img-fluid rotate_icon" style="height:120px"></p>
                                </li>
                                <li class="h3 mt-3 pt-3 text-center font-weight-bold">Logout</li>
                            </ul>
                        </router-link>
                    </div>
                </div>
                <div class="footer fixed-bottom text-center dashboard_footer_bg">
                    Copyright © Powered By CPB-IT
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
   
    .bg_image_logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.3;
    }

    .dashboard_footer_bg {
        background: #141e30;
        color: white;
    }

    .area {
        background-color: #85FFBD;
        background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 99%);
        width: 100%;
        height: 100vh;
    }

    .header__logo {
        height: 50px;
    }

    .blink {
        animation-name: blinker;
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
    }

    @keyframes blinker {
        from {
            opacity: 1.0;
        }

        to {
            opacity: 0.0;
        }
    }

    ul li {
        list-style: none;
        padding: 0;
    }

    ul li p {
        position: relative;
        display: block;
        width: 120px;
        height: 120px;
        background: #f1ebeb;
        ;
        text-align: center;
        transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
        transition: .5s;
        box-shadow: -30px 30px 10px rgba(0, 0, 0, .5);
    }

    ul li p:before {
        content: '';
        position: absolute;
        top: 10px;
        left: -20px;
        height: 100%;
        width: 20px;
        background: #93a092;
        transition: .5s;
        transform: rotate(0deg) skewY(-45deg);
    }

    ul li p:after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: -10px;
        height: 20px;
        width: 100%;
        background: #D3D3D3;
        transition: .5s;
        transform: rotate(0deg) skewX(-45deg);
    }

    ul li p:hover {
        transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
        box-shadow: -50px 50px 50px rgba(0, 0, 0, .5);
    }

    .rotate_icon {
        transform: rotate(40deg);
    }

    @media all and (max-width:900px) {
        .responsive_gap {
            margin-bottom: 2rem;
        }
    }

</style>


<style scoped lang="scss">
    ul li:hover .user {
        background: #1DE313;
    }

    ul li:hover .user:before {
        background: #43D33C;
    }

    ul li:hover .user:after {
        background: #43D33C;
    }

    // new
    ul li:hover .admin {
        background: #F7E43F;
    }

    ul li:hover .admin:before {
        background: #F9EA6E;
    }

    ul li:hover .admin:after {
        background: #F9EA6E;
    }

    ul li:hover .logout {
        background: #F64638;
    }

    ul li:hover .logout:before {
        background: #F56E63;
    }

    ul li:hover .logout:after {
        background: #F56E63;
    }

</style>
