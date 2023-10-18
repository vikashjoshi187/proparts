import { brands } from "../models/brandsSchema.js";
import { varient } from "../models/varientSchema.js";
import { carmodel } from "../models/CarModel.js";

export const addBrandController = async (req, res) => {
  try {
    var Brands = await brands.find();
  } catch (error) {
    console.log("Error in finding Brands");
  }

  var Varients;
  try {
    Varients = await varient.find();
    console.log(Varients);
  } catch (error) {
    console.log("Error in getting Varients");
    console.log(error);
  }

  try {
    const result = await brands.create(req.body);
    await result.save();
    console.log("Brand Added SucessFylly !!!!");
    res.render("admin/addNewcar", {
      Varients: "",
      carAddedmsg:"",
      Brands: Brands,
      duplicateBrand: `Brand Added Sucessfully`,
      duplicateVarient: "",
    });
  } catch (err) {
    console.log(err.code);
    if (err.code == 11000) {
      res.render("admin/addNewcar", {
        Varients,
        Brands: Brands,
        carAddedmsg:"",
        duplicateBrand: `This Brand  already exsist !!!`,
        duplicateVarient: "",
      });
    }
  }
};

export const dispayBrandsController = async (req, res) => {
  var Varients;
  try {
    Varients = await varient.find();
    console.log(Varients);
  } catch (error) {
    console.log("Error in getting Varients");
    console.log(error);
  }

  try {
    const Brands = await brands.find();
    res.render("admin/addNewcar", {
      Varients,
      Brands,
      carAddedmsg:"",
      duplicateBrand: "",
      duplicateVarient: "",
    });
  } catch (error) {
    console.log("Error in brands Controller");
    res.render("admin/addNewcar", []);
  }
};

export const addVarientController = async (req, res) => {
  console.log(req.body);
  var Brands;
  try {
    Brands = await brands.find();
  } catch (error) {
    console.log("Error in brands Controller");
  }
  try {
    await varient.create(req.body);
    console.log("Varient Added Sucessfulyy");
  } catch (error) {
    if ((error.code = 11000)) {
      console.log("Error While Adding Varient Duplicate Error");
      res.render("admin/addNewcar", {
        carAddedmsg:"",
        Varients: "",
        Brands: Brands,
        duplicateBrand: "",
        duplicateVarient: "This Varient already exsist !!",
      });
    }
  }

  res.render("admin/addNewcar", {
    carAddedmsg:"",
    Varients: "",
    Brands: Brands,
    duplicateBrand: "",
    duplicateVarient: "Varient Added Sucessfully",
  });
};





export const addCarController = async (req, res) => {
  var Brands;
  try {
    Brands = await brands.find();
  } catch (error) {
    console.log("Error in brands Controller");
  }

  var Varients;
  try {
    Varients = await varient.find();
  } catch (error) {
    console.log("Error in getting Varients");
    console.log(error);
  }

  var ExsistingCar;
  console.log("Finnding");
  try {
    ExsistingCar = await carmodel.find({
      carName: req.body.carName,
      varientName: req.body.varientName,
      startYear: req.body.startYear,
    });
  } catch (error) {
    console.log("Error in brands Controller");
    console.log(error);
  }


  if (ExsistingCar.length==0) {
    console.log(ExsistingCar);
    console.log("inside If");
    try {
      const result = await carmodel.create(req.body);
      await result.save();
      console.log("Car Added Successfully!!");
      
      res.render("admin/addNewcar", {
        carAddedmsg:"Car Added Sucessfully !!",
        Varients: Varients,
        Brands: Brands,
        duplicateBrand: "",
        duplicateVarient: "",
      });
    } catch (error) {
      console.log("Eroor in Adding Car");
      console.log(error);
      res.render("admin/addNewcar", {
        carAddedmsg:"Error In Adding Car!!",
        Varients: Varients,
        Brands: Brands,
        duplicateBrand: "",
        duplicateVarient: "",
      });
    }
  }
  
  else {
    console.log("Inside Else");
    res.render("admin/addNewcar", {
      carAddedmsg:"This Car already exsist !!",
      Varients: Varients,
      Brands: Brands,
      duplicateBrand: "",
      duplicateVarient: "",
    });
  }
};

export const varientsAjaxController = async (req, res) => {
  var Varients;
  try {
    Varients = await varient.find({ brandId: req.query.brand });
  } catch (error) {
    console.log("Error in getting Varients");
    console.log(error);
  }
  res.json(Varients);
};





















export const addModelController = async (req, res) => {
  console.log(req.body);
  var Brands;
  try {
    Brands = await brands.find();
  } catch (error) {
    console.log("Error in brands Controller");
  }
  try {
    await models.create(req.body);
    console.log("Model Added Sucessfulyy");
  } catch (error) {
    console.log("Error While Adding Model");
    console.log(error);
  }

  res.render("admin/addNewcar", { Brands: Brands, duplicateBrand: "" });
};