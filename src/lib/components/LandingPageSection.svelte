<script lang="ts">
    const backgroundImages = [
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/landingPageBackground.jpg")',
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/landingPageBackgroundOp2.jpg")',
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/landingPageBackgroundOp3.jpg")',
        'url("https://pub-4076f91e2c23424590fb9b7fe99e41b5.r2.dev/landingPageBackgroundOp4.jpg")'
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
        class="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4/5 md:w-3/5 lg:w-2/5 max-w-3xl"
    >
</section>

<style>
    .background-container {
        background: black; /* fallback */
        z-index: 0; /* Ensure proper stacking */
    }

    .background-slide {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        animation: 
            panBackground 12s ease-in-out infinite alternate,
            fadeInOut 16s infinite; /* Reduced to 16s per cycle */
        opacity: 0;
        z-index: 1;
        transform-origin: center;
        height: 100vh;
        width: 100%;
        will-change: transform, opacity; /* Optimize for animations */
    }

    @keyframes fadeInOut {
        0% {
            opacity: 0;
        }
        25%, 75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes panBackground {
        from {
            transform: scale(1.1) translateX(0);
        }
        to {
            transform: scale(1.1) translateX(-5%);
        }
    }
</style>