<template>
    <div>
        <div class="area">
            <b-navbar class="shadow py-0" variant="dark">
                <b-navbar-brand href="#" class="m-auto d-flex align-items-center py-0">
                    <img src="/all-assets/common/logo/cpb/cpbit.png" alt="header-logo" class="img-fluid header__logo">
                    <div class="h3 font-weight-bold text-white nav_text">CPB-IT Dashboard</div>
                </b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item>
                        <b-button variant="primary">Home</b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
            <div>
                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <div class="col-lg-3 col-12">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark d-flex justify-content-center align-items-center flex-column m-auto">
                            <div class="logo_div">
                                <div class="user_section img__logo"><img src="/all-assets/common/icon/user-section.png" alt="background" class="img-fluid rotate_icon"></div>
                            </div>
                            <div class="h3 mt-3 logo_text_response text-center font-weight-bold">User Section</div> 
                        </router-link>
                    </div>

                    <div class="col-lg-3 col-12 responsive_gap">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark d-flex justify-content-center align-items-center flex-column">
                            <div class="logo_div">
                                <div class="admin_section img__logo"><img src="/all-assets/common/icon/admin-section.png" alt="background" class="img-fluid rotate_icon"></div>
                            </div>
                            <div class="h3 mt-3 logo_text_response text-center font-weight-bold">Admin Section</div> 
                        </router-link>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-around mt-4">
                    <div class="col-lg-3 col-12">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark d-flex justify-content-center align-items-center flex-column">
                            <div class="logo_div">
                                <div class="logout img__logo"><img src="/all-assets/common/icon/logout.png" alt="background" class="img-fluid rotate_icon"></div>
                            </div>
                            <div class="h3 mt-3 logo_text_response text-center font-weight-bold">Logout</div> 
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
/* header */
.header__logo{
    height: 60px;
}
.blink{
	animation-name: blinker;
	animation-duration: 0.6s;
	animation-iteration-count:infinite;
	animation-timing-function:ease-in-out;
	animation-direction: alternate;
}
@keyframes blinker {
  from {opacity: 1.0;}
  to {opacity: 0.0;}
}
/* background */
.area {
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 99%);
    width: 100%;
    min-height: 100vh;
}

/* icon and logo */
.logo_div {
    position: relative;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    transition: .5s;
    box-shadow: -5px 10px 12px rgba(0, 0, 0, 0.5);
}
.logo_div:hover{
    box-shadow: -5px 10px 12px rgba(0, 0, 0, 0.5);
    transform: scale(1.2);
}
.img__logo{
    transition: .5s;
}
/* carpool */
.logo_div:hover .carpool {
    background: #f8c93d ;
    border-radius: 50%;
}
/* help-desk */
.logo_div:hover .helpDesk {
    background: #17a2b8  ;
    border-radius: 50%;
}
/* application */
.logo_div:hover .application {
    background: #f8c93d ;
    border-radius: 50%;
}
/* hardware */
.logo_div:hover .hardware {
    background: #3898ff ;
    border-radius: 50%;
}
/* inventory */
.logo_div:hover .inventory {
    background: #48b361 ;
    border-radius: 50%;
}

/* powerBi */
.logo_div:hover .powerBi {
    background: #33b6ca ;
    border-radius: 50%;
}

/* network */
.logo_div:hover .network {
    background: #3898ff ;
    border-radius: 50%;
}

/* room */
.logo_div:hover .room {
    background: #f8c93d ;
    border-radius: 50%;
}

/* audit */
.logo_div:hover .audit {
    background: #33b6ca  ;
    border-radius: 50%;
}

/* sms */
.logo_div:hover .sms {
    background: #48b361 ;
    border-radius: 50%;
}

// logout
.logo_div:hover .logout {
    background: #cc3f4d;
    border-radius: 50%;
}
@media all and (max-width:800px) {
    .responsive_gap{
        margin-top: 2rem;
    }
    .nav_text{
        font-size: 18px;
    }
}

/* footer */
.dashboard_footer_bg {
    background: #141e30;
    color: white;
}
// dashboard css
.logo_div:hover .user_section {
    background: #556b9c;
    border-radius: 50%;
}
.logo_div:hover .admin_section {
    background: #3f9971;
    border-radius: 50%;
}
</style>
