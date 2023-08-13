export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Title'
        },
        {
            name: 'catagory',
            type: 'string',
            title: 'Product Catagory',
            options: {
                list: [
                    { title: 'Female', value: 'Female' },
                    { title: 'Male', value: 'Male' },
                    { title: 'Kids', value: 'Kids' }
                ],
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        }
        ,
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'id',
            type: 'number',
            title: 'ID'
        }
    ]
}