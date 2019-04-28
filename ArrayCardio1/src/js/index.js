import 'babel-polyfill'

async function Asynchronous() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Asynchronous Function!'), 1000)
    })
    const result = await promise // wait till the promise resolves (*)
    alert(result) // "done!"
}

Asynchronous()
