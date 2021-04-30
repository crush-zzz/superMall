import Toast from './Toast';

const obj = {};
// 在main.js使用 vue.use（toast） 相当于调用 install
obj.install = function (Vue) {
    //1.创建组件构造器
    const toastConstrustor = Vue.extend(Toast);

    //2.new的方式, 根据组件构造器
    const toast = new toastConstrustor();

    //3.将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement('div'));

    //4.toast.$el对应的就是div 加到body
    document.body.appendChild(toast.$el);
    // 此时界面上已经有toast 只是不显示 使用$toast 调用里面的方法使其显示
    Vue.prototype.$toast = toast;
}

export default obj
