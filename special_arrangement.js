function special_arrangement(numbers) {

    let odd_numbers = []
    let even_numbers = []
    const arranged_numbers = []
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 ==0) {
            even_numbers.push(numbers[i])
        }
        else {
            odd_numbers.push(numbers[i])
        }

    }

    arranged_numbers = even_numbers.concat(odd_numbers)

        console.log(arranged_numbers)

}

special_arrangement([1, 4, 33, 6, 2, 7, 5, 23, 9, -1, -2])