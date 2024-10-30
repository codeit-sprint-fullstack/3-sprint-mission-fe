import Product from "../../model/product.js";
const Items = async (req, res) => {
  const query = req.query;
  let pageSize = !!query.pageSize ? Number(query.pageSize) : 10;
  let page = !!query.page ? Number(query.page) : 1;
  let orderBy = {};
  switch (query.orderBy) {
    case "recent":
      orderBy = { createdAt: -1 };
      break;
    case "favorite":
      orderBy = {};
      break;
    default:
      orderBy = { createdAt: -1 };
  }
  let body = {};
  if (!!query.keyword) {
    body = {
      $or: [
        { name: { $regex: query.keyword } },
        { description: { $regex: query.keyword } },
      ],
    };
  }
  try {
    const items = await Product.find(body)
      .skip((page - 1) * 10)
      .sort(orderBy)
      .limit(pageSize);
    const totalCount = await Product.find(body);
    res.status(200).send({
      success: true,
      data: items,
      totalCount: totalCount.length,
    });
  } catch (error) {
    console.error(error);
  }
};
const Create = async (req, res) => {
  const body = { ...req.body, favorite: 0 };
  try {
    const products = await Product.create(body);
    res.status(201).send({
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};
const Patch = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
const Delete = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
const service = {
  Create,
  Items,
  Patch,
  Delete,
};

export default service;
