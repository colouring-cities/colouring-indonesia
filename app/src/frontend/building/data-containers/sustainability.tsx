import i18next from "i18next";
import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import Verification from "../data-components/verification";
import VerificationMultilingual from "../data-components/verification-multilingual";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";

const EnergyCategoryOptions = ["A", "B", "C", "D", "E", "F", "G"];
const BreeamRatingOptions = [
  "Outstanding",
  "Excellent",
  "Very good",
  "Good",
  "Pass",
  "Unclassified",
];
/**
 * Sustainability view/edit section
 */
const SustainabilityView: React.FunctionComponent<CategoryViewProps> = (
  props
) => {
  let sust_breeam_rating_title = dataFields.sust_breeam_rating.title_en;
  let sust_breeam_rating_tooltip = dataFields.sust_breeam_rating.tooltip_en;

  let sust_dec_title = dataFields.sust_dec.title_en;
  let sust_dec_tooltip = dataFields.sust_dec.tooltip_en;

  let sust_aggregate_estimate_epc_title = dataFields.sust_aggregate_estimate_epc.title_en;
  let sust_aggregate_estimate_epc_tooltip = dataFields.sust_aggregate_estimate_epc.tooltip_en;

  let sust_retrofit_date_title = dataFields.sust_retrofit_date.title_en;
  let sust_retrofit_date_tooltip = dataFields.sust_retrofit_date.tooltip_en;

  let sust_life_expectancy_title = dataFields.sust_life_expectancy.title_en;
  // let sust_life_expectancy_tooltip = dataFields.sust_life_expectancy.tooltip_en;

  if (i18next.language === "id") {
    sust_breeam_rating_title = dataFields.sust_breeam_rating.title_id;
    sust_breeam_rating_tooltip = dataFields.sust_breeam_rating.tooltip_id;

     sust_dec_title = dataFields.sust_dec.title_en;
     sust_dec_tooltip = dataFields.sust_dec.tooltip_en;
  
     sust_aggregate_estimate_epc_title = dataFields.sust_aggregate_estimate_epc.title_en;
     sust_aggregate_estimate_epc_tooltip = dataFields.sust_aggregate_estimate_epc.tooltip_en;
  
     sust_retrofit_date_title = dataFields.sust_retrofit_date.title_en;
     sust_retrofit_date_tooltip = dataFields.sust_retrofit_date.tooltip_en;
  
     sust_life_expectancy_title = dataFields.sust_life_expectancy.title_en;
    //  sust_life_expectancy_tooltip = dataFields.sust_life_expectancy.tooltip_en;
  }
  return (
    <Fragment>
      {/* <SelectDataEntry
                title={dataFields.sust_breeam_rating.title}
                slug="sust_breeam_rating"
                value={props.building.sust_breeam_rating}
                tooltip={dataFields.sust_breeam_rating.tooltip}
                options={BreeamRatingOptions}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            /> */}
      <SelectDataEntryMultiLingual
        title={sust_breeam_rating_title}
        slug="sust_breeam_rating"
        value={props.building.sust_breeam_rating}
        tooltip={sust_breeam_rating_tooltip}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="sust_breeam_rating"
        allow_verify={
          props.user !== undefined &&
          props.building.sust_breeam_rating !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sust_breeam_rating")}
        user_verified_as={props.user_verified.sust_breeam_rating}
        verified_count={props.building.verified.sust_breeam_rating}
      />

      <SelectDataEntry
        title={sust_dec_title}
        slug="sust_dec"
        value={props.building.sust_dec}
        tooltip={sust_dec_tooltip}
        options={EnergyCategoryOptions}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <Verification
        slug="sust_dec"
        allow_verify={
          props.user !== undefined &&
          props.building.sust_dec !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sust_dec")}
        user_verified_as={props.user_verified.sust_dec}
        verified_count={props.building.verified.sust_dec}
      />

      <SelectDataEntry
        title={sust_aggregate_estimate_epc_title}
        slug="sust_aggregate_estimate_epc"
        value={props.building.sust_aggregate_estimate_epc}
        tooltip={sust_aggregate_estimate_epc_tooltip}
        options={EnergyCategoryOptions}
        disabled={true}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />

      <NumericDataEntry
        title={sust_retrofit_date_title}
        slug="sust_retrofit_date"
        value={props.building.sust_retrofit_date}
        tooltip={sust_retrofit_date_tooltip}
        step={1}
        min={1086}
        max={new Date().getFullYear()}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <Verification
        slug="sust_retrofit_date"
        allow_verify={
          props.user !== undefined &&
          props.building.sust_retrofit_date !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("sust_retrofit_date")}
        user_verified_as={props.user_verified.sust_retrofit_date}
        verified_count={props.building.verified.sust_retrofit_date}
      />

      <NumericDataEntry
        title={sust_life_expectancy_title}
        slug="sust_life_expectancy"
        value={props.building.sust_life_expectancy}
        step={1}
        min={1}
        disabled={true}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <DataEntry
        title="Repairability rating for type"
        slug=""
        value=""
        mode="view"
      />
      <DataEntry
        title="Adaptability within plot rating"
        slug=""
        value=""
        mode="view"
      />
    </Fragment>
  );
};
const SustainabilityContainer = withCopyEdit(SustainabilityView);

export default SustainabilityContainer;
