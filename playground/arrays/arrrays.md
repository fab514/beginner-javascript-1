# Arrays
- An array is used for holding a list of items where the order matters. 
- Each entry in an array is called an item. The position of the array item is called an index. 
- The number of items in array is called the length. The items in an array can be any type. 
- An array is not it's own type, It is a type of object that has methods inside of it.
- To check if something is an array, type in the console Array.isArray(names) - it will retun true or false. 
    
    ## Example of an Array
    - array literal uses [] symbols. or less popular newArray
    - items are 0 based, the first item is considered 0
    ```js
    const names = ['wes', 'kait', 'snickers', 'last one!']; // 
    console.log(names[0]); 
    console(name.length);
    console.log(names[names.length - 1]); 
    ```
    - Will give you access to the last item of the array. Because the length will show the amount of items but we want the item number to start from 0.
    - Prototype within the array, shown in the console will show the many methods you can use with an array. 

    ## Mutible and Inmutible methods
    - Mutible methods, perform mutatation, when something changes the original version of it. 
    - Mutation Method types- reverse, push, unshift and splice
    - You can use a method mutation and NOT mutate the original array by making a copy of the original array
    
    ```js
    names.push('lux'); // Is a mutible method.
    console.log(names);
    const names2 = [...names, 'lux']; // Stops the mutible method from changing the array by making a copy of the original
    names.unshift('poppy'); // unshift move item to the front of array.
    const name3 = ['poppy', ...names]; // will move item to the front of the array without changing the original. 
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.splice(3, 2); // In this example, splice will take out the numbers 4 and 5 because it starts from the 3rd Item and takes out 2 items. 
     
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbersReversed = [...numbers].reverse();
    
    numbers.reverse();
    console.log(numbers); // Original array has also been changed. 
    ```

    ## immutable mthod- slice
    - Inmutible methods will not change the orginal just return a new version of the array. 
    - Better to use slice instead of splice.
    ```js
    const pizzaSlice = numbers.slice(2, 4); // Takes out the chunk of the array without changing the original data.

        const comments = [
      { text: 'Cool Beans', id: 123 },
      { text: 'Love This', id: 133 },
      { text: 'Neato', id: 233 },
      { text: 'Good Bikes', id: 333 },
      { text: 'So Good', id: 433 },
    ];

    // Deletes any comment when you add it's id. 
    // in console- deleteComment(233, comments). It will return the new array but not change the original. 

    function deleteComment(id, comments) {
      // first find the index of the item in the array
      const commentIndex = comments.findIndex(comment => comment.id === id);
      // make a new array without that item in it
      return [
        ...comments.slice(0, commentIndex),
        ...comments.slice(commentIndex + 1),
      ];
      // return our new array
    }
    // To change the original array switch the comments object from const to let. 
    
    // Having trouble with if/else shorthand. 
    const kaitIndex = names.findIndex(name => name === 'kait');
    const newNamesWithoutKait = [
      // get everything up to kait index
      ...names.slice(0, kaitIndex),
      // everything after kait index
      ...names.slice(kaitIndex + 1)
    ];
    console.log(newNamesWithoutKait);

    ```
    ## Array.from() 
    - A static method to create a shallow-copied array from an array like or iterable object. 
    ### Array.from() lets you create Arrays from:
    - array-like objects (objects with a length property and indexed elements); or
    - iterable objects (objects such as Map and Set).

- Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

- More clearly, Array.from(obj, mapFn, thisArg)
has the same result as Array.from(obj).map(mapFn, thisArg),
except that it does not create an intermediate array.