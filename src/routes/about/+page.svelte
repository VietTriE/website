<script lang="ts">

    let certifications = [
        {   
            id: '01',
            title: 'Giấy chứng nhận ISO 9001:2015',
            image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/chungNhanIso.jpg'
        },
        {
            id: '02',
            title: 'Giấy chứng nhận Hợp Chuẩn Hợp Quy',
            image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/chungNhanHopChuanHopQuy.jpg'
        },
        {
            id: '03',
            title: 'Chứng chỉ Năng lực hoạt động xây dựng',
            image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/chungChiNangLuc.jpg'
        },
        {
            id: '04',
            title: 'Giấy chứng nhận Bảo hộ thương hiệu',
            image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/chungNhanBaoHoThuongHieu.png'
        }
    ]

</script>

<div class=" mt-32 flex flex-col items-center w-full">
	<div class="flex flex-col items-center max-w-lg md:max-w-3xl lg:max-w-6xl" >
        <div class=" flex flex-col items-center " >
            <span class=" text-xl md:text-3xl font-semibold text-blue-500 ">TỔNG QUAN VỀ VIỆT TRÍ</span>
            <img class=" mt-8 md:mt-12 w-full object-contain" src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/introductionCoverImage.png" alt="coverImage" />
            <span class=" font-semibold text-slate-700 text-lg md:text-2xl self-start mt-8 md:mt-12 ">GIỚI THIỆU CHUNG</span>
            <p class=" mt-4 md:mt-8">
                Được thành lập từ năm 2006, Công Ty TNHH Thang Máy Việt Trí không ngừng đầu tư và cải tiến để
                khẳng định vị thế là một trong những doanh nghiệp hàng đầu trong lĩnh vực Sản xuất - Lắp đặt -
                Bảo trì - Sửa chữa - Cải tạo các dòng thang máy. Thang máy Việt Trí được thiết kế theo quy
                chuẩn 02:2019 và chất lượng ISO 9001:2015. Trong đó các linh kiện, thiết bị thang máy với
                nhiều mẫu mã bền đẹp, hiện đại, sang trọng được nhập khẩu trực tiếp từ các nước có ngành công
                nghiệp phát triển như Nhật Bản, Hàn Quốc, Ý…
            </p>
            <p class="mt-2">
                Với tiềm lực hiện có về đội ngũ kỹ sư có kinh nghiệm nhiều năm trong ngành thang máy, đội ngũ
                kỹ thuật viên có kiến thức chuyên môn và kỹ năng thực hành cao, Công Ty TNHH Thang Máy Việt
                Trí đảm bảo mọi công đoạn sản xuất, lắp đặt, sửa chữa đều được thực hiện một cách chính xác và
                an toàn. Chúng tôi tin rằng sẽ mang đến cho Quý khách hàng những trải nghiệm tốt nhất khi sử
                dụng sản phẩm và dịch vụ của chúng tôi.
            </p>
        </div>
        <div class=" flex flex-col items-center ">
            <span class=" font-semibold text-slate-700 text-lg md:text-2xl self-start mt-8 md:mt-12 ">CHỨNG NHẬN</span>
            <div class=" mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8  ">
                {#each certifications as certificate}
                    <div class="flex flex-col items-center space-y-2">
                        <img class=" rounded-lg border w-full aspect-[4/5] object-contain" src={certificate.image} alt={certificate.id}>
                        <span class=" text-sm md:text-base px-4 text-center font-semibold text-slate-600 " >{certificate.title}</span>
                    </div>
                {/each}
            </div>
        </div>
        <div class="mt-2 mb-20 flex flex-col items-center">
            <span class=" font-semibold text-slate-700 text-lg md:text-2xl self-start mt-8 md:mt-12 ">SƠ ĐỒ TỔ CHỨC</span>
            <img class="mt-4 md:mt-8 bg-blue-200" src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/soDoToChuc.png" alt="boardImage">
        </div>
    </div>
</div>
