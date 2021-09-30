        window.addEventListener('load', (event) => {
            let mainSliderPic = document.querySelector('.home_pic'),
                mainBlackBg = document.querySelector('.main_blackbg'),
                /*aboutPicDiv = document.querySelector('.about_pic_div'),
                aboutSection = document.querySelector('.about_section'), 
                aboutBlackBg = document.querySelector('.about_blackbg')*/;

                mainBlackBg.style.height = (mainSliderPic.scrollHeight * 0.826)  + "px";
                window.addEventListener('resize', ()=>{
                    mainBlackBg.style.height = (mainSliderPic.scrollHeight * 0.826) + "px";
                });

                // aboutBlackBg.style.height = (aboutSection.scrollHeight)  + "px";
                // window.addEventListener('resize', ()=>{
                //     aboutBlackBg.style.height = (aboutSection.scrollHeight) + "px";
                });
        });