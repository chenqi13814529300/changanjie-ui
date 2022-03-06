import service from '@/utils/service'
const login = (loginInfo) => {
    return service.post('/login', loginInfo)
}


export default{
login
}