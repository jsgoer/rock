/**
 * @title 斐波那契数列
 * @author ryf
 */
function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }

    // while (true) {
    //     yield curr;
    //     [prev, curr] = [curr, prev + curr];
    // }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}
