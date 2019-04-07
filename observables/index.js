const { Observable } = require('rxjs');

const objs = new Observable(subscriber => {
    // next, error, complete
    subscriber.next(1);
    subscriber.next(2);
    // throw new Error('Error')
    setTimeout(() => { subscriber.next(4); }, 4000);
    // subscriber.complete();
    subscriber.next(3); // it won't be delivered
});

objs.subscribe(v => {
    console.log(v);
}, error => {
    console.log('Errore: ', error);

}, () => {
    console.log('completed');
})

console.log('subscribe 1 code end');


// other strategy
objs.subscribe({
    next: v => {
        console.log('subscribe2 = ' + v);
    },
    complete: () => {
        console.log('subscribe2 finished');
    },
    error: error => {
        console.log(error);
    }
})