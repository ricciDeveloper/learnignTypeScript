const array: Array<number> = [1,2,3,4,5]

const stringArray: string[] = ['a', 'b','c','d']

// const buscaNum = array.find(num => num > 2)

// console.log(buscaNum)

// array.forEach(num => console.log(num))

array.forEach(num => {
    if(num > 2){
        console.log(num)
    }
})

array.map(num => console.log(num))

