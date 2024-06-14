import { Handler } from "express";

const responseJsonModify: Handler = (req, res, next): void => {
  const json_ = res.json;
  res.json = (body?: any): any => {
    const returnBody = {
      status: res.statusCode,
      data: body,
    };
    json_.call(res, returnBody);
  };
  next();
};

export default responseJsonModify;
