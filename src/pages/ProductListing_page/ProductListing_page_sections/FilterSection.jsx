import * as React from "react";
import Checkbox from "../../../components/ui/Checkbox";
import Button from "../../../components/ui/Button";
import Label from "../../../components/ui/Label";
import "../../../assets/styles/FilterSection.css";
import ChevronUpIcon from "../../../assets/icons/up-arrow.png";
import ChevronDownIcon from "../../../assets/icons/down-arrow.png";
import XIcon from "../../../assets/icons/Group 77221.png";
import PriceIcon from "../../../assets/icons/SAR.png";
import TrackImg from "../../../assets/icons/slider-track.png";
import FilledImg from "../../../assets/icons/slider-filled.png";
import ThumbMinImg from "../../../assets/icons/thumb-min.png";
import ThumbMaxImg from "../../../assets/icons/thumb-max.png";
const subCategories = [
  "Baby Nappies & Toiletries",
  "Baby Nutrition",
  "Mom Care & Baby Accessories",
];
const classOptions = ["Baby Toiletries", "Baby Wipes", "Regular Diapers"];
const subClassOptions = ["Baby Cologne", "Baby Cream", "Baby Lotion"];
const concernOptions = ["Weight Loss", "Hair", "Sleep Aid"];
const brands = [
  "21 ST CENTURY",
  "4ALLFAMILY",
  "4Moms",
  "6Pak",
  "A-Derma",
  "ABBOT",
  "ABBVIE",
];
const FilterSection = () => {
  const [isSubCategoriesOpen, setIsSubCategoriesOpen] = React.useState(true);
  const [isBrandOpen, setIsBrandOpen] = React.useState(true);
  const [subCategoryChecks, setSubCategoryChecks] = React.useState(
    Array(subCategories.length).fill(false)
  );
  const [classChecks, setClassChecks] = React.useState(
    Array(classOptions.length).fill(false)
  );
  const [subClassChecks, setSubClassChecks] = React.useState(
    Array(subClassOptions.length).fill(false)
  );
  const [concernChecks, setConcernChecks] = React.useState(
    Array(concernOptions.length).fill(false)
  );
  const [brandChecks, setBrandChecks] = React.useState(
    Array(brands.length).fill(false)
  );
  const handleClear = () => {
    setSubCategoryChecks(Array(subCategories.length).fill(false));
    setClassChecks(Array(classOptions.length).fill(false));
    setSubClassChecks(Array(subClassOptions.length).fill(false));
    setConcernChecks(Array(concernOptions.length).fill(false));
    setBrandChecks(Array(brands.length).fill(false));
  };
  return (
    <aside className="filter-aside">
      {/* Header */}
      <div className="filter-header">
        <h2 className="filter-title fs-32 fw-600">Filter by...</h2>
        <Button
          className="clear-button fs-16 fw-400 cursor-pointer"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      {/* Applied Filter Tag */}
      <Button className="apply-filter-button cursor-pointer">
        <img src={XIcon} alt="close" className="tag-icon" />
        <span className="fs-14 fw-500">Vitamin C</span>
      </Button>
      <div className="filter-sections">
        {/* Sub Categories */}
        <div className="filter-section">
          <div className="filter-trigger fs-14 fw-600">
            <span>Sub Categories</span>
            <img
              src={isSubCategoriesOpen ? ChevronUpIcon : ChevronDownIcon}
              alt="arrow"
              className="icon cursor-pointer"
              onClick={() => setIsSubCategoriesOpen(!isSubCategoriesOpen)}
            />
          </div>
          {isSubCategoriesOpen && (
            <div className="filter-content">
              {subCategories.map((item, index) => (
                <Label
                  key={index}
                  className="filter-label fs-16 fw-400 cursor-pointer"
                >
                  <Checkbox
                    checked={subCategoryChecks[index]}
                    onCheckedChange={() => {
                      const newChecks = [...subCategoryChecks];
                      newChecks[index] = !newChecks[index];
                      setSubCategoryChecks(newChecks);
                    }}
                  />
                  <span>{item}</span>
                </Label>
              ))}
            </div>
          )}
        </div>
        {/* Class */}
        <div className="filter-section">
          <div className="filter-trigger static fs-14 fw-600">
            <span>Class</span>
          </div>
          <div className="filter-content">
            {classOptions.map((item, index) => (
              <Label
                key={index}
                className="filter-label fs-16 fw-400 cursor-pointer"
              >
                <Checkbox
                  checked={classChecks[index]}
                  onCheckedChange={() => {
                    const newChecks = [...classChecks];
                    newChecks[index] = !newChecks[index];
                    setClassChecks(newChecks);
                  }}
                />
                <span>{item}</span>
              </Label>
            ))}
            <div className="show-more-text fs-12 fw-500 cursor-pointer">
              Show more
            </div>
          </div>
        </div>
        {/* Sub Class */}
        <div className="filter-section">
          <div className="filter-trigger static fs-14 fw-600">
            <span>Sub Class</span>
          </div>
          <div className="filter-content">
            {subClassOptions.map((item, index) => (
              <Label
                key={index}
                className="filter-label fs-16 fw-400 cursor-pointer"
              >
                <Checkbox
                  checked={subClassChecks[index]}
                  onCheckedChange={() => {
                    const newChecks = [...subClassChecks];
                    newChecks[index] = !newChecks[index];
                    setSubClassChecks(newChecks);
                  }}
                />
                <span>{item}</span>
              </Label>
            ))}
            <div className="show-more-text fs-12 fw-500 cursor-pointer">
              Show more
            </div>
          </div>
        </div>
        {/* Concerns */}
        <div className="filter-section">
          <div className="filter-trigger static fs-14 fw-600">
            <span>Concerns</span>
          </div>
          <div className="filter-content">
            {concernOptions.map((item, index) => (
              <Label
                key={index}
                className="filter-label fs-16 fw-400 cursor-pointer"
              >
                <Checkbox
                  checked={concernChecks[index]}
                  onCheckedChange={() => {
                    const newChecks = [...concernChecks];
                    newChecks[index] = !newChecks[index];
                    setConcernChecks(newChecks);
                  }}
                />
                <span>{item}</span>
              </Label>
            ))}
            <div className="show-more-text fs-12 fw-500 cursor-pointer">
              Show more
            </div>
          </div>
        </div>
        {/* Brand */}
        <div className="filter-section">
          <div className="filter-trigger fs-14 fw-600">
            <span>Brand</span>
            <img
              src={isBrandOpen ? ChevronUpIcon : ChevronDownIcon}
              alt="arrow"
              className="icon cursor-pointer"
              onClick={() => setIsBrandOpen(!isBrandOpen)}
            />
          </div>
          {isBrandOpen && (
            <div className="filter-content">
              {brands.map((item, index) => (
                <Label
                  key={index}
                  className="filter-label fs-16 fw-400 cursor-pointer"
                >
                  <Checkbox
                    checked={brandChecks[index]}
                    onCheckedChange={() => {
                      const newChecks = [...brandChecks];
                      newChecks[index] = !newChecks[index];
                      setBrandChecks(newChecks);
                    }}
                  />
                  <span>{item}</span>
                </Label>
              ))}
              <div className="show-more-text fs-12 fw-500 cursor-pointer">
                Show more
              </div>
            </div>
          )}
        </div>
        {/* Price Range */}
        <div className="filter-section">
          <div className="filter-trigger static fs-14 fw-600">
            <span>Price Range</span>
          </div>
          <div className="price-slider">
            <div className="price-max fs-14 fw-600">
              <span>1000</span>
              <img src={PriceIcon} alt="price" />
            </div>
            <div className="price-min fs-14 fw-600">
              <span>20</span>
              <img src={PriceIcon} alt="price" />
            </div>
            <img src={TrackImg} alt="track" className="slider-track" />
            <img src={FilledImg} alt="filled" className="slider-filled" />
            <img
              src={ThumbMinImg}
              alt="min"
              className="slider-thumb slider-thumb-min cursor-pointer"
            />
            <img
              src={ThumbMaxImg}
              alt="max"
              className="slider-thumb slider-thumb-max cursor-pointer"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
export default FilterSection;
