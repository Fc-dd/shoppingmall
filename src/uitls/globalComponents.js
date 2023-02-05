import Headers from '@/components/Headers'
import Topwrapper from '@/components/Topwrapper'
import Footer from '@/components/Footer'
import ItemCard from '@/components/ItemCard'

const plugins = {
  //注册
   install(Vue) {
       Vue.component('Headers',Headers); //第一个参数:组件名称,第二个参数:要注册的组件
       Vue.component('Topwrapper',Topwrapper);
       Vue.component('Footer',Footer);
       Vue.component('ItemCard',ItemCard);
   }
}
export default plugins;