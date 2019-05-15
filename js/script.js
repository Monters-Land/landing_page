document.addEventListener('DOMContentLoaded' , ()=>{
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline
    .to('.blur' , 6 , {
        top:'30%'
    })
    let scene = new ScrollMagic.Scene({
        triggerElement:'header',
        duration:'150%',
        triggerHook:0
    })
    .setTween(timeline)
    .addTo(controller)
    let timeline2 = new TimelineMax();
    timeline2
    .to(' .features .blur-2' , 6 , {
        top:'40%'
    })

    let scene_2 = new ScrollMagic.Scene({
        triggerElement:'.features',
        duration:'150%',
        triggerHook:0
    })
    .setTween(timeline2)
    .setPin('blur')
    .addTo(controller)
})