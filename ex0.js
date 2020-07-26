function arrayIndices(array)
{
    let min = array[0];
    let max = array[0];
    let indices = [0, 0];
    for (let i = 1; i < array.length; i++)
    {
        if (array[i] < min)
        {
            min = array[i];
            indices[0] = i;
        }
        if (array[i] > max)
        {
            max = array[i];
            indices[1] = i;
        }

    }
    return indices;
}

let array1 = [2,4,6,7,3,45,5,6,6,6,1];
let indices1 = arrayIndices(array1);
console.log(indices1);