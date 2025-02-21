<script lang="ts">
	import LandingPageSection from '$lib/components/LandingPageSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ProductsSection from '$lib/components/ProductsSection.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import NewsSection from '$lib/components/NewsSection.svelte';
	import PartnersSection from '$lib/components/PartnersSection.svelte';

	let productTypes = [
		{
			lable: 'THANG TẢI KHÁCH',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiKhachCatalog.png',
			categoryId: 'thangTaiKhach'
		},
		{
			lable: 'THANG TẢI HÀNG',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiHangCatalog.png',
			categoryId: 'thangTaiHang'
		},
		{
			lable: 'THANG TẢI Ô TÔ',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiOToCatalog.png',
			categoryId: 'thangTaiOTo'
		},
		{
			lable: 'THANG THỰC PHẨM',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangThucPhamCatalog.png',
			categoryId: 'thangThucPham'
		},
		{
			lable: 'THANG QUAN SÁT',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangQuanSatCatalog.png',
			categoryId: 'thangQuanSat'
		},
		{
			lable: 'THANG TẢI BỆNH VIỆN',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiGiuongBenhCatalog.png',
			categoryId: 'thangTaiGiuongBenh'
		},
		{
			lable: 'THANG TẢI RÁC',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/thangTaiRacCatalog.png',
			categoryId: 'thangTaiRac'
		},
		{
			lable: 'TỜI TẢI HÀNG',
			image: 'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/toiTaiHangCatalog.png',
			categoryId: 'toiTaiHang'
		}
	];
	let logos = [
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoFuji.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoMitsu.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoOtis.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoSchindler.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoArd.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoFujiElectric.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoHyunDai.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoIdec.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoMarazzi.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoMontanari.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoSFT.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoSicor.png',
		'https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/logoWeco.png'
	];

  let { data } = $props();

</script>

<div class="">
	<LandingPageSection />

{#await data.services}
    <div class="loading">Loading services...</div>
{:then services}
    <ServicesSection {services} />
{/await}

<ProductsSection products={productTypes}/>

{#await data.projects}
    <div class="loading">Loading projects...</div>
{:then projects}
    <ProjectSection {projects} />
{/await}

{#await data.news}
    <div class="loading">Loading news...</div>
{:then news}
    <NewsSection {news} />
{/await}

<PartnersSection {logos} />
</div>
