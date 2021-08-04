const  delay = (ms)=> {
    return promise =>
      promise.then(
        data =>
          new Promise(resolve => {
            setTimeout(() => resolve(data), ms);
          })
      );
  }
export default delay;