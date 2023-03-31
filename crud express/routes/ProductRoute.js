import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controller/Product.js";

const router = express.Router();

// http://localhost:5000/products
router.get("/products", getProducts);
// http://localhost:5000/product/l
router.get("/product/:id", getProductById);
// http://localhost:5000/product
router.post("/product", createProduct);
// http://localhost:5000/product/l
router.patch("/product/:id", updateProduct);
// http://localhost:5000/product/l
router.delete("/product/:id", deleteProduct);

export default router;