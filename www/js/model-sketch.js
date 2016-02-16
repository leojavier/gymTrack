var user = {
    id:01,
    name:'Leo',
    lastName:'javier',
    email:'leojavier@gmail.com',
    birthdate:'10/10/1984',
    gender:'male',
    signupDate:'10/10/1984',
    measures: {
        height:'6\'2"',
        bodyWeight:'225',
        fatIndex:0.12,
        neck: 32
    },
    settings:{
        weightFormat:'Lb',
        sizeFormat:'In',
        language:'en',
        privacy:{
            displayPublic:{
                name:true,
                lastName:true,
                email:true,
                birthdate:true,
                gender:true,
                height:true,
                weight:true,
                fatIndex:0.12,
                signupDate:true,
                measures:true
            }
        }
    }
}

var exercise = {
    id:01,
    name:'Pullover',
    type:'weight',
    image:'img/img1.jpg',
    icon:'img/icons/po.jpg',
    muscle:'back',
    sets: [
        {
            reps:10,
            weight:45
        },
        {
            reps:10,
            weight:55
        },
        {
            reps:10,
            weight:65
        }
    ],
    timeStarted:'10:10:05AM',
    timeFinished:'10:20:5AM',
    Notes:'Next time start with 5lb'
}

var routines = {
    owner: user,
    exercises:[
        {},{},{}
    ],
    notes:''
}

var day = {
    date:'12/1/2016',
    timeStarted:'10:10:05AM',
    timeFinished:'10:20:5AM',
    exercises:[
        {},{},{}
    ]
}

var week = {
    date:'12/1/2016',
    initialWeight:220,
    initialFatIndex:0.12,
    days:[
        {},{},{}
    ]
}

var month = {
    date:'12/1/2016',
    initialWeight:220,
    initialFatIndex:0.12,
    finalWeight:220,
    finalFatIndex:0.12,
    days:[
        {},{},{}
    ]
}