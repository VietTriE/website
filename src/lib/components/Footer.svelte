<script lang="ts">
    const contactInfo = {
        phone: "0982 739 788",
        email: "viettri.industry@gmail.com",
        website: "www.thangmayviettri.vn",
        address: "878/1B Hương lộ 2, Khu phố 10, Phường Bình Trị Đông A, Quận Bình Tân, TP.HCM"
    };

    const socialMedia = {
        facebook: "CTyThangMayVietTri",
        instagram: "thangmayviettri",
        youtube: "thangmayviettri"
    };
</script>

<footer class="bg-[#0074bc] text-white py-16 px-4">
    <div class="container mx-auto">
        <h2 class="text-2xl lg:text-3xl font-bold text-center mb-12">
            CÔNG TY TNHH THANG MÁY VIỆT TRÍ
        </h2>

        <div class="grid md:grid-cols-2 gap-8 items-start">
            <!-- Left Column - Contact Info -->
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/phoneWebIcon.png" alt="Phone" class="w-8 h-8" />
                    <span>{contactInfo.phone}</span>
                </div>
                
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/mailWebIcon.png" alt="Email" class="w-8 h-8" />
                    <span>{contactInfo.email}</span>
                </div>
                
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/websiteWebIcon.png" alt="Website" class="w-8 h-8" />
                    <span>{contactInfo.website}</span>
                </div>
                
                <div class="flex items-start gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/qrWebIcon.png" alt="Address" class="w-24 h-24" />
                    <p class="flex-1">{contactInfo.address}</p>
                </div>
            </div>

            <!-- Right Column - Social Media -->
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/facebookWebIcon.png" alt="Facebook" class="w-8 h-8" />
                    <a 
                        href={`https://facebook.com/${socialMedia.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline"
                    >
                        {socialMedia.facebook}
                    </a>
                </div>
                
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/instaWebIcon.png" alt="Instagram" class="w-8 h-8" />
                    <a 
                        href={`https://instagram.com/${socialMedia.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline"
                    >
                        {socialMedia.instagram}
                    </a>
                </div>
                
                <div class="flex items-center gap-4">
                    <img src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/youtubeWebIcon.png" alt="YouTube" class="w-8 h-8" />
                    <a 
                        href={`https://youtube.com/@${socialMedia.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline"
                    >
                        {socialMedia.youtube}
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer> 