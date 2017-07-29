
// 初始状态
const initialState = {
  status: 'init', // init,doing,done
  isSuccess: false,
  user: null,
  activitys:[],
  schools:[],
  ActivityData:null,
  AgencyData:null
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case "INIT": // 初始状态
      return Object.assign({}, state, {
        status: 'init',
        isSuccess: false,
        user: null
      });
    case "FETCH_AGENCY": // 正在登录
    {
      return Object.assign({}, state, {
       AgencyData:action.payload
      });
    }
      case "FETCH_ACTIVITY": // 正在登录
    {
     


      return Object.assign({}, state, {
       ActivityData:action.payload
      });
    }
    case "FINISHED": // 登录完成
      return Object.assign({}, state, {
        status: 'done',
        isSuccess: action.isSuccess,
        user: action.user
      })
    default:
      return state;
  }
}