import { combineReducers } from "redux";
import { aboutUsReducer } from "./aboutUsReducer";
import { addressReducer } from "./addresReducer";
import { blogCategoryReducer } from "./blogCategoryReducer";
import { blogNewReducer } from "./blogNewReducer";
import { blogReducer } from "./blogReducer";
import { blogTagReducer } from "./blogTagReducer";
import { categoryReducer } from "./categoryReducer";
import { commentReducer } from "./commentReducer";
import { contactReducer } from "./contactReducer";
import { countReducer } from "./countReducer";
import { currentUser } from "./currentUserReducer";
import { discountReducer } from "./discountReducer";
import { faqReducer } from "./faqReducer";
import { favoriteLengthReducer } from "./favoriteLengthReducer";
import { favoriteReducer } from "./favoriteReducer";
import { galleryReducer } from "./galleryReducer";
import { goldPriceReducer } from "./goldPriceReducer";
import { homeSliderReducer } from "./homeSliderReducer";
import { instructionReducer } from "./instructionReducer";
import { loaderReducer } from "./loaderReducer";
import { orderLengthReducer } from "./orderLengthReducer";
import { orderReducer } from "./orderReducer";
import { productCategoryReducer } from "./productCategoryReducer";
import { productNewReducer } from "./productNewReducer";
import { productReducer } from "./productReducer";
import { singleBlogReducer } from "./singleBlogReducer";
import { singleInstructionReducer } from "./singleInstructionReducer";
import { singleProductReducer } from "./singleProductReducer";
import { sliderReducer } from "./sliderReducer";
import { statusOrderReducer } from "./statusOrderReducer";
import { tagsReducer } from "./tagsReducer";
import { teamReducer } from "./teamReducer";
import { userBlogerReducer } from "./userBlogerReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
  loader: loaderReducer,
  currentUser: currentUser,
  address: addressReducer,
  tags: tagsReducer,
  gallery: galleryReducer,
  category: categoryReducer,
  contact: contactReducer,
  team: teamReducer,
  users: userReducer,
  slider: sliderReducer,
  blog: blogReducer,
  blogCategory: blogCategoryReducer,
  blogTag: blogTagReducer,
  product: productReducer,
  goldPrice: goldPriceReducer,
  homeSlider: homeSliderReducer,
  userBloger: userBlogerReducer,
  aboutUs: aboutUsReducer,
  singleBlog: singleBlogReducer,
  blogNew: blogNewReducer,
  productCategory: productCategoryReducer,
  singleProduct: singleProductReducer,
  productNew: productNewReducer,
  favorite: favoriteReducer,
  favoriteLength: favoriteLengthReducer,
  orderLength: orderLengthReducer,
  order: orderReducer,
  comment: commentReducer,
  statusorders: statusOrderReducer,
  instruction: instructionReducer,
  singleInstruction: singleInstructionReducer,
  counter: countReducer,
  faq: faqReducer,
  discount: discountReducer,
});
