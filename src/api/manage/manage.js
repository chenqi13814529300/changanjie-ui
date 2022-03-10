import service from '@/utils/service'

// 志愿者申请商铺
const declarePoor = (declareInfo) => {
    return service.post('/manage/declarePoor', declareInfo)
}

// 获取所有申请信息
const getAllDeclarePoor = () => {
    return service.get('/manage/getAllDeclarePoor')
}
// 获取申请信息，通过用户名
const getDeclarePoorByUsername = (username) => {
    return service.get('/manage/getDeclarePoorByUsername', {
        params: {
            username: username
        }
    })
}


//更新单条申请信息
const updateDeclarePoorStatus = (declarePoorInfo) => {
    return service.post('/manage/updateDeclarePoorStatus', declarePoorInfo)
}
export default {
    declarePoor,
    getAllDeclarePoor,
    updateDeclarePoorStatus,
    getDeclarePoorByUsername
}