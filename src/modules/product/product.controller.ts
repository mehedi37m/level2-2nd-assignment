import { Request, Response } from 'express';




const createProduct = async (req: Request, res: Response) => {
    try {
     
  
      const { student: studentData } = req.body;
    
  
      const result = await StudentServices.createStudentDB(studentData);
   
      res.status(200).json({
        success: true,
        message: 'Product created successfully',
        data: result,
      });
    } catch (error:any) {
      res.status(500).json({
        success: false,
        message: error.message || 'something went wrong',
        error: error,
      });
    }
  };
  
  const getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await StudentServices.getAllStudentFromDB();
  
      res.status(200).json({
        success: true,
        message: 'all Product are received successfully',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  };



  export const ProductController = {
    createProduct,
    getAllProduct,
   
  };
  