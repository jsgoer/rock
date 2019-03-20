{
    let readonly = function (target, name, desc) {
        desc.writable = false
        return desc
    }

    class Test {
        @readonly
        time() {
            return '2018-3-20'
        }
    }

    let test = new Test()
    console.log(test.time());
}
