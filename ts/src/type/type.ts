// 任意值
let notSure: any = 1;
notSure = '1';
notSure = false;
let list: any[] = [1, 'a', false]
console.log(notSure, list)

function warn(): void {
    console.log('warn')
}

warn()