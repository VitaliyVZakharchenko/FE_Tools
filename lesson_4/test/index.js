const store =(function () {
    let storage = {};
    return {
        addItem: function (key, value) {
            Object.assign(storage, { [key]: value })
        },
        clear: function () {
            storage = {};
        }
    };
})();

console.log(store);
// console.log(storage);



//функция которая сама себя немедленно вызывает
// (function func() {
//     let a = 17;

//     console.log(a);
// })();