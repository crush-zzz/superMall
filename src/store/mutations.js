const mutations = {
  addCounter(state, payload){
    payload.count++;
  },
  addToCart(state, payload){
    payload.checked = true;
    state.cartList.push(payload);
  },
  addMessage(state,payload){
    console.log(payload+'已加入');
    state.loginMessage.push(payload);
  },
  changeMessage(state,payload){
    state.currentMessage = payload
    console.log(payload);
  }
}

export default mutations

