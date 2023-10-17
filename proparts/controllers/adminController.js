import { brands } from "../models/brandsSchema.js";
import { models } from "../models/modelSchema.js";

export const addCarController = async (req, res) => {
  console.log(req.body);
  res.render("admin/addNewcar");
};

export const addBrandController = async (req, res) => {
  try {
    var Brands = await brands.find();
  } catch (error) {
    console.log("Error in finding Brands");
  }

  try {
    const result = await brands.create(req.body);
    await result.save();
    console.log("Brand Added SucessFylly !!!!");
    res.render("admin/addNewcar", {
      Brands: Brands,
      duplicateBrand: `Brand Added Sucessfully`,
    });
  } catch (err) {
    console.log(err.code);
    if (err.code == 11000) {
      res.render("admin/addNewcar", {
        Brands: Brands,
        duplicateBrand: `This Brand  already exsist !!!`,
      });
    }
  }
};

export const dispayBrandsController = async (req, res) => {
  try {
    const Brands = await brands.find();
    res.render("admin/addNewcar", { Brands, duplicateBrand: "" });
  } catch (error) {
    console.log("Error in brands Controller");
    res.render("admin/addNewcar", []);
  }
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