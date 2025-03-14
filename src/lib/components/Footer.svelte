<script lang="ts">
    const contactInfo = {
        phone: "0982 739 788",
        email: "viettri.industry@gmail.com",
        website: "www.thangmayviettri.vn",
        address: "878/1B Hương lộ 2, Khu phố 10, Phường Bình Trị Đông A, Quận Bình Tân, TP.HCM"
    };

    const socialMedia = {
        facebook: "https://www.facebook.com/CTyThangMayVietTri",
        instagram: "https://www.instagram.com/thangmayviettri?fbclid=IwY2xjawI3Rg1leHRuA2FlbQIxMAABHSpXr9PJNR2a3NySlILoj3rea2V7gdZFNJkB5hZ9y2sEZJD1U3UYksigpg_aem_YNV1aeDAj_mT54nE025Fcg",
        youtube: "https://www.youtube.com/@congtytnhhthangmayviettri1657",
        google: "https://g.co/kgs/D9UczoZ"
    };


    const aboutUsInfo = [
        {
            label: "Trang chủ",
            href: "/"
        },
        {
            label: "Giới thiệu",
            href: "/about"
        },
        {
            label: "Dự án tiêu biểu",
            href: "/projects"
        },
        {
            label: "Sản phẩm",
            href: "/products/thangTaiKhach"
        },
        {
            label: "Mẫu mã",
            href: "/patterns/cabin"
        },
        {
            label: "Tin tức",
            href: "/news"
        },
        {
            label: "Liên hệ",
            href: "/quotes"
        }

    ]
    

    const productsList = [
        {
            label: "Thang tải khách",
            href: "/products/thangTaiKhach"
        },
        {
            label: "Thang tải hàng",
            href: "/products/thangTaiHang"
        },
        {
            label: "Thang tải ô tô",
            href: "/products/thangTaiOTo"
        },
        {
            label: "Thang tải thực phẩm",
            href: "/products/thangThucPham"
        },
        {
            label: "Thang máy quan sát",
            href: "/products/thangQuanSat"
        },
        {
            label: "Thang tải giường bệnh",
            href: "/products/thangTaiGiuongBenh"
        }
    ]
    
    const customerSupport = {
        address: "878/1B Hương lộ 2, Khu phố 10, Phường Bình Trị Đông A, Quận Bình Tân, TP.HCM",
        email: "viettri.industry@gmail.com",
        phone: "0982 739 788",
        Zalo: "Zalo"
    };
</script>

<footer class="bg-[#0f4e96] text-white">
    <div class=" flex items-center justify-center gap-2 py-6 md:py-8 bg-slate-100 text-slate-800">
        <svg class="w-6 h-6 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
        <span class=" text-sm md:text-lg">Liên hệ hỗ trợ báo giá 24/7</span>
         <span class="text-lg font-bold text-blue-500 ml-2 md:ml-8 md:text-xl">0982 739 788</span>
    </div>
    <div class="container mx-auto px-4 md:px-8 py-10 md:py-16">
        <div class="grid md:grid-cols-4 gap-8 items-start">
            <!-- Company Info -->
            <div class="space-y-4">
                <img  src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoVietTriPNG-300x68.png" alt="logo" class="w-[150px] md:w-[200px] mb-4 bg-white rounded-sm" />
                
                <p class="text-sm text-justify max-w-[260px] p-2">
                    Với +20 năm trong nghề, Công ty TNHH Thang Máy Việt Trí tự tin là một trong những đơn vị hàng đầu trong lĩnh vực thiết kế, sản xuất và lắp đặt thang máy.
                </p>
                
                <div class="flex gap-3 mt-4">
                    <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white text-[#0f4e96] flex items-center justify-center" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 320 512">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                        </svg>
                    </a>
                    <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white text-[#0f4e96] flex items-center justify-center" aria-label="Youtube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                        </svg>
                    </a>
                    <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white text-[#0f4e96] flex items-center justify-center" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </a>
                    <a href={socialMedia.google} target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-white text-[#0f4e96] flex items-center justify-center" aria-label="Google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 488 512">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- About Us Column -->
            <div class="space-y-3">
                <h3 class="text-lg md:text-xl font-semibold mb-4">Về chúng tôi</h3>
                {#each aboutUsInfo as item}
                    <div>
                        <a href={item.href} class="hover:text-gray-300 hover:underline flex items-center gap-2"><div class="w-1 h-1 bg-white rounded-full"></div>{item.label}</a>
                    </div>
                {/each}
            </div>

            <!-- Featured Projects Column -->
            <div class="space-y-3">
                <h3 class="text-lg md:text-xl font-semibold mb-4">Danh mục sản phẩm</h3>
                {#each productsList as item}
                    <div>
                        <a href={item.href} class="hover:text-gray-300 hover:underline flex items-center gap-2"><div class="w-1 h-1 bg-white rounded-full"></div>{item.label}</a>
                    </div>
                {/each}
            </div>

            <!-- Customer Support Column -->
            <div class="space-y-4">
                <h3 class="text-lg md:text-xl font-semibold mb-4">Tư vấn khách hàng</h3>
                
                <div class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1 text-white flex-shrink-0" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                    <span class="text-justify max-w-[300px]">{customerSupport.address}</span>
                </div>
                
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <a href="mailto:{customerSupport.email}" class="hover:underline">
                        {customerSupport.email}
                    </a>
                </div>
                
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                    <a href="tel:{customerSupport.phone}" class="hover:underline">
                        {customerSupport.phone}
                    </a>
                </div>
                
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                        <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/>
                    </svg>
                    <a href="https://zalo.me/239837943299975253" target="_blank" class="hover:underline">
                        {customerSupport.Zalo}
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer> 