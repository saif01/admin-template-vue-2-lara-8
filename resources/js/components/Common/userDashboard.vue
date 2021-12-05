<template>
    <div>
        <div class="area">
            <div class="d-flex justify-content-center align-items-center  blink">
                <img src="/all-assets/common/logo/cpb/cpbit.png" alt="header-logo" class="img-fluid header__logo">
                <div class="h3 font-weight-bold text-dark">CPB-IT User Dashboard</div>
            </div>
            <div>
                <div class="bg_image_logo">
                    <img src="/all-assets/common/logo/cpb/cpbit.png" alt="background">
                </div>
                <div class="d-flex flex-wrap justify-content-around mt-5">
                
                    <div class="card responsive_gap col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p class="carpool"><img src="/all-assets/common/icon/car.png" alt="background" class="img-fluid rotate_icon"></p></li>
                                <li class="h3 mt-3 pt-3 text-center font-weight-bold">Carpool</li>
                            </ul>
                        </router-link>
                    </div>
                    <div class="card col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/application.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-4">iHelp Desk</div> 
                        </router-link>
                    </div>
                    <div class="card responsive_gap col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/application.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-3">Application</div> 
                        </router-link>
                        
                    </div>
                    <div class="card col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/hardware.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-4">Hardware</div> 
                        </router-link>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <div class="card responsive_gap col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/Inventory.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-3">Inventory</div> 
                        </router-link>
                        
                    </div>
                    <div class="card col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/powerbi.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-4">Power BI</div> 
                        </router-link>
                    </div>
                    <div class="card responsive_gap col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/network.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-3">Network</div> 
                        </router-link>
                        
                    </div>
                    <div class="card col-lg-3 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/room.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-4">Room</div> 
                        </router-link>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-around mt-5">
                    <div class="card responsive_gap col-lg-6 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/audit.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-3">Audit</div> 
                        </router-link>
                        
                    </div>
                    <div class="card col-lg-6 col-6 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/userdashboard" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/sms.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-4">SMS</div> 
                        </router-link>
                    </div>
                </div>

                <div class="d-flex flex-wrap justify-content-around mt-5 pb-5">
                    <div class="card col-lg-6 col-12 d-flex justify-content-center align-items-center bg-transparent border-0">
                        <router-link to="/" class="text-decoration-none text-dark">
                            <ul>
                                <li><p><img src="/all-assets/common/icon/logout.png" alt="background" class="img-fluid rotate_icon"></p></li>
                            </ul>
                            <div class="h3 mt-3 pt-3 text-center font-weight-bold pl-3">Logout</div> 
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


<style scoped lang="scss">

ul li:hover .carpool {
    background: #ffc107 ;
}

ul li:hover .carpool:before {
    background: #ebbe37 ;
}

ul li:hover .carpool:after {
    background: #e4b52a ;
}


</style>
