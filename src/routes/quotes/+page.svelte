<script lang="ts">
	let valid = $state(false);
	let loading = $state(false);
	let formData = $state({
		name: '',
		phoneNumber: '',
		street: '',
		state: '',
		city: '',
		preferredService: '',
		details: ''
	});

	let services = [
		{ value: 'lapDatThangMoi', label: 'Thiết kế, sản xuất, lắp đặt thang mới' },
		{ value: 'baoTri', label: 'Dịch vụ Bảo Trì' },
		{ value: 'suaChua', label: 'Dịch vụ Sửa chữa' },
		{ value: 'caiTaoThangMay', label: 'Dịch vụ Cải tạo Thang Máy' }
	];

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (formData.name && formData.phoneNumber) {
			loading = true;
			try {
				const SCRIPT_URL =
					'https://script.google.com/macros/s/AKfycbyJhtV6vO374Ubg0zOMlIEoJBLUaaPe63tR7ZpiFeG-ZQybh1UmxHQBBevQiNcSHFIcwA/exec';
				const API_TOKEN = 'VIETTRI123';

				const response = await fetch(SCRIPT_URL, {
					method: 'POST',
					mode: 'no-cors',
					body: JSON.stringify({ ...formData, token: API_TOKEN }),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				console.log('Form submitted successfully');
				valid = true;
			} catch (error) {
				console.error('Error submitting form:', error);
				alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
			} finally {
				loading = false;
			}
		}
	}
</script>

<div class="mt-20 min-h-screen bg-gray-100 px-4 py-8">
	<div class="mx-auto flex max-w-2xl flex-col items-center space-y-4 rounded-xl bg-white py-8">
		{#if loading}
			<div class="flex items-center justify-center">
				<span class="text-sm italic text-slate-700">Đang gửi yêu cầu...</span>
			</div>
		{:else if valid}
			<div class="flex flex-col items-center">
				<img
					class="aspect-square h-[60px]"
					src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/checkMark.png"
					alt="checkMark"
				/>
				<span class=" mt-1 text-xl font-semibold text-slate-800">ĐÃ GỬI THÀNH CÔNG</span>
			</div>
			<div class="flex flex-col items-center">
				<span class=" mt-2 text-base font-semibold text-slate-700"
					>CẢM ƠN QUÝ KHÁCH ĐÃ TIN TƯỞNG</span
				>
				<span class="text-sm italic text-slate-500"
					>Việt Trí sẽ liên hệ trong thời gian sớm nhất.</span
				>

				<button
					onclick={(e) => {
						e.preventDefault();
						valid = false;
						formData = {
							name: '',
							phoneNumber: '',
							street: '',
							state: '',
							city: '',
							preferredService: '',
							details: ''
						};
					}}
					class=" mt-8 rounded-lg bg-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-400"
				>
					TRỞ LẠI
				</button>
			</div>
		{:else}
			<span class="text-lg font-bold text-blue-600 lg:text-2xl">ĐẶT LỊCH TƯ VẤN</span>
			<form class="w-full max-w-md px-4" onsubmit={handleSubmit}>
				<div class="flex flex-col space-y-6">
					<div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
						<label for="name" class="w-full text-sm text-slate-700 sm:w-[120px] whitespace-nowrap">Họ & tên <strong class="text-red-600 font-bold">*</strong></label>
						<div class="flex-1">
							<input
								id="name"
								class="w-full border-b border-slate-400 px-2 py-1 outline-none"
								type="text"
								bind:value={formData.name}
								required
							/>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
						<label for="phone" class="w-full text-sm text-slate-700 sm:w-[120px]"
							>Số điện thoại <strong class="text-red-600 font-bold">*</strong></label
						>
						<div class="flex-1">
							<input
								id="phone"
								class="w-full border-b border-slate-400 px-2 py-1 outline-none"
								type="tel"
								bind:value={formData.phoneNumber}
								required
							/>
						</div>
					</div>

					<div class="flex flex-col sm:flex-row sm:space-x-2">
						<label for="address" class="w-full text-sm text-slate-700 sm:w-[120px]"
							>Địa chỉ công trình</label
						>
						<div class="flex flex-1 flex-col space-y-2">
							<input
								id="address"
								class="w-full border-b border-slate-400 px-2 py-1 outline-none placeholder:text-sm placeholder:italic"
								placeholder="Số nhà, tên đường, phường/xã"
								bind:value={formData.street}
							/>
							<input
								class="w-full border-b border-slate-400 px-2 py-1 outline-none placeholder:text-sm placeholder:italic"
								placeholder="Quận/Huyện"
								bind:value={formData.state}
							/>
							<input
								class="w-full border-b border-slate-400 px-2 py-1 outline-none placeholder:text-sm placeholder:italic"
								placeholder="* Thành phố/Tỉnh"
								bind:value={formData.city}
							/>
						</div>
					</div>

					<div class="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
						<label for="service" class="w-full text-sm text-slate-700 sm:w-[120px]"
							>Dịch vụ quan tâm <strong class="text-red-600 font-bold">*</strong></label
						>
						<div class="flex flex-1 flex-col space-y-2">
							{#each services as service}
								<div class="flex items-center space-x-2">
									<input
										id={service.value}
										type="radio"
										bind:group={formData.preferredService}
										value={service.value}
									/>
									<label for={service.value} class="text-sm italic text-slate-700">
										{service.label}
									</label>
								</div>
							{/each}
						</div>
					</div>

					<div class="flex flex-col sm:flex-row sm:space-x-2">
						<label for="detail" class="w-full text-sm text-slate-700 sm:w-[120px]"
							>Yêu cầu chi tiết</label
						>
						<div class="flex-1">
							<textarea
								id="detail"
								class="w-full border-b border-slate-400 px-2 py-1 outline-none placeholder:text-sm placeholder:italic"
								placeholder="Nhập nội dung"
								bind:value={formData.details}
								rows={4}
							></textarea>
						</div>
					</div>
				</div>

				<div class="mt-6 flex flex-col items-center">
					<button
						class="rounded-xl bg-blue-500 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-600 lg:text-lg"
						type="submit"
					>
						GỬI THÔNG TIN
					</button>
					<span class="mt-4 text-sm  text-blue-400">
						Việt Trí cam kết bảo mật thông tin khách hàng.
					</span>
					<span class="mt-2 text-sm italic text-slate-500 text-center">
						Vui lòng điền đầy đủ thông tin vào phần có dấu (<strong class="text-red-600 font-bold">*</strong>) để chúng tôi có thể liên hệ được với quý khách.
					</span>
				</div>
			</form>
		{/if}
	</div>
</div>
