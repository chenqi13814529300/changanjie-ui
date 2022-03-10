import service from '@/utils/service'
const declarePoor = () => {
    return service.get('/manage/allDeclarePoor')
}
export default{
    declarePoor
}