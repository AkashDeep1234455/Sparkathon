import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './Form.css'
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Form(){

    let [formData, setFormData] = useState({
        productName : "",
        image: "",
        category : "",
        brand : "",
        sellerName: "",
        sellerEmail : "",
        sellerPhoneNumber : "",
        stockQuantity : "",
        expiryDate : ""
    })

    let handleInputChange = (event) => {
        setFormData((prevData) => {
            return {...prevData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        // addNewComment(formData);   to add 
        
        setFormData({
            productName : "",
            image: "",
            category : "",
            brand : "",
            sellerName: "",
            sellerEmail : "",
            sellerPhoneNumber : "",
            stockQuantity : "",
            expiryDate : ""
        })
    }

    return(
        <div className="Form_Container">
            <form className='Form' onSubmit={handleSubmit}>
                <TextField
                id="outlined-basic" 
                label="Product Name" 
                variant="outlined" 
                size='small' 
                required
                onChange={handleInputChange} 
                value={formData.productName}
                name='productName'
                sx={{ width: 650 }}
                /> 


                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Categories}
                sx={{ width: 650 }}
                size='small'
                name='category'
                required
                onChange={handleInputChange} 
                value={formData.category}
                renderInput={(params) => <TextField{...params} label="Category" />}
                />

                <TextField 
                id="outlined-basic" 
                label="Brand" 
                variant="outlined" 
                size='small' 
                required
                onChange={handleInputChange} 
                value={formData.brand}
                name='brand'
                sx={{ width: 650 }}
                /> 

                <TextField 
                id="outlined-basic" 
                label="Stock Quantity" 
                variant="outlined" 
                size='small' 
                onChange={handleInputChange} 
                required
                value={formData.stockQuantity}
                name='stockQuantity'
                sx={{ width: 320 }}
                /> 

                <TextField 
                id="outlined-basic" 
                label="Expiry Date" variant="outlined" 
                size='small' 
                onChange={handleInputChange}
                value={formData.expiryDate}
                name='expiryDate'
                sx={{ width: 300}}
                InputLabelProps={{
                    shrink: true,
                }}
                type='date'
                />

                <TextField 
                id="outlined-basic" 
                label="Image Link" 
                variant="outlined" 
                size='small' 
                required
                onChange={handleInputChange} 
                value={formData.image}
                name='image'
                sx={{ width: 650 }}
                />

                <TextField 
                id="outlined-basic" 
                label="Seller Name" 
                variant="outlined" 
                size='small' 
                required
                onChange={handleInputChange} 
                value={formData.sellerName}
                name='sellerName'
                sx={{ width: 650 }}
                /> 

                <TextField 
                id="outlined-basic" 
                label="Seller Email" 
                variant="outlined" 
                size='small' 
                onChange={handleInputChange} 
                required
                value={formData.sellerEmail}
                name='sellerEmail'
                sx={{ width: 320 }}
                /> 

                <TextField 
                id="outlined-basic" 
                label="Seller Phone Number" variant="outlined" 
                size='small' 
                onChange={handleInputChange} 
                required
                value={formData.sellerPhoneNumber}
                name='sellerPhoneNumber'
                sx={{ width: 300}}
                />

                <Button variant="contained" endIcon={<AddShoppingCartIcon />} type='submit'>
                        Submit
                </Button>
            </form>
        </div>
    )
}




const Categories = [
    { label: 'Electronics' },
    { label: 'Food' },
    { label: 'Toys' },
    { label: 'Furniture' },
    { label: 'Beauty' },
    { label: 'Grocery' },
    { label: 'Fashion' },
    { label: 'Pharmacy' },
    { label: 'Jewellery' },
    { label: 'Kids Wear' },
    { label: 'Stationary' }
]