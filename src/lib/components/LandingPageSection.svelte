<script lang="ts">
    const backgroundImages = [
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/websiteBackground1.png")',
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/websiteBackground2.png")'
    ];
</script>

<section class="background-container w-full h-screen overflow-hidden relative">
    {#each backgroundImages as bgImage, i}
        <div 
            class="background-slide absolute inset-0" 
            style:background-image={bgImage}
            style:animation-delay={`${i * 10}s`}
        ></div>
    {/each}
    <img 
        src="https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/landingPageTag.png" 
        alt="Landing Page Tag" 
        class="absolute rounded-xl bg-white top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4/5 md:w-3/5 lg:w-2/5 max-w-2xl"
    >
</section>

<style>
    .background-container {
        background: #0177C6; /* fallback */
        perspective: 1000px; /* Add perspective for smoother animations */
        transform-style: preserve-3d; /* Better 3D handling */
        z-index: 0; /* Ensure proper stacking */
    }

    .background-slide {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        animation: 
            panBackground 15s ease-in-out infinite alternate,
            fadeInOut 15s infinite;
        opacity: 0;
        z-index: 1;
        transform-origin: center;
        height: 100vh;
        width: 100%;
        will-change: transform, opacity;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    @keyframes fadeInOut {
        0%, 5% {
            opacity: 0;
        }
        20%, 80% {
            opacity: 1;
        }
        95%, 100% {
            opacity: 0;
        }
    }

    @keyframes panBackground {
        from {
            transform: scale(1.08) translateX(0); /* Increased scale to prevent collapse */
        }
        to {
            transform: scale(1.08) translateX(-2%); /* Reduced movement for subtler effect */
        }
    }
</style>