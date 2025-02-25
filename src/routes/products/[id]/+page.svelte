<script lang="ts">
	import ProductCard from '$lib/components/product/ProductCard.svelte';
	import Section from '$lib/components/post/Section.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import type { Section as SectionType } from '$lib/types';
	let { data } = $props();
	let isOpen = $state(false);
	let currentPost: any = $state({});
	let currentImageIndex = $state(0);
	let activeTab = $state('techSpec');

	function dialogHandle(id: string) {
		const post = data.products.find((post) => post.id === id);
		if (post) {
			currentPost = post;
			currentImageIndex = 0;
			isOpen = true;
		}
	}

	function nextImage() {
		if (currentPost.refImages) {
			currentImageIndex = (currentImageIndex + 1) % currentPost.refImages.length;
		}
	}

	function prevImage() {
		if (currentPost.refImages) {
			currentImageIndex =
				(currentImageIndex - 1 + currentPost.refImages.length) % currentPost.refImages.length;
		}
	}

	const defaultTechSpec: { [key: string]: { [key: string]: SectionType[] } } = {
		thangTaiKhach: {
			techSpec: [
				{
					type: 'subheader',
					content: ['Thang Máy Tải Khách']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Tải trọng : từ 320 kg - 2.000 kg',
						'Tốc độ    : từ 30 m/ph - 150 m/ph',
						'Kiểu thang: CPM, KPM, phòng máy mini',
						'Sử dụng: văn phòng, khách sạn thấp tầng (từ 10 tầng trở xuống), chung cư,…'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['Ưu điểm của thang máy tải khách:']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Thiết kế bền nhẹ, kiểu dáng đa dạng, sang trọng',
						'Tiết kiệm điện nhờ máy kéo không hộp số, hiệu suất cao',
						'Vận hành êm, an toàn khi sử dụng',
						'Cửa chống cháy, hệ thống giám sát nhóm thang máy'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiKhachBVKT.jpg']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiKhachTSKT.jpg']
				}
			],
			power: [
				{
					type: 'paragraph',
					content: [
						'Cung cấp điện 3 pha 380VAC, 3KVA/1kw, nguồn điện bao gồm 5 dây: 3 dây pha, 1 dây trung tính và 1 dây tiếp đất (dây tiếp đất không dùng chung với dây chống sét của tòa nhà)'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'bulletList',
					content: [
						'Nguồn động lực: 3phases 380V-50 HZ',
						'Nguồn chiếu sáng: 1phases 220V-50 HZ',
						'Nguồn tín hiệu an toàn: 24VDC'
					]
				}
			],
			shaft: [
				{
					type: 'paragraph',
					content: [
						'1.	Hố pit được chống thấm kho sạch, kích thước hố pit đủ đảm bảo kích thước yêu cầu theo thiết kế.',
						'2.	Khoảng chừa trống chiều ngang và chiều cao các cửa tầng đủ theo yêu cầu thiết kế để lắp đặt cửa.',
						'3.	Hệ thống đà chịu lực quanh hố thang đủ để đảm bảo bắt hệ thống ray đạt tiêu chuẩn.',
						'4.	Chiều cao tầng trên cùng (OH) đủ kích thước yêu cầu, đà chịu lực chính cho thang máy.',
						'5.	Khoảng lổ chừa máy kéo, các lổ thiết bị và lổ tín hiệu ở các tầng.',
						'6.	Móc treo palang (dùng khi thi công và sửa chữa).'
					]
				}
			]
			// images: [
			//   {
			//     type: "space",
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		},
		thangTaiHang: {
			techSpec: [
				{
					type: 'paragraph',
					content: [
						'Thang máy tải hàng là phương tiện vận chuyển rất quan trọng trong các nhà máy, kho hàng trong cao ốc có nhiều tầng. Nói một cách khác, loại thang máy tải hàng khi hoạt động ổn định, tin cậy và an toàn sẽ giúp cho dây chuyền sản xuất của doanh nghiệp bạn hoạt động hiệu quả, giúp cho việc xuất - nhập hàng đúng kế hoạch.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: ['Tải trọng: từ 1.500 kg - 10.000 kg', 'Tốc độ   : từ 30 m/ph - 60 m/ph']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Cửa: CO, 4CO, 6CO, 2S, 3S, 2U, 3U với các khoảng mở rộng đến 6m, cao 4.5m',
						'Kiểu thang: KPM, CPM và thang thủy lực, kiểu máy kéo đặt dưới PIT.'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangBVKT.jpg']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangTSKT.jpg']
				}
			],
			power: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangNguonDien.jpg']
				}
			],
			shaft: [
				{
					type: 'subheader',
					content: ['I. PHÒNG MÁY']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng phòng máy theo bản vẽ cung cấp. Chống thấm tường và mái. Lắp đặt ổ khóa cho cửa ra vào.',
						'2.    Thực hiện các lỗ kỹ thuật dùng để kéo thiết bị và đi cáp. Dây điện giữa phòng máy và hố thang. Cung cấp  móc treo chịu tải.',
						'3.    Bố trí lối đi, thang lên phòng máy, thang leo phải có tay vịn, chiều ngang tối thiểu 700 mm.',
						'4.    Hệ thống thông gió: lắp đặt các lam thông gió, quạt thông gió, đảm bảo nhiệt độ trong phòng máy dưới 40°C. Độ ẩm tương đối trung bình hàng tháng dưới 90% và 95% trong ngày.',
						'5.    Hệ thống chiếu sáng: lắp đặt các cửa sổ lấy ánh sáng tự nhiên, đèn chiếu sáng và bảng công tắc đèn.',
						'6.    Cung cấp nguồn điện đến phòng máy: 01 bảng điện nguồn, bao gồm 03 dây pha (380V - 50Hz), 01 dây trung tính, 01 dây nối. Dao động điện áp cho phép: 5%.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['II. HỐ THANG & CỬA TẦNG']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng và hoàn thiện (chiếu sáng, thông gió và chống thấm) hố thang với kích thước theo bản vẽ cung cấp. Sai lệch theo phương thẳng đứng +25mm.',
						'2.    Lắp đặt thang sắt xuống đáy hố.',
						'3.    Chừa thô lắp cửa tầng, hộp gọi tầng. Hoàn thiện xung quanh cửa tầng sau khi lắp đặt.',
						'4.    Lắp các đà và khung lưới giữa hố thang (đối với thang hoạt động theo nhóm).',
						'5.    Các ốâng nước, điện, cáp… không được lắp đặt bên trong hố thang.',
						'6.    Lắp đặt các đà giữa tầng đối với những tầng có độ cao tầng trên 2600mm.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['III. LƯU Ý KHÁC']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Cung cấp miễn phí điện nguồn để thi công và vận hành.',
						'2.    Cung cấp miễn phí mặt bằng chứa thiết bị và vật liệu trong thời gian thi công.'
					]
				}
			]
			// images: [
			//   {
			//     type: "space",
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		},
		thangTaiOTo: {
			techSpec: [
				{
					type: 'subheader',
					content: ['Tải trọng:']
				},
				{
					type: 'paragraph',
					content: ['từ 2.500 kg - 4.000 kg']
				},
				{
					type: 'subheader',
					content: ['Tốc độ:']
				},
				{
					type: 'paragraph',
					content: ['từ 9 m/ph - 60 m/ph']
				},
				{
					type: 'subheader',
					content: ['Cửa:']
				},
				{
					type: 'paragraph',
					content: ['6CO, 3S, 2U và 3U, có cửa hoặc không có cửa trong']
				},
				{
					type: 'subheader',
					content: ['Kiểu thang:']
				},
				{
					type: 'paragraph',
					content: [
						'CPM, KPM, thang thủy lực',
						'Sử dụng trong các cao ốc thương mại, căn hộ cao cấp, nhà máy, showroom ô tô.'
					]
				},
				{
					type: 'subheader',
					content: ['Mâm xoay ô tô:']
				},
				{
					type: 'paragraph',
					content: [
						'Tải trọng: từ 2.500 kg - 4.000 kg',
						'Tốc độ   : xoay 1 vòng/ phút',
						'Đường kính mâm xoay từ 4m - 4.5m, dùng được cho ô tô 4 chỗ, 7 chỗ hoặc xe tải nhỏ',
						'Thiết kế kiểu PIT: 200 mm, 500 mm hoặc đặt trên sàn',
						'Sử dụng tại các bãi đỗ ô tô, khu căn hộ hoặc hộ gia đình'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiOToBVKT.jpg']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiOToTSKT.jpg']
				}
			],
			power: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiOToNguonDien.jpg']
				}
			],
			shaft: [
				{
					type: 'subheader',
					content: ['I. PHÒNG MÁY']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng phòng máy theo bản vẽ cung cấp. Chống thấm tường và mái. Lắp đặt ổ khóa cho cửa ra vào.',
						'2.    Thực hiện các lỗ kỹ thuật dùng để kéo thiết bị và đi cáp. Dây điện giữa phòng máy và hố thang. Cung cấp  móc treo chịu tải.',
						'3.    Bố trí lối đi, thang lên phòng máy, thang leo phải có tay vịn, chiều ngang tối thiểu 700 mm.',
						'4.    Hệ thống thông gió: lắp đặt các lam thông gió, quạt thông gió, đảm bảo nhiệt độ trong phòng máy dưới 40°C. Độ ẩm tương đối trung bình hàng tháng dưới 90% và 95% trong ngày.',
						'5.    Hệ thống chiếu sáng: lắp đặt các cửa sổ lấy ánh sáng tự nhiên, đèn chiếu sáng và bảng công tắc đèn.',
						'6.    Cung cấp nguồn điện đến phòng máy: 01 bảng điện nguồn, bao gồm 03 dây pha (380V - 50Hz), 01 dây trung tính, 01 dây nối. Dao động điện áp cho phép: 5%.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['II. HỐ THANG & CỬA TẦNG']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng và hoàn thiện (chiếu sáng, thông gió và chống thấm) hố thang với kích thước theo bản vẽ cung cấp. Sai lệch theo phương thẳng đứng +25mm.',
						'2.    Lắp đặt thang sắt xuống đáy hố.',
						'3.    Chừa thô lắp cửa tầng, hộp gọi tầng. Hoàn thiện xung quanh cửa tầng sau khi lắp đặt.',
						'4.    Lắp các đà và khung lưới giữa hố thang (đối với thang hoạt động theo nhóm).',
						'5.    Các ốâng nước, điện, cáp… không được lắp đặt bên trong hố thang.',
						'6.    Lắp đặt các đà giữa tầng đối với những tầng có độ cao tầng trên 2600mm.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['III. LƯU Ý KHÁC']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Cung cấp miễn phí điện nguồn để thi công và vận hành.',
						'2.    Cung cấp miễn phí mặt bằng chứa thiết bị và vật liệu trong thời gian thi công.'
					]
				}
			]
			// images: [
			//   {
			//     type: "space",
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		},
		thangThucPham: {
			techSpec: [
				{
					type: 'paragraph',
					content: [
						'Thang máy tải hàng là phương tiện vận chuyển rất quan trọng trong các nhà máy, kho hàng trong cao ốc có nhiều tầng. Nói một cách khác, loại thang máy tải hàng khi hoạt động ổn định, tin cậy và an toàn sẽ giúp cho dây chuyền sản xuất của doanh nghiệp bạn hoạt động hiệu quả, giúp cho việc xuất - nhập hàng đúng kế hoạch.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: ['Tải trọng: từ 1.500 kg - 10.000 kg', 'Tốc độ   : từ 30 m/ph - 60 m/ph']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Cửa: CO, 4CO, 6CO, 2S, 3S, 2U, 3U với các khoảng mở rộng đến 6m, cao 4.5m',
						'Kiểu thang: KPM, CPM và thang thủy lực, kiểu máy kéo đặt dưới PIT.'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangBVKT.jpg']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangTSKT.jpg']
				}
			],
			power: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangNguonDien.jpg']
				}
			],
			shaft: [
				{
					type: 'subheader',
					content: ['I. PHÒNG MÁY']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng phòng máy theo bản vẽ cung cấp. Chống thấm tường và mái. Lắp đặt ổ khóa cho cửa ra vào.',
						'2.    Thực hiện các lỗ kỹ thuật dùng để kéo thiết bị và đi cáp. Dây điện giữa phòng máy và hố thang. Cung cấp  móc treo chịu tải.',
						'3.    Bố trí lối đi, thang lên phòng máy, thang leo phải có tay vịn, chiều ngang tối thiểu 700 mm.',
						'4.    Hệ thống thông gió: lắp đặt các lam thông gió, quạt thông gió, đảm bảo nhiệt độ trong phòng máy dưới 40°C. Độ ẩm tương đối trung bình hàng tháng dưới 90% và 95% trong ngày.',
						'5.    Hệ thống chiếu sáng: lắp đặt các cửa sổ lấy ánh sáng tự nhiên, đèn chiếu sáng và bảng công tắc đèn.',
						'6.    Cung cấp nguồn điện đến phòng máy: 01 bảng điện nguồn, bao gồm 03 dây pha (380V - 50Hz), 01 dây trung tính, 01 dây nối. Dao động điện áp cho phép: 5%.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['II. HỐ THANG & CỬA TẦNG']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Xây dựng và hoàn thiện (chiếu sáng, thông gió và chống thấm) hố thang với kích thước theo bản vẽ cung cấp. Sai lệch theo phương thẳng đứng +25mm.',
						'2.    Lắp đặt thang sắt xuống đáy hố.',
						'3.    Chừa thô lắp cửa tầng, hộp gọi tầng. Hoàn thiện xung quanh cửa tầng sau khi lắp đặt.',
						'4.    Lắp các đà và khung lưới giữa hố thang (đối với thang hoạt động theo nhóm).',
						'5.    Các ốâng nước, điện, cáp… không được lắp đặt bên trong hố thang.',
						'6.    Lắp đặt các đà giữa tầng đối với những tầng có độ cao tầng trên 2600mm.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['III. LƯU Ý KHÁC']
				},
				{
					type: 'bulletList',
					content: [
						'1.    Cung cấp miễn phí điện nguồn để thi công và vận hành.',
						'2.    Cung cấp miễn phí mặt bằng chứa thiết bị và vật liệu trong thời gian thi công.'
					]
				}
			]
			// images: [
			//   {
			//     type: "space",
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		},
		thangQuanSat: {
			techSpec: [
				{
					type: 'subheader',
					content: ['Thang Máy Tải Khách']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Tải trọng : từ 320 kg - 2.000 kg',
						'Tốc độ    : từ 30 m/ph - 150 m/ph',
						'Kiểu thang: CPM, KPM, phòng máy mini',
						'Sử dụng: văn phòng, khách sạn thấp tầng (từ 10 tầng trở xuống), chung cư,…'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['Ưu điểm của thang máy tải khách:']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Thiết kế bền nhẹ, kiểu dáng đa dạng, sang trọng',
						'Tiết kiệm điện nhờ máy kéo không hộp số, hiệu suất cao',
						'Vận hành êm, an toàn khi sử dụng',
						'Cửa chống cháy, hệ thống giám sát nhóm thang máy'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiKhachBVKT.jpg']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiKhachTSKT.jpg']
				}
			],
			power: [
				{
					type: 'paragraph',
					content: [
						'Cung cấp điện 3 pha 380VAC, 3KVA/1kw, nguồn điện bao gồm 5 dây: 3 dây pha, 1 dây trung tính và 1 dây tiếp đất (dây tiếp đất không dùng chung với dây chống sét của tòa nhà)'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'bulletList',
					content: [
						'Nguồn động lực: 3phases 380V-50 HZ',
						'Nguồn chiếu sáng: 1phases 220V-50 HZ',
						'Nguồn tín hiệu an toàn: 24VDC'
					]
				}
			],
			shaft: [
				{
					type: 'space'
				}
			]
			// images: [
			//   {
			//     type: "space",
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		},
		thangTaiGiuongBenh: {
			techSpec: [
				{
					type: 'subheader',
					content: ['THANG MÁY BỆNH VIỆN']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Tải trọng: từ 320kg - 2,000kg',
						'Tốc độ: từ 30m/ph - 150m/ph',
						'Hành trình tối đa: lên đến 30 điểm dừng.',
						'Bao gồm các kiểu có phòng máy, phòng máy mini hoặc không có phòng máy.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['Ưu điểm của thang máy bệnh viện: ']
				},
				{
					type: 'space'
				},
				{
					type: 'paragraph',
					content: [
						'Công nghệ biến đổi tần số tiên tiến và việc điều khiển thang được giám sát chặt chẽ qua hệ thống điều khiển máy tính đản bảo độ ổn định, êm ái trong quá trình thang di chuyển.',
						'Tay vịn trong buồng cabin sẽ thuận tiện, an toàn hơn đối với người già, trẻ em và các bệnh nhân.',
						'Bảng gọi tầng đặc biệt trong buồng cabin dành cho người ngồi xe lăn',
						'Phím gọi có chữ nổi dành cho người khiếm thị có hệ thống phát giọng nói báo tầng dành cho người khiếm thị, v.v…'
					]
				}
			],
			techDrawing: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangBenhVienBVKT.png']
				}
			],
			spec: [
				{
					type: 'image',
					content: ['https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangBenhVienTSKT.png']
				}
			],
			power: [
				{
					type: 'bulletList',
					content: [
						'Cung cấp điện 3 pha 380VAC, 3KVA/1kw, nguồn điện bao gồm 5 dây: 3 dây pha, 1 dây trung tính và 1 dây tiếp đất (dây tiếp đất không dùng chung với dây chống sét của tòa nhà)',
						'Nguồn động lực: 3phases 380V-50 HZ',
						'Nguồn chiếu sáng: 1phases 220V-50 HZ',
						'Nguồn tín hiệu an toàn: 24VDC'
					]
				}
			],
			shaft: [
				{
					type: 'subheader',
					content: ['I. PHÒNG MÁY']
				},
				{
					type: 'paragraph',
					content: [
						'1. Xây dựng phòng máy theo bản vẽ cung cấp. Chống thấm tường và mái. Lắp đặt ổ khóa cho cửa ra vào.',
						'2. Thực hiện các lỗ kỹ thuật dùng để kéo thiết bị và đi cáp. Dây điện giữa phòng máy và hố thang. Cung cấp  móc treo chịu tải,',
						'3. Bố trí lối đi, thang lên phòng máy, thang leo phải có tay vịn, chiều ngang tối thiểu 700 mm.',
						'4. Hệ thống thông gió: lắp đặt các lam thông gió, quạt thông gió, đảm bảo nhiệt độ trong phòng máy dưới 40°C. Độ ẩm tương đối trung bình hàng tháng dưới 90% và 95% trong ngày.',
						'5. Hệ thống chiếu sáng: lắp đặt các cửa sổ lấy ánh sáng tự nhiên, đèn chiếu sáng và bảng công tắc đèn.',
						'6. Cung cấp nguồn điện đến phòng máy: 01 bảng điện nguồn, bao gồm 03 dây pha (380V - 50Hz), 01 dây trung tính, 01 dây nối. Dao động điện áp cho phép: 5%.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['II. HỐ THANG & CỬA TẦNG']
				},
				{
					type: 'paragraph',
					content: [
						'1. Xây dựng và hoàn thiện (chiếu sáng, thông gió và chống thấm) hố thang với kích thước theo bản vẽ cung cấp. Sai lệch theo phương thẳng đứng +25mm.',
						'2. Lắp đặt thang sắt xuống đáy hố.',
						'3. Chừa thô lắp cửa tầng, hộp gọi tầng. Hoàn thiện xung quanh cửa tầng sau khi lắp đặt.',
						'4. Lắp các đà và khung lưới giữa hố thang (đối với thang hoạt động theo nhóm).',
						'5. Các ốâng nước, điện, cáp… không được lắp đặt bên trong hố thang.',
						'6. Lắp đặt các đà giữa tầng đối với những tầng có độ cao tầng trên 2600mm.'
					]
				},
				{
					type: 'space'
				},
				{
					type: 'subheader',
					content: ['III. LƯU Ý KHÁC']
				},
				{
					type: 'paragraph',
					content: [
						'1. Cung cấp miễn phí điện nguồn để thi công và vận hành.',
						'2. Cung cấp miễn phí mặt bằng chứa thiết bị và vật liệu trong thời gian thi công'
					]
				}
			]
			// images: [
			//   {
			//     type: "image",
			//     content: [
			//       "https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangBenhVienImage01.jpg",
			//     ],
			//   },
			// ],
			// videos: [
			//   {
			//     type: "space",
			//   },
			// ],
		}
	};
</script>

<div
	class="mb-[80px] mt-[100px] flex max-w-sm flex-col items-center py-10 md:max-w-2xl lg:max-w-5xl"
>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 xl:grid-cols-3">
		{#each data.products as product}
			<ProductCard {product} handleClick={(id: string) => dialogHandle(id)} />
		{/each}
	</div>
</div>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Content
		class="flex h-screen min-w-full flex-col items-center overflow-scroll bg-blue-100"
	>   
		{#if currentPost.refImages}
			<div class=" mt-6 flex flex-col items-center">
				<!-- Main Image -->
				<div class="relative flex aspect-[3/5] h-[400px] md:h-[500px] lg:h-[600px]">
					<img
						src={currentPost.refImages[currentImageIndex]}
						alt={currentPost.name}
						class=" h-full w-full rounded-lg object-cover"
					/>
					<button
						class="absolute left-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-black/50 p-2 text-xl font-bold text-white"
						onclick={prevImage}
						aria-label="LeftButton"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						class="absolute right-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-black/50 p-2 text-white"
						onclick={nextImage}
						aria-label="RightButton"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</div>
				<!-- Thumbnail List -->
				<div class="z-50 mt-4 flex gap-2 pb-2">
					{#each currentPost.refImages as image, index}
						<button
							class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg {index === currentImageIndex
								? 'ring-2 ring-blue-600'
								: ''}"
							onclick={() => (currentImageIndex = index)}
						>
							<img
								src={image}
								alt={`${currentPost.name} thumbnail ${index + 1}`}
								class="h-full w-full object-cover"
							/>
						</button>
					{/each}
				</div>
				<div class=" mt-10 flex max-w-[400px] flex-col items-center">
					<span class=" text-2xl font-semibold text-blue-500 lg:text-3xl">{currentPost.name}</span>
					<span class=" text-center text-sm text-slate-400">{currentPost.description}</span>
				</div>
			</div>
		{/if}

		{#if currentPost.info}
			<div class="mt-10 max-w-[900px] bg-white p-4 md:p-8 lg:p-10">
				<div class="text-gray-600">
					<div class="flex flex-col justify-center md:gap-8 lg:flex-row lg:gap-12">
						<div class="w-[400px]">
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Trần<br />Ceiling</span>
								<span class="text-blue-500">{currentPost.info.ceiling}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Vách trước<br />Front wall</span>
								<span class="text-blue-500">{currentPost.info.frontWall}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Vách hông<br />Side wall</span>
								<span class="text-blue-500">{currentPost.info.sideWall}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Vách sau<br />Back wall</span>
								<span class="text-blue-500">{currentPost.info.backWall}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Sàn cabin<br />Cabin floor</span>
								<span class="text-blue-500">{currentPost.info.cabinFloor}</span>
							</div>
						</div>
						<div class="w-[400px]">
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Tay vịn<br />Handrail</span>
								<span class="text-blue-500">{currentPost.info.handrail}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Cửa cabin<br />Cabin door</span>
								<span class="text-blue-500">{currentPost.info.cabinDoor}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Cửa tầng chính<br />Lobby</span>
								<span class="text-blue-500">{currentPost.info.lobby}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Cửa tầng khác<br />Floors</span>
								<span class="text-blue-500">{currentPost.info.floors}</span>
							</div>
							<div class="flex items-start py-1">
								<span class="w-[120px] text-gray-500">Bao che<br />Jamp</span>
								<span class="text-blue-500">{currentPost.info.gfnf}</span>
							</div>
						</div>
					</div>
				</div>
				{#if currentPost.categoryId && defaultTechSpec[currentPost.categoryId]}
					<div class=" mt-10 flex flex-col items-start">
						<!-- Tab Navigation with Horizontal Scroll on Mobile -->
						<div class="border-b border-gray-200">
							<nav class="-mb-px flex space-x-8" aria-label="Tabs">
								<button
									class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'techSpec'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
									onclick={() => (activeTab = 'techSpec')}
								>
									ĐẶC TÍNH KỸ THUẬT
								</button>
								<button
									class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'techDrawing'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
									onclick={() => (activeTab = 'techDrawing')}
								>
									BẢN VẼ KỸ THUẬT
								</button>
								<button
									class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'spec'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
									onclick={() => (activeTab = 'spec')}
								>
									THÔNG SỐ KỸ THUẬT
								</button>
								<button
									class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'power'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
									onclick={() => (activeTab = 'power')}
								>
									NGUỒN ĐIỆN
								</button>
								<button
									class="border-b-2 px-1 py-4 text-sm font-medium {activeTab === 'shaft'
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
									onclick={() => (activeTab = 'shaft')}
								>
									CHUẨN BỊ HỐ THANG
								</button>
							</nav>
						</div>

						<!-- Tab Content -->
						<div class="mt-6 min-h-[300px]">
							{#if activeTab === 'techSpec'}
								{#each defaultTechSpec[currentPost.categoryId].techSpec as section}
									<Section {section} />
								{/each}
							{:else if activeTab === 'techDrawing'}
								{#each defaultTechSpec[currentPost.categoryId].techDrawing as section}
									<Section {section} />
								{/each}
							{:else if activeTab === 'spec'}
								{#each defaultTechSpec[currentPost.categoryId].spec as section}
									<Section {section} />
								{/each}
							{:else if activeTab === 'power'}
								{#each defaultTechSpec[currentPost.categoryId].power as section}
									<Section {section} />
								{/each}
							{:else if activeTab === 'shaft'}
								{#each defaultTechSpec[currentPost.categoryId].shaft as section}
									<Section {section} />
								{/each}
							{/if}
						</div>
					</div>
				{/if}
			</div>
		{/if}
        <div class=" py-6 lg:py-12 flex flex-col md:flex-row items-center gap-4 lg:gap-12 ">
            <a
            href="/quotes"
            class=" px-6 text-base lg:text-xl rounded-lg p-2 bg-blue-500 hover:bg-blue-600 font-semibold text-white"> ĐẶT LỊCH TƯ VẤN  </a>
            <Dialog.Close class="px-6 py-2 bg-slate-300 font-sm text-slate-800 hover:bg-slate-400 font-semibold rounded-lg" >TRỞ LẠI</Dialog.Close>
        </div>

	</Dialog.Content>
</Dialog.Root>
