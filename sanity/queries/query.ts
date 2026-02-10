import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);

export {
  BRANDS_QUERY,
  //   LATEST_BLOG_QUERY,
  //   DEAL_PRODUCTS,
  //   PRODUCT_BY_SLUG_QUERY,
  //   BRAND_QUERY,
  //   MY_ORDERS_QUERY,
  //   GET_ALL_BLOG,
  //   SINGLE_BLOG_QUERY,
  //   BLOG_CATEGORIES,
  //   OTHERS_BLOG_QUERY,
};
