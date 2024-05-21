import express from 'express';
import { ProductController } from './product.controller';


const router = express.Router();

router.post('/create-student', ProductController.createProduct);

// router.get('/', StudentController.getAllStudent);



export const ProductRoutes = router;