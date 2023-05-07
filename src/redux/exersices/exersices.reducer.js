import { ExercisActionType } from "./exersices.type";
import imag1 from '../../assets/main/5_days.png'

const INITIAL_STATE = {
    current_exersice : [    {
        id:'1',
        image:imag1,
        title:'10 Week Mass Building Program',
        WorkoutDescription:'This workout is designed to increase your muscle mass as much as possible in 10 weeks. The program works each muscle group hard once per week using mostly heavy compound exercises. You will train on a 4 day split routine, resting on Wednesdays and the weekends. To get the most out of this program you need to be eating BIG. Big meals, at least 5 times a day.',
        WORKOUTSUMMARY:[
            {   id:'1',
                name:'Main Goal',
                value:'Build Muscle'
            },
            {id:'2',
                name:'Workout Type',
                value:'Split'
            },
            {id:'3',
                name:'Training Level',
                value:'Advanced'
            },
            {id:'4',
                name:'Program Duration',
                value:'10 Weeks' 
            },
            {   id:'5',
                name:'Days Per Week',
                value:'4'
            },
            {   id:'6',
                name:'Time Per Workout',
                value:'50 minutes'
            },
            {   id:'7',
                name:'Equipment Required',
                value:'Barbell, Bodyweight, Dumbbells, Machines'
            },
            {id:'8',
                name:'Target Gender',
                value:'Male'
            },
            {   id:'9',
                name:'Recommended Supps',
                value:'Whey Protein,Creatine Monohydrate,Essential Fats (EFAs),Multivitamin,Weight Gainer'
            },
        ]
        ,table:[
            {
                id:1,
                title:'Monday - Chest and Triceps',
                data:[
                    {
                        name:'Barbell Bench Press',
                        Sets:'4',
                        Reps:'10, 8, 8, 6'
                    },
                    {
                        name:'Incline Bench Press',
                        Sets:'3',
                        Reps:'8, 8, 6'
                    },
                    {
                        name:'Decline Bench Press',
                        Sets:'3',
                        Reps:'8, 8, 6'
                    },
                    {
                        name:'Dumbbell Flys',
                        Sets:'4',
                        Reps:'10, 8, 8, 6'
                    },
                    {
                        name:'Tricep Extension',
                        Sets:'4',
                        Reps:'10, 8, 8, 6 adding weight'
                    },
                    {
                        name:'Tricep Dip',
                        Sets:'3',
                        Reps:'10'
                    },
                    {
                        name:'Dumbbell Pullover',
                        Sets:'2',
                        Reps:'8'
                    },
                    {
                        name:'Tricep Bench Dip',
                        Sets:'3',
                        Reps:'8'
                    },
                ]
            },

            {
                id:2,
                title:'Tuesday - Back and Biceps',
                data:[
                    {
                        name:'Deadlift',
                        Sets:'5',
                        Reps:'10, 8, 8, 6, 4'
                    },
                    {
                        name:'Chin Up',
                        Sets:'2',
                        Reps:'8'
                    },
                    {
                        name:'One Arm Dumbbell Row',
                        Sets:'3',
                        Reps:'8'
                    },
                    {
                        name:'Seated Row',
                        Sets:'2',
                        Reps:'8'
                    },
                    {
                        name:'Close Grip Lat Pull Down',
                        Sets:'3',
                        Reps:'10, 10, 8'
                    },
                    {
                        name:'Standing Barbell Curl',
                        Sets:'3',
                        Reps:'8, 8, 6'
                    },
                    {
                        name:'Close Grip Preacher Curl',
                        Sets:'3',
                        Reps:'8, 8, 6'
                    },
                    {
                        name:'Incline Dumbbell Curl',
                        Sets:'2',
                        Reps:'10 - 12'
                    },
                    {
                        name:'Concentration Curl',
                        Sets:'2',
                        Reps:'10'
                    },
                ]
            },
            {
                id:3,
                title:'Wednesday - Rest Day/Cardio'
            },
            {
                id:4,
                title:'Thursday - Shoulders and Forearms',
                data:[
                    {
                        name:'Machine Shoulder Press',
                        Sets:'3',
                        Reps:'10'
                    },
                    {
                        name:'Dumbbell Reverse Fly',
                        Sets:'3',
                        Reps:'8-10'
                    },
                    {
                        name:'Military Press',
                        Sets:'4',
                        Reps:'10'
                    },
                    {
                        name:'Dumbbell Lateral Raise',
                        Sets:'2',
                        Reps:'10'
                    },
                    {
                        name:'Dumbbell Shrugs',
                        Sets:'2',
                        Reps:'10'
                    },
                    {
                        name:'Upright Row',
                        Sets:'2',
                        Reps:'10'
                    },
                    {
                        name:'Standing Wrist Curl',
                        Sets:'4',
                        Reps:'10'
                    },
                    {
                        name:'Barbell Wrist Curl',
                        Sets:'4',
                        Reps:'10'
                    },
                ],
                nots:'Note: Dumbbell shrugs and upright row can be supersetted.'
            },
            {
                id:5,
                title:'Weekend - Rest'
            },
            {
                id:6,
                title:'Friday - Legs',
                data:[
                    {
                        name:'Squat',
                        Sets:'5',
                        Reps:'10, 8, 8, 6, 4',
                    },
                    {
                        name:'Leg Extension',
                        Sets:'3',
                        Reps:'12',
                    },
                    {
                        name:'Leg Curl',
                        Sets:'3',
                        Reps:'12',
                    },
                    {
                        name:'Standing Calf Raise',
                        Sets:'4',
                        Reps:'12',
                    },
                    {
                        name:'Seated calf Raise',
                        Sets:'2',
                        Reps:'12',
                    },
                    
                ]
            }
        ]
    }]
}

const exerReducer = (state =INITIAL_STATE ,action ) =>{
    switch(action.type) {

        case ExercisActionType.SET_CURRENT_EXERCIS:
            return{
                ...state,
                current_exersice:[action.payload]
            }

        default:
            return state;
    }
}


export default exerReducer;