export const Pageanim  = {
    hidden:{
        opacity:0,
         y:300,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:.75,
            ease:'easeIn',
            staggerChildren:0.25,
            when:'beforeChildren'
        }
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:.5,
            ease:'easeIn',
        }
    }
}


export const Titleanim = {
    hidden:{
        opacity:0,
        y:200,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            ease:'easeOut'
        }
    }
}

  export const Heroanim = {
    hidden:{
        opacity:0,
        scale:0.3,
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            duration:1,
            ease:'easeOut'
        }
    }
}
export const Feederanim = {
    hidden:{
        opacity:0,
        y:200,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            ease:'easeOut'
        }
    }
}