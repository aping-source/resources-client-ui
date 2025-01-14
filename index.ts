const routerModules = import.meta.glob('./views/**/index.vue')
import i18n from "@/locales";

const getAsyncRoutesMap = () => {
    const modules:any = {}
    Object.keys(routerModules).forEach(item => {
        const code = item.replace('./views/', '').replace('/index.vue', '')
        const key = `${code}`
        modules[key] = routerModules[item]
    })

    return modules
}

const getExtraRoutesMap = () => {
  
}

export default {
    getAsyncRoutesMap,
    getExtraRoutesMap
}
