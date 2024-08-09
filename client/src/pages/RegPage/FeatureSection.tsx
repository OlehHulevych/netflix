

const FeatureSection = () => {
    return (
        <div className={"w-full, min-h-screen text-white font-inter"}>
            <section className={"w-full flex items-center min-h-screen justify-center px-14 flex-wrap max-[768px]:min-h-fit max-[460px]:pt-4 max-[768px]:mb-4"}>
                <div className={"w-1/2 font-bold max-[460px]:w-full max-[460px]:text-center "}>
                    <h1 className={"text-5xl leading-relaxed max-[800px]:text-3xl max-[600px]:text-xl"}>Enjoy on your TV</h1>
                    <div className={"text-xl max-w-[560px] w-full max-[800px]:text-lg max-[600px]:text-sm"}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                </div>
                <div className={"w-1/2 max-[460px]:w-full"}>
                    <img className={"w-full max-w-[720px] h-full max-h-[511px]"} src="./images/bg_section_1.png" alt=""/>
                </div>
            </section>
            <section className={"w-full flex items-center min-h-screen justify-center pl-8 pr-14 flex-wrap max-[768px]:min-h-fit max-[460px]:pt-4 max-[768px]:mb-4 "}>
                <div className={"w-1/2 max-[460px]:w-full "}>
                    <img className={"w-full max-w-[720px] h-full max-h-[511px]"} src="./images/bg_section_2.png" alt=""/>
                </div>
                <div className={"w-1/2 font-bold max-[460px]:w-full max-[460px]:text-center "}>
                    <h1 className={"text-5xl leading-tight mb-2 max-[800px]:text-3xl max-[600px]:text-xl "}>Download your shows to watch offline</h1>
                    <div className={"text-xl max-w-[560px] w-full max-[800px]:text-lg max-[600px]:text-sm"}>Save your favourites easily and always have something to watch.</div>
                </div>
            </section>
            <section className={"w-full flex items-center min-h-screen justify-center px-14 flex-wrap max-[768px]:min-h-fit max-[460px]:pt-4 max-[768px]:mb-4"}>
                <div className={"w-1/2 font-bold max-[460px]:w-full max-[460px]:text-center"}>
                    <h1 className={"text-5xl leading-relaxed max-[800px]:text-3xl max-[600px]:text-xl"}>Watch everywhere</h1>
                    <div className={"text-xl max-w-[560px] w-full max-[800px]:text-lg max-[600px]:text-sm"}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
                </div>
                <div className={"w-1/2 max-[460px]:w-full"}>
                    <img className={"w-full max-w-[720px] h-full max-h-[511px]"} src="./images/bg_section_3.png" alt=""/>
                </div>
            </section>
            <section className={"w-full flex items-center min-h-screen justify-center pl-8 pr-8 flex-wrap max-[768px]:min-h-fit max-[460px]:pt-4 max-[768px]:mb-4"}>
                <div className={"w-1/2 max-[460px]:w-full"}>
                    <img className={"w-full max-w-[720px] h-full max-h-[511px]"} src="./images/bg_section_4.png" alt=""/>
                </div>
                <div className={"w-1/2 font-bold max-[460px]:w-full max-[460px]:text-center "}>
                    <h1 className={"text-5xl leading-tight mb-2 max-[800px]:text-3xl max-[600px]:text-xl "}>Create profiles for kids</h1>
                    <div className={"text-xl max-w-[560px] w-full max-[800px]:text-lg max-[600px]:text-sm"}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;