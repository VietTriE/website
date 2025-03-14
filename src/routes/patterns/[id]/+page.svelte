<script lang="ts">
	let { data } = $props();
</script>

<div
	class="mb-[80px] mt-[100px] flex max-w-sm flex-col items-center px-4 py-10 md:max-w-3xl lg:max-w-7xl"
>
	{#if data.id === "cabin"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">CABIN TIÊU CHUẨN</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "cabinTieuChuanP"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-[3/5] object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class=" mt-8 lg:mt-20 flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">CABIN TUỲ CHỌN</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "cabinTuyChonP"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-[3/5] object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "cuaTang"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">BAO CHE BẢN HẸP</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "baoCheBanHep"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-[3/5] object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class=" mt-8 lg:mt-20 flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">BAO CHE BẢN RỘNG KHÔNG HIỂN THỊ</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "baoCheBanRongKHT"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-[3/5] object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class=" mt-8 lg:mt-20 flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">BAO CHE BẢN RỘNG CÓ HIỂN THỊ</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "baoCheBanRongCHT"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-[3/5] object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "sanCabin"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">SÀN GRANITE</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "sanGranite"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-square object-contain rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class=" mt-8 lg:mt-20 flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">SÀN TOLE GÂN</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "sanToleGan"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-square object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
            <div class=" mt-8 lg:mt-20 flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">SÀN INOX</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                        {#if item.subId === "sanInox"}
                            <div class=" flex flex-col items-center bg-white rounded-md" >
                                <img
                                src={item.image}
                                alt={item.name}
                                class="w-full aspect-square object-cover rounded-md"
                                >
                                <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "tranGia"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">MẪU TRẦN GIẢ</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                    <div class=" flex flex-col items-center bg-white rounded-md" >
                        <img
                        src={item.image}
                        alt={item.name}
                        class="w-full aspect-square object-cover rounded-md"
                        >
                        <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "hoaVanInox"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">MẪU HOA VĂN INOX</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                    <div class=" flex flex-col items-center bg-white rounded-md" >
                        <img
                        src={item.image}
                        alt={item.name}
                        class="w-full aspect-[3/5] object-cover rounded-md"
                        >
                        <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "hib"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">BẢNG ĐIỀU KHIỂN</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                    <div class=" flex flex-col items-center bg-white rounded-md" >
                        <img
                        src={item.image}
                        alt={item.name}
                        class="w-full aspect-square object-cover rounded-md"
                        >
                        <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "vatLieu"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">MẪU VẬT LIỆU</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                    <div class=" flex flex-col items-center bg-white rounded-md" >
                        <img
                        src={item.image}
                        alt={item.name}
                        class="w-full aspect-square object-cover rounded-md"
                        >
                        <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
    {#if data.id === "tayVin"}
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
                <span class="text-xl lg:text-2xl font-semibold text-slate-700">MẪU TAY VỊN</span>
                <div class=" mt-8 lg:mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:gap-12 xl:grid-cols-4" >
                    {#each data.patterns as item}
                    <div class=" flex flex-col items-center bg-white rounded-md" >
                        <img
                        src={item.image}
                        alt={item.name}
                        class="w-full aspect-square object-contain rounded-md"
                        >
                        <span class=" text-xl text-slate-700 py-2 mt-2">{item.name}</span>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>
