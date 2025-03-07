import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const products = [
    {
        id: 1,
        ebayLink: 'https://www.ebay.com/product/12345',
        supplierLink: 'https://www.aliexpress.com/item/67890',
        stock: 989,
        cost: 1.01,
        price: 2.99
    },
    {
        id: 2,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 545,
        cost: 2.29,
        price: 2.99
    },
    {
        id: 3,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 234,
        cost: 1.06,
        price: 2.99
    },
    {
        id: 4,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 1001,
        cost: 0.95,
        price: 2.99
    },
    {
        id: 5,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 544,
        cost: 7.49,
        price: 2.99
    },
    {
        id: 6,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 613,
        cost: 4.55,
        price: 2.99
    },
];

const ProductList: React.FC = () => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ebay Link</TableCell>
                        <TableCell>Supplier Link</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Cost</TableCell>
                        <TableCell>Price ($)</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <a href={product.ebayLink} target="_blank" rel="noopener noreferrer">
                                    View on eBay
                                </a>
                            </TableCell>
                            <TableCell>
                                <a href={product.supplierLink} target="_blank" rel="noopener noreferrer">
                                    View Supplier
                                </a>
                            </TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>{product.cost}</TableCell>
                            <TableCell>{product.price}</TableCell>

                            <TableCell>
                                <Button variant="contained" color="primary">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductList;
