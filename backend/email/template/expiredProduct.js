exports.expiredProduct = (products) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expired Products Alert</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #ff6f61;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #dddddd;
        }
        th {
            background-color: #ff6f61;
            color: #ffffff;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .btn:hover {
            background-color: #45a049;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777777;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Expired Products Alert</h2>
        <p>Dear Seller,</p>
        <p>The following products have expired or are about to expire:</p>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Expiry Date</th>
                <th>Supplier</th>
                <th>Phone Number</th>
            </tr>
            ${products.map( (product) => {
                const date = new Date(product.stockDescription.expiryDate);
                const formattedDate = new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                return `
                    <tr>
                        <td>${product.productName}</td>
                        <td>${formattedDate}</td>
                        <td>${product.supplierId.sellerName}</td>
                        <td><a href="tel:${product.supplierId.phoneNumber}" class="btn">${product.supplierId.phoneNumber}</a></td>
                    </tr>
                `
            })}
            
        </table>
        <p>Please contact the supplier for further action:</p>
        
        <div class="footer">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
}