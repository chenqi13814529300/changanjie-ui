import service from '@/utils/service'
const declarePoor = (declareInfo) => {
    return service.post('/manage/declarePoor', declareInfo)
}

export default{
    declarePoor
}