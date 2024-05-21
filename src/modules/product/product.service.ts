


const createProductDB = async (ProductData: TStudent) => {
    // const result = await StudentModel.create(student);
  
    // built in static methods
    const student = new Student(studentData);
    const result = await student.save();
    if(await student.isUserExits(studentData.id)){
      throw new Error("user already exists")
    }
    return result;
  };
  
  const getAllStudentFromDB = async () => {
    const result = await Student.find();
    return result;
  };
  const getSingleStudentFromDB = async (id: string) => {
    const result = await Student.findOne({ id: id });
    return result;
  };
  
  export const StudentServices = {
    createStudentDB,
    getAllStudentFromDB,
    
  };