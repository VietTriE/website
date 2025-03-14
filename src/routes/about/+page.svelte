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
	];
</script>

<div class="  flex w-full flex-col items-center">
	<div class="flex flex-col md:max-w-3xl lg:max-w-6xl px-4">
		<section class=" flex flex-col mt-28 items-center ">
			<span class=" text-xl font-semibold text-blue-500 md:text-3xl">TỔNG QUAN VỀ VIỆT TRÍ</span>
			<img
				class=" w-full object-cover py-6"
				src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/hinhCongTy.jpg"
				alt="coverImage"
			/>
		</section>
		<section class=" flex  w-full flex-col justify-center">
			<div class=" flex flex-col items-center">
				<span class=" mt-8 self-start text-lg font-semibold text-slate-700 md:mt-12 md:text-2xl"
					>GIỚI THIỆU CHUNG</span
				>
				<p class=" mt-4 md:mt-8 text-justify">
					Được thành lập từ năm 2006, Công Ty TNHH Thang Máy Việt Trí không ngừng đầu tư và cải tiến
					để khẳng định vị thế là một trong những doanh nghiệp hàng đầu trong lĩnh vực Sản xuất -
					Lắp đặt - Bảo trì - Sửa chữa - Cải tạo các dòng thang máy. Thang máy Việt Trí được thiết
					kế theo quy chuẩn 02:2019 và chất lượng ISO 9001:2015. Trong đó các linh kiện, thiết bị
					thang máy với nhiều mẫu mã bền đẹp, hiện đại, sang trọng được nhập khẩu trực tiếp từ các
					nước có ngành công nghiệp phát triển như Nhật Bản, Hàn Quốc, Ý…
				</p>
				<p class="mt-2 text-justify">
					Với tiềm lực hiện có về đội ngũ kỹ sư có kinh nghiệm nhiều năm trong ngành thang máy, đội
					ngũ kỹ thuật viên có kiến thức chuyên môn và kỹ năng thực hành cao, Công Ty TNHH Thang Máy
					Việt Trí đảm bảo mọi công đoạn sản xuất, lắp đặt, sửa chữa đều được thực hiện một cách
					chính xác và an toàn. Chúng tôi tin rằng sẽ mang đến cho Quý khách hàng những trải nghiệm
					tốt nhất khi sử dụng sản phẩm và dịch vụ của chúng tôi.
				</p>
			</div>
			<div class=" flex flex-col items-center">
				<span class=" mt-8 self-start text-lg font-semibold text-slate-700 md:mt-12 md:text-2xl"
					>CHỨNG NHẬN</span
				>
				<div class=" mt-4 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-8">
					{#each certifications as certificate}
						<div class="flex flex-col items-center space-y-2">
							<img
								class=" aspect-[4/5] w-full rounded-lg border object-contain"
								src={certificate.image}
								alt={certificate.id}
							/>
							<span class=" px-4 text-center text-sm font-semibold text-slate-600 md:text-base"
								>{certificate.title}</span
							>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<section class="flex flex-col items-center justify-center mt-16">
			<span class=" self-start text-lg font-semibold text-slate-700 md:text-2xl">SƠ ĐỒ TỔ CHỨC</span
			>
			<img
				class="bg-blue-200 object-cover mt-10"
				src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/soDoToChuc.png"
				alt="boardImage"
			/>
		</section>
	</div>
</div>
