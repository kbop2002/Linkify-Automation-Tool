import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const products = [
    {
        id: 1,
        ebayLink: 'https://www.ebay.com/product/12345',
        supplierLink: 'https://www.aliexpress.com/item/67890',
        stock: 10,
        price: 20,
    },
    {
        id: 2,
        ebayLink: 'https://www.ebay.com/product/54321',
        supplierLink: 'https://www.dhgate.com/item/98765',
        stock: 5,
        price: 15,
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
