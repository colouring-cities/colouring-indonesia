import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import { MultiDataEntry } from "../data-components/multi-data-entry/multi-data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import TextboxDataEntry from "../data-components/textbox-data-entry";
import Verification from "../data-components/verification";
import YearDataEntry from "../data-components/year-data-entry";
import withCopyEdit from "../data-container";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
/**
 * Age view/edit section
 */
const AgeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const currentYear = new Date().getFullYear();
  if (
    props.building.date_source == "Expert knowledge of building" ||
    props.building.date_source == "Expert estimate from image" ||
    props.building.date_source == null
  ) {
    let facade_year_title = dataFields.facade_year.title_en;
    let facade_year_tooltip = dataFields.facade_year.tooltip_en;

    let date_source_title = dataFields.date_source.title_en;
    let date_source_tooltip = dataFields.date_source.tooltip_en;

    if (i18next.language === "id") {
      facade_year_title = dataFields.facade_year.title_en;
      facade_year_tooltip = dataFields.facade_year.tooltip_en;

      date_source_title = dataFields.date_source.title_en;
      date_source_tooltip = dataFields.date_source.tooltip_en;
    }

    return (
      <Fragment>
        <YearDataEntry
          year={props.building.date_year}
          upper={props.building.date_upper}
          lower={props.building.date_lower}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          allow_verify={
            props.user !== undefined &&
            props.building.date_year !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("date_year")}
          user_verified_as={props.user_verified.date_year}
          verified_count={props.building.verified.date_year}
          allow_verify_upper={
            props.user !== undefined &&
            props.building.date_upper !== null &&
            !props.edited
          }
          onVerify_upper={props.onVerify}
          user_verified_upper={props.user_verified.hasOwnProperty("date_upper")}
          user_verified_as_upper={props.user_verified.date_upper}
          verified_count_upper={props.building.verified.date_upper}
          allow_verify_lower={
            props.user !== undefined &&
            props.building.date_lower !== null &&
            !props.edited
          }
          onVerify_lower={props.onVerify}
          user_verified_lower={props.user_verified.hasOwnProperty("date_lower")}
          user_verified_as_lower={props.user_verified.date_lower}
          verified_count_lower={props.building.verified.date_lower}
        />
        {/* <NumericDataEntry
          title={facade_year_title}
          slug="facade_year"
          disabled={true}
          value={props.building.facade_year}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={1}
          min={1}
          max={currentYear}
          tooltip={facade_year_tooltip}
        />
        <Verification
          slug="facade_year"
          allow_verify={
            props.user !== undefined &&
            props.building.facade_year !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("facade_year")}
          user_verified_as={props.user_verified.facade_year}
          verified_count={props.building.verified.facade_year}
        /> */}

<SelectDataEntryMultiLingual
          title={date_source_title}
          slug="date_source"
          value={props.building.date_source}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={date_source_tooltip}
          // options={dataFields.date_source.items}
          placeholder={dataFields.date_source.example}
        />
        <VerificationMultilingual
          slug="date_source"
          allow_verify={
            props.user !== undefined &&
            props.building.date_source !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("date_source")}
          user_verified_as={props.user_verified.date_source}
          verified_count={props.building.verified.date_source}
        />
      </Fragment>
    );
  } else {
    let facade_year_title = dataFields.facade_year.title_en;
    let facade_year_tooltip = dataFields.facade_year.tooltip_en;

    let date_source_title = dataFields.date_source.title_en;
    let date_source_tooltip = dataFields.date_source.tooltip_en;

    let date_link_title = dataFields.date_link.title_en;
    let date_link_tooltip = dataFields.date_link.tooltip_en;

    if (i18next.language === "id") {
      facade_year_title = dataFields.facade_year.title_en;
      facade_year_tooltip = dataFields.facade_year.tooltip_en;

      date_source_title = dataFields.date_source.title_en;
      date_source_tooltip = dataFields.date_source.tooltip_en;

      date_link_title = dataFields.date_link.title_en;
      date_link_tooltip = dataFields.date_link.tooltip_en;
    }

    return (
      <Fragment>
        <YearDataEntry
          year={props.building.date_year}
          upper={props.building.date_upper}
          lower={props.building.date_lower}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          allow_verify={
            props.user !== undefined &&
            props.building.date_year !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("date_year")}
          user_verified_as={props.user_verified.date_year}
          verified_count={props.building.verified.date_year}
          allow_verify_upper={
            props.user !== undefined &&
            props.building.date_upper !== null &&
            !props.edited
          }
          onVerify_upper={props.onVerify}
          user_verified_upper={props.user_verified.hasOwnProperty("date_upper")}
          user_verified_as_upper={props.user_verified.date_upper}
          verified_count_upper={props.building.verified.date_upper}
          allow_verify_lower={
            props.user !== undefined &&
            props.building.date_lower !== null &&
            !props.edited
          }
          onVerify_lower={props.onVerify}
          user_verified_lower={props.user_verified.hasOwnProperty("date_lower")}
          user_verified_as_lower={props.user_verified.date_lower}
          verified_count_lower={props.building.verified.date_lower}
        />
        {/* <NumericDataEntry
          title={facade_year_title}
          slug="facade_year"
          disabled={true}
          value={props.building.facade_year}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={1}
          min={1}
          max={currentYear}
          tooltip={facade_year_tooltip}
        />
        <Verification
          slug="facade_year"
          allow_verify={
            props.user !== undefined &&
            props.building.facade_year !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("facade_year")}
          user_verified_as={props.user_verified.facade_year}
          verified_count={props.building.verified.facade_year}
        /> */}

        <SelectDataEntryMultiLingual
          title={date_source_title}
          slug="date_source"
          value={props.building.date_source}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={date_source_tooltip}
          // options={dataFields.date_source.items}
          placeholder={dataFields.date_source.example}
        />
        <VerificationMultilingual
          slug="date_source"
          allow_verify={
            props.user !== undefined &&
            props.building.date_source !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("date_source")}
          user_verified_as={props.user_verified.date_source}
          verified_count={props.building.verified.date_source}
        />
        <MultiDataEntry
          title={date_link_title}
          slug="date_link"
          value={props.building.date_link}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={date_link_tooltip}
          placeholder="https://..."
          editableEntries={true}
          isUrl={true}
        />
        <Verification
          slug="date_link"
          allow_verify={
            props.user !== undefined &&
            props.building.date_link !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("date_link")}
          user_verified_as={props.user_verified.date_link}
          verified_count={props.building.verified.date_link}
        />
      </Fragment>
    );
  }
};
const AgeContainer = withCopyEdit(AgeView);

export default AgeContainer;
